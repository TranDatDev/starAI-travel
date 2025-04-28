import GeneralList from '@/components/GeneralList';
import { useTranslation } from 'react-i18next';
import AnimatedBox from '@/components/AnimatedBox';
const RestaurantPage = () => {
    const { t } = useTranslation();
    return (
        <AnimatedBox>
            <div className="py-6">
                <h2 className="text-3xl font-bold mb-4 text-left">{t('restaurant.title')}</h2>
                <GeneralList service="restaurant" />
            </div>
        </AnimatedBox>
    );
};

export default RestaurantPage;
