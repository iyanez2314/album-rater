"use client";
import Link from "next/link";
import { Search, Settings, LogOut, Globe, Menu } from "react-feather";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function AuthHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const { logout } = useAuth(router);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/discovery"} className="-m-1.5 p-1.5">
            <h1 className="text-2xl">Album Rater</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href={"/search"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Search
          </Link>
          <Link
            href={"/profile/user"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Settings
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            onClick={logout}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={"/discovery"} className="-m-1.5 p-1.5">
              <h1 className="text-2xl">Album Rater</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href={"/search"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Search
                </Link>
                <Link
                  href={"/profile/user"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Settings
                </Link>
              </div>
              <div className="py-6">
                <a
                  onClick={logout}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log out <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    // <div className="flex justify-between items-center gap-4 mt-5 w-full relative">
    //   <div className="w-1/2 mx-5">
    //     <h1 className="text-2xl font-semibold text-black text-left">
    //       <Link href={"/discovery"}>Album Rater</Link>
    //     </h1>
    //   </div>
    //   <div className="items-center flex lg:hidden z-10 mr-5">
    //     <Menu size={25} onClick={toggleMenu} />
    //   </div>
    //   <div
    //     className={`flex justify-end gap-5 w-1/2 mx-5 lg:flex ${
    //       isMenuOpen ? "flex" : "hidden"
    //     }`}
    //   >
    //     <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white">
    //       <Search />
    //       <Link href={"/search"}>Search</Link>
    //     </button>
    //     <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white">
    //       <Globe size={20} />
    //       <Link href={"/discovery"}>Discovery</Link>
    //     </button>
    //     <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white">
    //       <Settings size={20} />
    //       <Link href={"/profile/user"}>Profile</Link>
    //     </button>
    //     <button
    //       className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white hover:cursor-pointer"
    //       onClick={logout}
    //     >
    //       <LogOut size={20} />
    //       <span>Logout</span>
    //     </button>
    //   </div>
    // </div>
  );
}
