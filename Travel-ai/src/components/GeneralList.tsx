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

// ✨ new code: import các service fetch
import {
    fetchAccommodations,
    fetchAccommodationsByFilter,
} from '@/services/general/accommodationService';
import { fetchRestaurants, fetchRestaurantsByFilter } from '@/services/general/restaurantService';
import { fetchAttractions, fetchAttractionsByFilter } from '@/services/general/attractionService';
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
    const [isTwoColumns, setIsTwoColumns] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // --- Filter states ---
    const [provinces, setProvinces] = useState<LocationOption[]>([]);
    const [districts, setDistricts] = useState<LocationOption[]>([]);
    const [communes, setCommunes] = useState<LocationOption[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');
    const [selectedCommune, setSelectedCommune] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [appliedFilters, setAppliedFilters] = useState<any>({
        communeId: '',
        search: '',
    });

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
        } else {
            setDistricts([]);
            setSelectedDistrict('');
            setCommunes([]);
            setSelectedCommune('');
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
        } else {
            setCommunes([]);
            setSelectedCommune('');
        }
    }, [selectedDistrict]);

    // --- Fetch data ---
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const filters = {
                    communeId: appliedFilters.commune || undefined,
                    search: generateSlug(appliedFilters.search) || undefined,
                    page,
                    limit,
                };

                const fetcher = fetchFunctions[service];
                if (!fetcher) throw new Error(`No fetch function for service: ${service}`);

                let response;
                const hasFilter = filters.communeId || filters.search;

                if (hasFilter) {
                    response = await fetcher.filter(filters);
                } else {
                    response = await fetcher.normal(page, limit);
                }

                setData(response);
                setError(null);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, limit, appliedFilters, service]);

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: String(newPage) }, { replace: true });
    };

    const handleSearch = () => {
        setAppliedFilters({
            commune: selectedCommune,
            search: search,
        });
        handlePageChange(1);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const totalPages = data?.totalPages || 1;
    const total = data?.total || null;

    return (
        <AnimatedBox>
            {/* --- Filters --- */}
            <div className="flex gap-4 mb-6">
                <Input
                    placeholder="Tìm kiếm từ khóa..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Select
                    value={selectedProvince}
                    onValueChange={(value) => setSelectedProvince(generateSlug(value))}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={t('filter.province.label')} />
                    </SelectTrigger>
                    <SelectContent>
                        {provinces.map((province) => (
                            <SelectItem key={province.shortId} value={province.shortId}>
                                {province.fullName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    value={selectedDistrict}
                    onValueChange={(value) => setSelectedDistrict(generateSlug(value))}
                    disabled={!districts.length}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={t('filter.district.label')} />
                    </SelectTrigger>
                    <SelectContent>
                        {districts.map((district) => (
                            <SelectItem key={district.shortId} value={district.shortId}>
                                {district.fullName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    value={selectedCommune}
                    onValueChange={(value) => setSelectedCommune(value)}
                    disabled={!communes.length}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={t('filter.commune.label')} />
                    </SelectTrigger>
                    <SelectContent>
                        {communes.map((commune) => (
                            <SelectItem key={commune.shortId} value={commune.shortId}>
                                {commune.fullName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Button onClick={handleSearch}>Tìm kiếm</Button>
            </div>

            {/* --- Result --- */}
            {total !== null && (
                <p className="text-lg mb-4 text-left">
                    {total > 0
                        ? t('accommodation.has-results', { count: total })
                        : t('accommodation.no-results')}
                </p>
            )}
            <div className="space-y-4">
                {/* --- View switch --- */}
                <div className="flex gap-2">
                    <Button
                        onClick={() => setIsTwoColumns(false)}
                        className={`p-2 flex items-center gap-2 rounded transition ${
                            !isTwoColumns ? 'bg-blue-600' : ''
                        }`}
                    >
                        <Icon icon="mdi:view-agenda" className="text-lg" />
                    </Button>

                    <Button
                        onClick={() => setIsTwoColumns(true)}
                        className={`p-2 flex items-center gap-2 rounded transition ${
                            isTwoColumns ? 'bg-yellow-500' : ''
                        }`}
                    >
                        <Icon icon="mdi:view-grid" className="text-lg" />
                    </Button>
                </div>

                {/* --- Pagination Top --- */}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                label={t('pagination.previous')}
                                onClick={() => handlePageChange(Math.max(page - 1, 1))}
                            />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <PaginationItem key={pageNumber}>
                                    <PaginationLink
                                        isActive={page === pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                    >
                                        {pageNumber}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        {totalPages > 5 && page < totalPages - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                label={t('pagination.next')}
                                onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                {/* --- List --- */}
                <div className={`grid ${isTwoColumns ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                    {data?.data?.map((item: any) => (
                        <Link to={`/${service}/${item.shortId}`} key={item.shortId}>
                            <Card className="px-2 py-8 rounded-lg shadow">
                                <CardContent>
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <h4 className="text-sm text-gray-500">{item.description}</h4>
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

                {/* --- Pagination Bottom --- */}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                label={t('pagination.previous')}
                                onClick={() => handlePageChange(Math.max(page - 1, 1))}
                            />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <PaginationItem key={pageNumber}>
                                    <PaginationLink
                                        isActive={page === pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                    >
                                        {pageNumber}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        {totalPages > 5 && page < totalPages - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                label={t('pagination.next')}
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
