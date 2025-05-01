import { CommonFilter } from './common/common-filter';

// ====== Category Filter riêng biệt ======
export type AttractionCategoryFilter = {
    category?:
        | 'natural'
        | 'historical'
        | 'museum'
        | 'amusement-park'
        | 'cultural'
        | 'religious'
        | 'landscape'
        | 'shopping';
};

// ====== AttractionFilter sử dụng ======
export type AttractionFilter = CommonFilter & AttractionCategoryFilter;
