import React from "react";
import { MdAccountCircle } from "react-icons/md";
export default function Account() {
  return (
    <div className="relative">
      <div>
        <div className="text-center text-white">
          <div className="pl-4 text-2xl">
            <MdAccountCircle />
          </div>
          Account 
        </div>
      </div>
    </div>
  );
}
