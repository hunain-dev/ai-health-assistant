import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiChat1, CiHome } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Site = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full mt-7 w-full grid grid-cols-[1fr_10fr]  p-4">
        <div className="h-full  p-7">
          <div className="h-[80vh] gap-8 flex-col flex items-center py-8 justify-between w-full rounded-full bg-[#262D2A]">
            <div className="flex items-center justify-center flex-col gap-6">
              {" "}
              <Link to="/">
                <CiHome    className="text-white cursor-pointer text-3xl" />
              </Link>
              <CiChat1     className="text-white cursor-pointer text-3xl" />
            </div>

            <AiOutlineLogout className="text-white cursor-pointer  text-2xl" />
          </div>
        </div>
      
<div className="h-full w-full overflow-hidden  rounded-3xl">
  <div className="h-full relative p-3">
    <div className="py-4 flex items-center justify-between px-4 rounded-full w-[95%] border border-[#e2e0e0] absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#FFFFFF] shadow-md">
    <div className="flex items-center gap-3">
        <GoPlus   className="text-3xl text-gray-700  cursor-pointer hover:text-black transition" />
      </div>
            
            <input
        type="text"
        placeholder="Enter a prompt..."
        className="flex-1 outline-none border-none text-black text-[16px] bg-transparent px-2"
      />

      {/* Icons Section */}
      <div className="flex items-center gap-3">
        <FaMicrophone className="text-xl text-gray-700 cursor-pointer hover:text-black transition" />
        <IoIosSend className="text-2xl text-gray-700 cursor-pointer hover:text-black transition" />
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Site;
