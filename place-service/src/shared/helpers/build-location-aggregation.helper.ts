import { PipelineStage } from 'mongoose';

interface BuildLocationAggregationOptions {
  baseMatch?: any;
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
}: BuildLocationAggregationOptions): PipelineStage[] {
  const pipeline: PipelineStage[] = [
    { $match: baseMatch },

    // JOIN commune
    {
      $lookup: {
        from: 'communes',
        localField: 'communeId',
        foreignField: 'shortId',
        as: 'commune',
      },
    },
    { $unwind: { path: '$commune', preserveNullAndEmptyArrays: true } },

    // JOIN district
    {
      $lookup: {
        from: 'districts',
        localField: 'commune.districtId',
        foreignField: '_id',
        as: 'district',
      },
    },
    { $unwind: { path: '$district', preserveNullAndEmptyArrays: true } },

    // JOIN province
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

  // Filter theo location nếu không có communeId
  if (!communeId && districtId) {
    pipeline.push({
      $match: {
        'district.shortId': districtId,
      },
    });
  }

  if (!communeId && !districtId && provinceId) {
    pipeline.push({
      $match: {
        'province.shortId': provinceId,
      },
    });
  }

  // Nếu dùng slug thay vì ID
  if (!communeId && communeSlug) {
    pipeline.push({
      $match: {
        'commune.slug': communeSlug,
      },
    });
  }
  if (!districtId && districtSlug) {
    pipeline.push({
      $match: {
        'district.slug': districtSlug,
      },
    });
  }
  if (!provinceId && provinceSlug) {
    pipeline.push({
      $match: {
        'province.slug': provinceSlug,
      },
    });
  }

  // phân trang, sắp xếp, chọn field
  pipeline.push({
    $facet: {
      data: [
        { $sort: { [sortBy]: sortOrder === 'asc' ? 1 : -1 } },
        { $skip: (page - 1) * limit },
        { $limit: limit },
        { $project: projectFields },
      ],
      total: [{ $count: 'count' }],
    },
  });

  return pipeline;
}
