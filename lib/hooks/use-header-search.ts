import { searchSlice } from "@/lib/hooks/state/slices/search/search-slice";
import {
  selectIsEnterSearchMode,
  selectSearchText,
} from "@/lib/hooks/state/slices/search/selectors";
import { useDispatch, useSelector } from "@/lib/hooks/state/store";
import { useState } from "react";

export default function useHeaderSearch() {
  const dispatch = useDispatch();
  const text = useSelector(selectSearchText);
  const searchMode = useSelector(selectIsEnterSearchMode);
  const [showClear, setShowClear] = useState(false);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch(searchSlice.actions.setText(newValue));
    if (newValue.length > 0) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  };

  const onFocus = () => {
    dispatch(searchSlice.actions.setSearchMode(true));
  };

  const exitSearchMode = () => {
    dispatch(searchSlice.actions.setSearchMode(false));
  };

  const onClear = () => {
    dispatch(searchSlice.actions.setText(""));
    setShowClear(false);
  };

  return {
    searchMode,
    text,
    showClear,
    onChange,
    onClear,
    onFocus,
    exitSearchMode,
  };
}
