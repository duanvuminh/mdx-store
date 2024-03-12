import { historySlice } from "@/lib/hooks/state/slices/history/history-slice";
import { selectHistory } from "@/lib/hooks/state/slices/history/selectors";
import { useDispatch, useSelector } from "@/lib/hooks/state/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useHistory() {
  const router = useRouter();
  const dispatch = useDispatch();
  const hasHistory = useSelector(selectHistory);

  const changeHistoryFlag = (value: boolean) => {
    dispatch(historySlice.actions.setHasHistory(value));
  };

  const back = (postType: string) => {
    if (hasHistory) {
      return router.back();
    }
    return router.push("/");
  };

  const useHook = () => {
    useEffect(() => {
      changeHistoryFlag(true);
      return () => {};
    }, []);
  };
  return { useHook, back };
}
