import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Icon } from '@iconify/react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { useTranslation } from 'react-i18next';
import AnimatedBox from '@/components/AnimatedBox';
import { Link } from 'react-router';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import CurrencyConverter from './CurrencyConverter';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { fetchProvinces, fetchDistricts, fetchCommunes } from '@/services/general/locationService';
import { generateSlug } from '@/utils/slug';
import {
    fetchAccommodations,
    fetchAccommodationsByFilter,
} from '@/services/general/accommodationService';
import { fetchRestaurants, fetchRestaurantsByFilter } from '@/services/general/restaurantService';
import { fetchAttractions, fetchAttractionsByFilter } from '@/services/general/attractionService';
import i18n from '@/locales/i18n';
const fetchFunctions: Record<
    string,
    {
        normal: (page: number, limit: number) => Promise<any>;
        filter: (filters: any) => Promise<any>;
    }
> = {
    accommodation: {
        normal: fetchAccommodations,
        filter: fetchAccommodationsByFilter,
    },
    restaurant: {
        normal: fetchRestaurants,
        filter: fetchRestaurantsByFilter,
    },
    attraction: {
        normal: fetchAttractions,
        filter: fetchAttractionsByFilter,
    },
};

interface GeneralListProps {
    service: string;
}

interface LocationOption {
    shortId: string;
    fullName: string;
}

