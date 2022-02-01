export enum SignupStep {
  TERM_CONFIRM,
  // 기본정보
  USER_INFO,
  // 프로필
  PROFILE_INPUT,
}

export enum PathCategory {
  _,
  // 검색
  SEARCH,
  // 카페
  SEARCH_CAFE,
  // 지인추천
  SEARCH_HUMAN,
  // 광고
  SEARCH_AD,
}

export const JoinPathLabel = {
  [PathCategory.SEARCH]: "검색",
  [PathCategory.SEARCH_CAFE]: "카페",
  [PathCategory.SEARCH_HUMAN]: "지인 추천",
  [PathCategory.SEARCH_AD]: "광고",
};
