import { PostTypeState } from "@/lib/models/state";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: PostTypeState = {
  postType: undefined,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setPostType: (state, action: PayloadAction<string|undefined>) => {
      state.postType = action.payload;
    },
  },
});
