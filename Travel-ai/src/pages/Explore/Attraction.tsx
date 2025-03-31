import GeneralList from '@/components/GeneralList';
import { fetchAttractions } from '@/services/general/attractionService';

const AttractionPage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Danh sách Điểm Tham Quan</h2>
            <GeneralList fetchData={fetchAttractions} />
        </div>
    );
};

export default AttractionPage;
