import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";

function CustomerDetails() {
    // const []
  return (
    <div className="bg-[#F1F1F1] w-full h-[100vh]">
      <div className="flex my-6 items-center justify-between px-7 py-1 sm:px-6 xm:px-2 ">
        <div>
          {" "}
          <div className="flex items-center gap-2 xm:">
            <span>
              <FaArrowLeftLong />
            </span>
            <h3 className="text-[20px] text-[#000000] font-[700]">
              Sushil sharma
            </h3>
          </div>
          <div className="flex items-center text-[#616161] text-[12px]">
            <span>
              Chainpur , Bandipur UP, India . Customer for about 2 hours
            </span>
            {/* <span className=''></span> */}
            <span></span>
          </div>
        </div>

        <div className="">
          <button className="relative flex text-heading items-center px-[12px] py-[3px] gap-1 border-[1px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg ">
            <span className="text-[#080808]">More action</span>
            <span className="text-[17px]">
              <FiChevronDown />
            </span>
          </button>

          <div className=" flex flex-col gap-4 absolute right-[28px]
  top-[130px] text-[13px] text-[#303030] bg-white items-start py-[10px] px-[10px] rounded-lg ">
            <button>Send account invite</button>
            <button>Merge customer</button>
            <button>Request customer data</button>
            <button>Erase personal data</button>
            <button>Delete customer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