const GeneralList: React.FC<GeneralListProps> = ({ service }) => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const limit = 10;

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [provinces, setProvinces] = useState<LocationOption[]>([]);
    const [districts, setDistricts] = useState<LocationOption[]>([]);
    const [communes, setCommunes] = useState<LocationOption[]>([]);

    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
    const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
    const [selectedProvince, setSelectedProvince] = useState(searchParams.get('province') || '');
    const [selectedDistrict, setSelectedDistrict] = useState(searchParams.get('district') || '');
    const [selectedCommune, setSelectedCommune] = useState(searchParams.get('commune') || '');
    const [isFeatured, setIsFeatured] = useState(searchParams.get('isFeatured') === 'true');
    const [isAvailable, setIsAvailable] = useState(searchParams.get('isAvailable') === 'true');
    const [isTwoColumns, setIsTwoColumns] = useState(false);

    const [appliedFilters, setAppliedFilters] = useState<any>({});

    useEffect(() => {
        const loadProvinces = async () => {
            const data = await fetchProvinces();
            const provincesData = data.map((item: any) => ({
                shortId: generateSlug(item.fullName),
                fullName: item.fullName,
            }));
            setProvinces(provincesData);
        };
        loadProvinces();
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            const loadDistricts = async () => {
                const data = await fetchDistricts(selectedProvince);
                const districtsData = data.map((item: any) => ({
                    shortId: generateSlug(item.fullName),
                    fullName: item.fullName,
                }));
                setDistricts(districtsData);
                setSelectedDistrict('');
                setCommunes([]);
                setSelectedCommune('');
            };
            loadDistricts();
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            const loadCommunes = async () => {
                const data = await fetchCommunes(selectedDistrict);
                const communesData = data.map((item: any) => ({
                    shortId: item.shortId,
                    fullName: item.fullName,
                }));
                setCommunes(communesData);
                setSelectedCommune('');
            };
            loadCommunes();
        }
    }, [selectedDistrict]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const filters = {
                    provinceSlug: selectedProvince || undefined,
                    districtSlug: selectedDistrict || undefined,
                    communeId: selectedCommune || undefined,
                    search: search ? generateSlug(search) : undefined,
                    isFeatured: isFeatured || undefined,
                    isAvailable: isAvailable || undefined,
                    minPrice: minPrice ? parseInt(minPrice) : undefined,
                    maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
                    page,
                    limit,
                };

                const fetcher = fetchFunctions[service];
                if (!fetcher) throw new Error(`No fetch function for service: ${service}`);

                const hasFilter = Object.values(filters).some((v) => v !== undefined);
                const response = hasFilter
                    ? await fetcher.filter(filters)
                    : await fetcher.normal(page, limit);

                setData(response);
                setError(null);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, appliedFilters, service]);

    const updateURLParams = (params: Record<string, any>) => {
        const newParams = new URLSearchParams(searchParams);
        Object.entries(params).forEach(([key, value]) => {
            if (value === '' || value === undefined || value === false) {
                newParams.delete(key);
            } else {
                newParams.set(key, String(value));
            }
        });
        setSearchParams(newParams);
    };

    const handlePageChange = (newPage: number) => {
        updateURLParams({ page: newPage });
    };

    const handleSearch = () => {
        setAppliedFilters({
            provinceSlug: selectedProvince,
            districtSlug: selectedDistrict,
            communeId: selectedCommune,
            search,
            isFeatured,
            isAvailable,
            minPrice,
            maxPrice,
        });

        updateURLParams({
            page: 1,
            search,
            minPrice,
            maxPrice,
            provinceSlug: selectedProvince,
            districtSlug: selectedDistrict,
            commune: selectedCommune,
            isFeatured,
            isAvailable,
        });
    };

    const totalPages = data?.total && data?.limit ? Math.ceil(data.total / data.limit) : 1;
    const total = data?.total || 0;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    const language = i18n.language;
    return (
        <AnimatedBox>
            {/* Filters */}
            <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-6">
                <Input
                    placeholder="Tìm kiếm từ khóa..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Input
                    placeholder="Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <Input
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <Select
                    value={selectedProvince}
                    onValueChange={(v) => setSelectedProvince(generateSlug(v))}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Tỉnh/Thành" />
                    </SelectTrigger>
                    <SelectContent>
                        {provinces.map((p) => (
                            <SelectItem key={p.shortId} value={p.shortId}>
                                {p.fullName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select
                    value={selectedDistrict}
                    onValueChange={(v) => setSelectedDistrict(generateSlug(v))}
                    disabled={!districts.length}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Quận/Huyện" />
                    </SelectTrigger>
                    <SelectContent>
                        {districts.map((d) => (
                            <SelectItem key={d.shortId} value={d.shortId}>
                                {d.fullName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select
                    value={selectedCommune}
                    onValueChange={setSelectedCommune}
                    disabled={!communes.length}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Phường/Xã" />
                    </SelectTrigger>
                    <SelectContent>
                        {communes.map((c) => (
                            <SelectItem key={c.shortId} value={c.shortId}>
                                {c.fullName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="flex flex-col gap-4 lg:flex-row">
                    {/* isFeatured Filter */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={isFeatured}
                            onChange={(e) => setIsFeatured(e.target.checked)}
                            id="isFeatured"
                            className="mr-2"
                        />
                        <label htmlFor="isFeatured">{t('filter.isFeatured')}</label>
                    </div>

                    {/* isAvailable Filter */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={isAvailable}
                            onChange={(e) => setIsAvailable(e.target.checked)}
                            id="isAvailable"
                            className="mr-2"
                        />
                        <label htmlFor="isAvailable">{t('filter.isAvailable')}</label>
                    </div>
                </div>
                <Button onClick={handleSearch}>Tìm kiếm</Button>
            </div>

            {total !== null && (
                <p className="text-lg mb-4 text-left">
                    {total > 0
                        ? t('accommodation.has-results', { count: total })
                        : t('accommodation.no-results')}
                </p>
            )}

            <div className="space-y-4">
                <div className="flex gap-2">
                    <Button
                        onClick={() => setIsTwoColumns(false)}
                        className={!isTwoColumns ? 'bg-blue-600' : ''}
                    >
                        <Icon icon="mdi:view-agenda" />
                    </Button>
                    <Button
                        onClick={() => setIsTwoColumns(true)}
                        className={isTwoColumns ? 'bg-yellow-500' : ''}
                    >
                        <Icon icon="mdi:view-grid" />
                    </Button>
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => handlePageChange(Math.max(page - 1, 1))}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    isActive={page === i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {totalPages > 5 && page < totalPages - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                <div className={`grid ${isTwoColumns ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                    {data?.data?.map((item: any) => (
                        <Link to={`/${service}/${item.shortId}`} key={item.shortId}>
                            <Card className="px-2 py-8 rounded-lg shadow">
                                <CardContent>
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <h4 className="text-sm text-gray-500">
                                        {item.description[language]}
                                    </h4>
                                    <p className="text-sm">{item.fullAddress}</p>
                                    <div className="flex mt-2">
                                        <CurrencyConverter amount={item.minPrice} />
                                        <span className="mx-2">-</span>
                                        <CurrencyConverter amount={item.maxPrice} />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => handlePageChange(Math.max(page - 1, 1))}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    isActive={page === i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {totalPages > 5 && page < totalPages - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </AnimatedBox>
    );
};

export default GeneralList;
