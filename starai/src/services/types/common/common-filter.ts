// ====== Nhóm nhỏ trước ======
// Tên (Name)
export type NameFilter = {
    name?: string;
};
// Location (Địa chỉ)
export type LocationFilter = {
    communeId?: string;
    districtId?: string;
    provinceId?: string;
    communeSlug?: string;
    districtSlug?: string;
    provinceSlug?: string;
};

// Khoảng giá (Price)
export type PriceFilter = {
    minPrice?: number;
    maxPrice?: number;
};

// Trạng thái đặc biệt (Status)
export type StatusFilter = {
    isAvailable?: boolean;
    isFeatured?: boolean;
};

// Pagination
export type PaginationFilter = {
    page?: number; // mặc định 1
    limit?: number; // mặc định 10
};

// Sort và Search
export type SortByField =
    | 'createdAt'
    | 'name'
    | 'minPrice'
    | 'maxPrice'
    | 'userRating'
    | 'officialRating'
    | 'reviewsCount'
    | 'isFeatured';

export type SortSearchFilter = {
    sortBy?: SortByField;
    sortOrder?: 'asc' | 'desc';
    search?: string;
};

// ====== Gộp tất cả thành CommonFilter ======

export type CommonFilter = LocationFilter &
    PriceFilter &
    StatusFilter &
    PaginationFilter &
    SortSearchFilter &
    NameFilter;
