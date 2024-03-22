import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdOutlineNotes } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NotificationsDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left items-center">
      <div>
        <Menu.Button className="flex place-self-center cursor-pointer hover:bg-gray-800 opacity-75 rounded-full self-center w-10 h-10 z-1 items-center justify-center text-sm font-semibold shadow-sm z-1">
          <IoNotifications size={22} className="cursor-pointer m-auto" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex-col">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/profile"
                  className={classNames(
                    active ? "bg-gray-700 text-gray-400" : "text-gray-400",
                    "inline-flex items-center justify-start gap-x-4 px-4 w-full py-2 text-sm"
                  )}
                >
                  My Account
                  <CiUser size={20} className="text-gray-200" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-700 text-gray-400" : "text-gray-400",
                    "inline-flex items-center justify-start gap-x-9 px-4 w-full py-2 text-sm"
                  )}
                >
                  My Posts
                  <MdOutlineNotes size={20} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/settings"
                  className={classNames(
                    active ? "bg-gray-700 text-gray-400" : "text-gray-400",
                    "inline-flex items-center justify-start gap-x-10 px-4 w-full py-2 text-sm"
                  )}
                >
                  Settings
                  <IoSettingsOutline size={20} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/login"
                  className={classNames(
                    active ? "bg-gray-700 text-gray-400" : "text-gray-400",
                    "inline-flex items-center justify-start gap-x-10 px-4 w-full py-2 text-sm"
                  )}
                >
                  Sign Out
                  <MdLogout size={20} />
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
