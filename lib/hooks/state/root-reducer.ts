import { historySlice } from "./slices/history/history-slice";
import { postSlice } from "./slices/post/post-slice";
import { searchSlice } from "./slices/search/search-slice";
import { userSlice } from "./slices/user/user-slice";

export const reducer = {
  [searchSlice.name]: searchSlice.reducer,
  [historySlice.name]: historySlice.reducer,
  [postSlice.name]: postSlice.reducer,
  [userSlice.name] : userSlice.reducer
};
