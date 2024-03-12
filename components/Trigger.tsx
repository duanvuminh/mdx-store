"use client";

import useAuth from "@/lib/hooks/use-auth";
import usePost from "@/lib/hooks/use-post";
import { Fragment } from "react";

export function UsePost({ postType }: { postType: string }) {
  const { useHook } = usePost();
  useHook(postType);
  return <Fragment />;
}

export function UseAuth() {
  const { useHook } = useAuth();
  useHook();
  return <Fragment />;
}
