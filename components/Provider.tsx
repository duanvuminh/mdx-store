"use client";

import { reduxStore } from "@/lib/hooks/state/store";
import { User } from "@/lib/models/state";
import { Provider } from "react-redux";

export const Providers = ({
  user,
  children,
}: {
  children: React.ReactNode;
  user: User;
}) => {
  return <Provider store={reduxStore(user)}>{children}</Provider>;
};
