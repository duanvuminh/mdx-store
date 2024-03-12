"use client";

import { KDrawer } from "@/components/KDrawer";
import useDrawer from "@/lib/hooks/use-drawer";
import useHeaderSearch from "@/lib/hooks/use-header-search";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import {
  Bars3Icon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { KSideBarMenu } from "@/components/KSideBarMenu";

export function KButtonLeadingSearch({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}): React.ReactNode {
  const { exitSearchMode, searchMode } =
    useHeaderSearch();
  const { useHook, isOpen, setIsOpen } = useDrawer();
  useHook();
  const closeDrawer = () => {
    setIsOpen(false);
  };
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }
  const drawer = (
    <Fragment>
      <Button size="sm" variant="ghost">
        <Bars3Icon
          onClick={toggleDrawer}
          className="block h-7 w-7 md:hidden"
          aria-hidden="true"
        />
        <MagnifyingGlassIcon
          className="h-7 w-7 hidden md:block"
          aria-hidden="true"
        />
      </Button>
      <KDrawer isOpen={isOpen} closeDrawer={closeDrawer}>
        <KSideBarMenu
          closeDrawer={closeDrawer}
          dictionary={dictionary}
          variant={"destructive"}
        />
      </KDrawer>
    </Fragment>
  );
  return searchMode ? (
    <Button variant="ghost" onClick={exitSearchMode}>
      <ChevronLeftIcon className="block h-7 w-7" aria-hidden="true" />
    </Button>
  ) : drawer;
}
