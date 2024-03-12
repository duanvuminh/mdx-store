/* Core */
import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from "react-redux";

/* Instruments */
import { User } from "@/lib/models/state";
import { reducer } from "./root-reducer";

export const reduxStore = (user?: User) =>
  configureStore({
    reducer: reducer,
    preloadedState: {
      userSlice: {
        user: user,
      },
    },
  });

export const reduxStoreType = configureStore({
  reducer: reducer,
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStoreType.getState>;
export type ReduxDispatch = typeof reduxStoreType.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
