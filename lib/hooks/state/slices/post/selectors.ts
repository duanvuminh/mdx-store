/* Instruments */

import { ReduxState } from "@/lib/hooks/state/store";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPostType = (state: ReduxState) => state.postSlice.postType;
