import { CommonFilter } from './common/common-filter';

// ====== Category Filter riêng biệt ======
export type RestaurantCategoryFilter = {
    category?: 'buffet' | 'casual' | 'fine-dining' | 'cafe' | 'street-food' | 'fast-food';
};

// ====== RestaurantFilter sử dụng ======
export type RestaurantFilter = CommonFilter & RestaurantCategoryFilter;
