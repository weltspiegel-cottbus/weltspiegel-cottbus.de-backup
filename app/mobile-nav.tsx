"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/lib/utility/class-names";

import { Kameron } from "@next/font/google";

const kameron = Kameron({ weight: "400" });

const staticNavigation = [
  { name: "Startseite", href: "/" },
  { name: "Programm", href: "/programm" },
  { name: "Veranstaltungen", href: "/veranstaltungen" },
  { name: "Gutscheine", href: "/gutscheine" },
  { name: "Der Weltspiegel", href: "/der-weltspiegel" },
];

export default function MobileNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-stone-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-sm flex-1 flex-col bg-stone-800 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-orange-400"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="pt-2 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {staticNavigation.map((item) => (
                      <Link
                        onClick={() => setSidebarOpen(false)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          false // Current Link?
                            ? "bg-stone-900 text-white"
                            : "text-gray-300 hover:bg-stone-700 hover:text-white",
                          "group flex items-center px-2 py-2 uppercase text-base font-medium rounded-md",
                          kameron.className,
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="md:hidden fixed top-0 pl-2 pt-2 z-10">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex bg-orange-400 text-stone-900 h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
          aria-label="Hauptmenu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}
