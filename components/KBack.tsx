"use client";

import { Button } from "@/components/ui/button";
import useHistory from "@/lib/hooks/use-browser-history";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export function KBack({ postType }: { postType: string }) {
  const { back } = useHistory();
  const onClick = () => {
    back(postType);
  };
  return (
    <Button variant="ghost" size="sm" onClick={onClick}>
      <ChevronLeftIcon className="block 7 w-7" aria-hidden="true" />
    </Button>
  );
}
