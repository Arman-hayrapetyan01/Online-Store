import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Category from "./Category";

export default function Example() {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full ml-[-40%] justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Categorys
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-1w75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-wrap justify-around rounded-lg absolute -right-[170px] bg-white
        z-10 mt-2 w-[500px] border h-32  backdrop-blur-lg focus:outline-none shadow-[0px_10px_5px_5px_rgba(0,0,0,0.7)]">
          <Category />
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
