import { CommonFilter } from './common/common-filter';

// ====== Category Filter riêng biệt ======
export type AccommodationCategoryFilter = {
    category?:
        | 'hotel'
        | 'villa'
        | 'apartment'
        | 'cruise'
        | 'guesthouse'
        | 'homestay'
        | 'campground';
};

// ====== AccommodationFilter sử dụng ======
export type AccommodationFilter = CommonFilter & AccommodationCategoryFilter;
