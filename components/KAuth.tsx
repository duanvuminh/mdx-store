"use client";

import useAuth from "@/lib/hooks/use-auth";
import { ReactNode } from "react";

export function KAuth({
  fallBack,
  children,
}: {
  children: ReactNode;
  fallBack: React.ReactNode;
}): React.ReactNode {
  const { kUser } = useAuth();
  return kUser?.token != undefined ? (
    children
  ) : (
    <div className="p-2 space-y-4">{fallBack}</div>
  );
}
