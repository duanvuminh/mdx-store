import { User, UserState } from "@/lib/models/state";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});
