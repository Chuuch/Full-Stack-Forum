/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import EditPostModal from "./EditPostModal";
import DeletePostModal from "./DeletePostModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ post }) {
 
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold shadow-sm">
          <BiDotsVerticalRounded size={25} className="cursor-pointer" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-600">
          <div className="py-1 flex-col">
            <Menu.Item>
              {({ active }) => (
                <a
                  href={`/forum/${post._id}`}
                  onClick={openEditModal}
                  className={classNames(
                    active ? "bg-gray-700 text-gray-400" : "text-gray-400",
                    "inline-flex items-center justify-start gap-x-4 px-4 w-full py-2 text-sm"
                  )}
                >
                  Edit Post
                  
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={openDeleteModal}
                  className={classNames(
                    active ? "bg-gray-700 text-gray-400" : "text-gray-400",
                    "inline-flex items-center justify-start gap-x-4 px-4 w-full py-2 text-sm"
                  )}
                >
                  Delete Post
                  <MdDeleteOutline size={20} />
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
