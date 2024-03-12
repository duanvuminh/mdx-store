import { HistoryState } from "@/lib/models/state";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: HistoryState = {
  hasHistory:false
};

export const historySlice = createSlice({
  name: "historySlice",
  initialState,
  reducers: {
    setHasHistory: (state, action: PayloadAction<boolean>) => {
      state.hasHistory = action.payload;
    }
  },
});
