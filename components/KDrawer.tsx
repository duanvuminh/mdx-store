import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

export function KDrawer({
  isOpen,
  closeDrawer,
  children,
}: {
  isOpen: boolean;
  closeDrawer: ()=> void;
  children: ReactNode;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" open={isOpen} onClose={closeDrawer}>
        <div className="fixed inset-0 flex justify-start">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel>{children}</Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
