import { PipelineStage } from 'mongoose';
interface BuildLocationAggregationOptions {
  baseMatch?: Record<string, any>;
  communeId?: string;
  districtId?: string;
  provinceId?: string;
  communeSlug?: string;
  districtSlug?: string;
  provinceSlug?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  projectFields?: Record<string, any>;
  includeLocation?: boolean;
}

function buildLocationJoins(): PipelineStage[] {
  return [
    {
      $lookup: {
        from: 'communes',
        localField: 'communeId',
        foreignField: 'shortId',
        as: 'commune',
      },
    },
    { $unwind: { path: '$commune', preserveNullAndEmptyArrays: true } },

    {
      $lookup: {
        from: 'districts',
        localField: 'commune.districtId',
        foreignField: '_id',
        as: 'district',
      },
    },
    { $unwind: { path: '$district', preserveNullAndEmptyArrays: true } },

    {
      $lookup: {
        from: 'provinces',
        localField: 'district.provinceId',
        foreignField: '_id',
        as: 'province',
      },
    },
    { $unwind: { path: '$province', preserveNullAndEmptyArrays: true } },
  ];
}

export function buildLocationAggregation({
  baseMatch = {},
  communeId,
  districtId,
  provinceId,
  communeSlug,
  districtSlug,
  provinceSlug,
  page = 1,
  limit = 10,
  sortBy = 'createdAt',
  sortOrder = 'desc',
  projectFields = {},
  includeLocation = true,
}: BuildLocationAggregationOptions): PipelineStage[] {
  const pipeline: PipelineStage[] = [{ $match: baseMatch }];

  if (includeLocation) {
    pipeline.push(...buildLocationJoins());

    const locationMatch: Record<string, any> = {};

    if (communeId) locationMatch['commune.shortId'] = communeId;
    else if (communeSlug) locationMatch['commune.slug'] = communeSlug;

    if (!communeId) {
      if (districtId) locationMatch['district.shortId'] = districtId;
      else if (districtSlug) locationMatch['district.slug'] = districtSlug;
    }

    if (!communeId && !districtId) {
      if (provinceId) locationMatch['province.shortId'] = provinceId;
      else if (provinceSlug) locationMatch['province.slug'] = provinceSlug;
    }

    if (Object.keys(locationMatch).length > 0) {
      pipeline.push({ $match: locationMatch });
    }
  }

  const dataPipeline: PipelineStage[] = [
    { $sort: { [sortBy]: sortOrder === 'asc' ? 1 : -1 } },
    { $skip: (page - 1) * limit },
    { $limit: limit },
  ];

  if (Object.keys(projectFields).length > 0) {
    dataPipeline.push({ $project: projectFields });
  }

  pipeline.push({
    $facet: {
      data: dataPipeline as PipelineStage.FacetPipelineStage[],
      total: [{ $count: 'count' }],
    },
  });

  return pipeline;
}
