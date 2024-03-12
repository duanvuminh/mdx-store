export interface LevelState {
  level: string;
}
export interface SearchState {
  text: string;
  isEnterSearchMode: boolean;
}
export interface HistoryState {
  hasHistory: boolean;
}

export interface PostTypeState {
  postType?: string;
}

export interface User {
  token?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
}

export interface UserState {
  user?: User;
}