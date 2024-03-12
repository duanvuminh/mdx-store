"use client";

import useHeaderSearch from "@/lib/hooks/use-header-search";

export function KHeaderWrapSearch({ children }: { children: React.ReactNode }) {
  const { searchMode } = useHeaderSearch();
  const customHeaderClass = searchMode
    ? "bg-secondary w-full h-screen fixed left-0 z-10 top-0"
    : "bg-secondary rounded shadow";
  const customNavClass = searchMode
    ? "w-full flex items-center border-primary border-b py-o"
    : "w-full flex items-center py-0";
  return (
    <header className={`transition-all ${customHeaderClass}`}>
      <nav className={`${customNavClass}`}>{children}</nav>
    </header>
  );
}
