"use client";
import { Fragment } from "react";

import { KMyAvatar } from "@/components/KMyAvatar";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import useHeaderSearch from "@/lib/hooks/use-header-search";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function KInputSearch({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}): React.ReactNode {
  const { text, showClear, onChange, onClear, onFocus } = useHeaderSearch();
  return (
    <Fragment>
      <input
        name="search"
        className="appearance-none bg-transparent border-none w-full dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        value={text}
        placeholder={dictionary.search}
        onChange={onChange}
        onFocus={onFocus}
        aria-label="search"
      />
      <Button
        variant="ghost"
        className={`${showClear ? "visible" : "invisible"}`}
        onClick={onClear}
      >
        <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
      </Button>
      {showClear ? <Fragment /> : <KMyAvatar dictionary={dictionary} />}
    </Fragment>
  );
}
