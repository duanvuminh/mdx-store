export const csI18n = {
  defaultLocale: "ja",
  locales: ["vi", "ja", "en"],
} as const;
export const csKStorage = {
  posts_local_storage: "posts_local_storage",
  level_local_storage: "level_local_storage",
};
export const TYPES = {
  IPostRepository : Symbol.for("IPostRepository"),
  IAuthRepository : Symbol.for("IAuthRepository"),
  IApi : Symbol.for("IApi"),
};
export const csDays = 28;
export const csKToken = "kToken" ;
export const csExpired = 365 ;


