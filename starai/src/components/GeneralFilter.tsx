import { useEffect, useState } from 'react';
import { fetchProvinces, fetchDistricts, fetchCommunes } from '@/services/general/locationService';
import { fetchAccommodationsByFilter } from '@/services/general/accommodationService';
import { fetchRestaurantsByFilter } from '@/services/general/restaurantService';
import { fetchAttractionsByFilter } from '@/services/general/attractionService';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { generateSlug } from '@/utils/slug';

interface GeneralFilterProps {
    service: 'accommodation' | 'restaurant' | 'attraction';
    onResult: (data: any) => void;
    onLoadingChange?: (loading: boolean) => void;
}

interface LocationOption {
    shortId: string;
    fullName: string;
}
import { useTranslation } from 'react-i18next';

export default function GeneralFilter({ service, onResult, onLoadingChange }: GeneralFilterProps) {
    const [provinces, setProvinces] = useState<LocationOption[]>([]);
    const [districts, setDistricts] = useState<LocationOption[]>([]);
    const [communes, setCommunes] = useState<LocationOption[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');
    const [selectedCommune, setSelectedCommune] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation();
    const serviceFetchers: Record<string, (filters: any) => Promise<any>> = {
        accommodation: fetchAccommodationsByFilter,
        restaurant: fetchRestaurantsByFilter,
        attraction: fetchAttractionsByFilter,
    };

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
                    shortId: generateSlug(item.fullName),
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

    const handleSearch = async () => {
        const filters = {
            commune: selectedCommune || undefined,
            keyword: keyword || undefined,
        };

        const fetcher = serviceFetchers[service];
        if (!fetcher) {
            console.error(`Service ${service} is not supported`);
            return;
        }

        setLoading(true);
        onLoadingChange?.(true);
        try {
            const result = await fetcher(filters);
            onResult(result);
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        } finally {
            setLoading(false);
            onLoadingChange?.(false);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Tìm kiếm từ khóa..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
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
                onValueChange={(value) => setSelectedCommune(generateSlug(value))}
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

            <Button onClick={handleSearch} disabled={loading}>
                {loading ? 'Đang tìm kiếm...' : 'Tìm kiếm'}
            </Button>
        </div>
    );
}
