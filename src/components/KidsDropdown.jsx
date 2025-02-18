import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { Fragment } from "react";

const List = [{ name: "1 Kid" }, { name: "2 Kids" }];

const KidsDropdown = () => {
  const [selected, setSelected] = useState("Kids");

  return (
    <div className="relative flex items-center justify-end w-60 h-20">
      {" "}
      {/* Increased height */}
      <Menu as="div" className="relative inline-block text-left w-full">
        <Menu.Button className="w-full h-20 flex items-center justify-between px-6 bg-white uppercase font-tertiary tracking-[1px] font-semibold text-base">
          {selected}
          <BsChevronDown className="ml-2 text-accent text-base transition-opacity hover:opacity-70 cursor-pointer" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-60 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-20">
            {List.map((li, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <div
                    className={`cursor-pointer px-6 py-4 text-gray-700 text-lg ${
                      active ? "bg-orange-100" : "hover:bg-gray-100"
                    } transition-all`}
                    onClick={() => setSelected(li.name)}
                  >
                    {li.name}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default KidsDropdown;
