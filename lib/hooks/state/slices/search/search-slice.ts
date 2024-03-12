import { SearchState } from "@/lib/models/state";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: SearchState = {
  text: "",
  isEnterSearchMode: false
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setSearchMode: (state, action: PayloadAction<boolean>) => {
      state.isEnterSearchMode = action.payload;
    }
  },
});
