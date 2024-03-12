import { csExpired, csKToken } from "@/lib/const";
import { auth } from "@/lib/firebase-client";
import { selectUser } from "@/lib/hooks/state/slices/user/selectors";
import { userSlice } from "@/lib/hooks/state/slices/user/user-slice";
import { useDispatch, useSelector } from "@/lib/hooks/state/store";
import { User } from "@/lib/models/state";
import { deleteCookie, setCookie } from "@/lib/utils";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";

export default function useAuth() {
  const dispatch = useDispatch();
  const kUser = useSelector(selectUser);
  const setUserState = (user: User) => {
    dispatch(userSlice.actions.setUser(user));
  };
  const useHook = () => {
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const token = await user.getIdToken();
          const newUser: User = {
            token: token,
            photoURL: user.photoURL ?? undefined,
            displayName: user.displayName ?? undefined,
            email: user.email ?? undefined,
          };
          if (kUser?.token != newUser.token) {
            setUserState(newUser);
            setCookie(csKToken, token, csExpired);
          }
        } else {
          deleteCookie(csKToken);
          setUserState({});
        }
      });
      return () => unsubscribe();
    }, []);
  };
  const logout = () => {
    auth.signOut();
  };
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return { useHook, kUser, logout, login };
}
