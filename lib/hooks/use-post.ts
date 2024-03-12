import { useEffect } from "react";

import { postSlice } from "@/lib/hooks/state/slices/post/post-slice";
import { selectPostType } from "@/lib/hooks/state/slices/post/selectors";
import { useDispatch, useSelector } from "@/lib/hooks/state/store";

export default function usePost() {
  const dispatch = useDispatch();
  const postType = useSelector(selectPostType);
  const changePostType = (postType?: string) => {
    dispatch(postSlice.actions.setPostType(postType));
  };
  const useHook = (_postType: string) => {
    useEffect(() => {
      changePostType(_postType);
      return () => {
        changePostType(undefined);
      };
    }, [_postType]);
  };
  return { postType, useHook };
}
