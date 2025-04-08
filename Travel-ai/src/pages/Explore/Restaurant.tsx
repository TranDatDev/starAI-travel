import GeneralList from '@/components/GeneralList';
import { fetchRestaurants } from '@/services/general/restaurantService';

const RestaurantPage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Danh sách Nhà Hàng</h2>
            <GeneralList fetchData={fetchRestaurants} category="accommodation" />
        </div>
    );
};

export default RestaurantPage;
