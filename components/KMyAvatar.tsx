"use client";
import dynamic from "next/dynamic";

import { KAvatar } from "@/components/KAvatar";
import { getDictionary } from "@/lib/get-dictionary";
import useAuth from "@/lib/hooks/use-auth";
import { Fragment, useState } from "react";

export function KMyAvatar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}): React.ReactNode {
  let [isOpen, setIsOpen] = useState(false);
  const { kUser, login } = useAuth();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    if (!kUser?.token) {
      login();
      return;
    }
    setIsOpen(true);
  }
  const ComponentC = dynamic(() => import("./ui/KMyAvatarDialog"), {
    ssr: false,
  });
  const photoURL = kUser?.photoURL;
  return (
    <Fragment>
      <KAvatar onClick={openModal} className="cursor-pointer" url={photoURL} />
      {isOpen && (
        <ComponentC
          isOpen={isOpen}
          closeModal={closeModal}
          dictionary={dictionary}
        />
      )}
    </Fragment>
  );
}
