// Định nghĩa Enum phân loại địa điểm du lịch tại Việt Nam

// Thiên nhiên
export enum NaturalAttractionCategory {
  BEACH = 'natural:beach',
  ISLAND = 'natural:island',
  WATERFALL = 'natural:waterfall',
  MOUNTAIN = 'natural:mountain',
  FOREST = 'natural:forest',
  CAVE = 'natural:cave',
  RIVER = 'natural:river',
  LAKE = 'natural:lake',
  NATIONAL_PARK = 'natural:national-park',
  LAGOON = 'natural:lagoon',
}

// Văn hoá
export enum CulturalAttractionCategory {
  VILLAGE = 'cultural:village',
  TRADITIONAL_HOUSE = 'cultural:traditional-house',
  TRADITIONAL_THEATER = 'cultural:traditional-theater',
  FOLK_ART = 'cultural:folk-art',
  CULTURE_CENTER = 'cultural:culture-center',
}

// Di tích lịch sử
export enum HistoricalAttractionCategory {
  CITADEL = 'historical:citadel',
  ROYAL_TOMB = 'historical:royal-tomb',
  PALACE = 'historical:palace',
  ANCIENT_SITE = 'historical:ancient-site',
  WAR_SITE = 'historical:war-site',
  HISTORY_MUSEUM = 'historical:history-museum',
  TEMPLE_OF_LITERATURE = 'historical:temple-of-literature',
}

// Tín ngưỡng - tôn giáo
export enum ReligiousAttractionCategory {
  PAGODA = 'religious:pagoda',
  TEMPLE = 'religious:temple',
  CHURCH = 'religious:church',
  SHRINE = 'religious:shrine',
  CATHEDRAL = 'religious:cathedral',
  MONASTERY = 'religious:monastery',
}

// Vui chơi - giải trí
export enum EntertainmentAttractionCategory {
  THEME_PARK = 'entertainment:theme-park',
  WATER_PARK = 'entertainment:water-park',
  ZOO = 'entertainment:zoo',
  AQUARIUM = 'entertainment:aquarium',
  NIGHT_SHOW = 'entertainment:night-show',
  CABLE_CAR = 'entertainment:cable-car',
  OBSERVATION_WHEEL = 'entertainment:observation-wheel',
}

// Mua sắm
export enum ShoppingAttractionCategory {
  NIGHT_MARKET = 'shopping:night-market',
  TRADITIONAL_MARKET = 'shopping:traditional-market',
  FLOATING_MARKET = 'shopping:floating-market',
  HANDICRAFT_MARKET = 'shopping:handicraft-market',
}

// Công trình biểu tượng
export enum LandmarkAttractionCategory {
  TOWER = 'landmark:tower',
  BRIDGE = 'landmark:bridge',
  STATUE = 'landmark:statue',
  CLOCK_TOWER = 'landmark:clocktower',
  SQUARE = 'landmark:square',
  GATE = 'landmark:gate',
  FLAGPOLE = 'landmark:flagpole',
}

// Làng nghề truyền thống
export enum CraftVillageAttractionCategory {
  CERAMIC = 'craft-village:ceramic',
  SILK = 'craft-village:silk',
  WOOD_CARVING = 'craft-village:wood-carving',
  INCENSE = 'craft-village:incense',
  CONICAL_HAT = 'craft-village:conical-hat',
  COCONUT_CANDY = 'craft-village:coconut-candy',
  PAPER_FLOWER = 'craft-village:paper-flower',
}

// Ẩm thực đặc sản
export enum CulinaryAttractionCategory {
  STREET_FOOD = 'culinary:street-food',
  LOCAL_DISH = 'culinary:local-dish',
  FOOD_MARKET = 'culinary:food-market',
  SPECIALTY_VILLAGE = 'culinary:specialty-village',
  SEAFOOD_MARKET = 'culinary:seafood-market',
}

// Lễ hội - sự kiện
export enum EventAttractionCategory {
  SPRING_FESTIVAL = 'event:spring-festival',
  AUTUMN_FESTIVAL = 'event:autumn-festival',
  TRADITIONAL_FESTIVAL = 'event:traditional-festival',
  FIREWORKS = 'event:fireworks',
  CULTURAL_SHOW = 'event:cultural-show',
  PARADE = 'event:parade',
  HISTORICAL_REENACTMENT = 'event:historical-reenactment',
}

// Khác
export enum OtherAttractionCategory {
  VIEWPOINT = 'other:viewpoint',
  CHECKIN = 'other:checkin',
  PHOTO_SPOT = 'other:photo-spot',
  UNESCO = 'other:unesco',
}

// Export gộp
export const VNAttractionCategory = {
  ...NaturalAttractionCategory,
  ...CulturalAttractionCategory,
  ...HistoricalAttractionCategory,
  ...ReligiousAttractionCategory,
  ...EntertainmentAttractionCategory,
  ...ShoppingAttractionCategory,
  ...LandmarkAttractionCategory,
  ...CraftVillageAttractionCategory,
  ...CulinaryAttractionCategory,
  ...EventAttractionCategory,
  ...OtherAttractionCategory,
} as const;

export type VNAttractionCategoryType =
  (typeof VNAttractionCategory)[keyof typeof VNAttractionCategory];
