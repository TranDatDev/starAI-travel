import GeneralList from '@/components/GeneralList';
import { fetchAccommodations } from '@/services/general/accommodationService';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import AnimatedBox from '@/components/AnimatedBox';
const AccommodationPage = () => {
    const { t } = useTranslation();
    const [total, setTotal] = useState<number | null>(null);

    useEffect(() => {
        const loadTotal = async () => {
            try {
                const data = await fetchAccommodations(1, 1);
                setTotal(data.total);
            } catch (error) {
                console.error('Error fetching total accommodations:', error);
            }
        };
        loadTotal();
    }, []);
    return (
        <AnimatedBox>
            <div className="py-6">
                <h2 className="text-3xl font-bold mb-4 text-left">{t('accommodation.title')}</h2>
                {total !== null && (
                    <p className="text-lg mb-4 text-left">
                        {total > 0
                            ? t('accommodation.has-results', { count: total })
                            : t('accommodation.no-results')}
                    </p>
                )}
                <GeneralList fetchData={fetchAccommodations} category="accommodation" />
            </div>
        </AnimatedBox>
    );
};

export default AccommodationPage;
