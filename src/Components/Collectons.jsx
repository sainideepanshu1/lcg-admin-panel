import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { CiViewColumn } from "react-icons/ci";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Collections = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] w-full flex flex-col gap-3">
        <div className="bg-[#f1f1f1] justify-between px-12 py-1">
          <div className="flex mt-6 justify-between">
            <div>
              <h1 className="text-[20px] font-medium text-[#000000]">
                Collections
              </h1>
            </div>
            <div>
              <button className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]">
                Create collection
              </button>
            </div>
          </div>
          <div className="rounded-lg mt-[24px] bg-[#ffffff] w-full gap-4 justify-between flex flex-col">
            <div className="flex justify-between py-3 px-2">
              <div className="flex items-center">
                <button className="hover:bg-[#E3E3E3] rounded-lg p-3 text-heading">
                  All
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-3 text-[18px]">
                  +
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all text-[18px] px-2 py-1 rounded-lg flex items-center">
                  <IoSearchOutline /> <CgSortAz />
                </button>
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all rounded-lg text-[18px] px-2 py-1">
                  <CiViewColumn />
                </button>
              </div>
            </div>
            <div>
              <div className="grid w-full">
                <div className="w-full px-2 grid items-center text-[14px] text-[#666161] bg-[#f1f1f1] pt-2 pb-2">
                  <div
                    className="grid items-center "
                    style={{ gridTemplateColumns: " 1fr 1fr 5fr 2fr 4fr" }}
                  >
                    <div className="text-center">
                      <input className="h-4 w-4" type="checkbox" />
                    </div>
                    <div></div>
                    <div className="flex font-[600] gap-2 items-center text-heading text-[#666161]">
                      Title
                      <div className="flex-col text-[8px] hidden hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">Products </div>
                    <div className="text-heading font-[600] ">Product conditions</div>
                  </div>
                </div>
              </div>
              <div className="grid w-full items-center">
                <div className="w-full px-2 grid items-center text-[14px] text-[#666161] bg-white pt-2 pb-2">
                  <div
                    className="grid items-center "
                    style={{ gridTemplateColumns: " 1fr 1fr 5fr 2fr 4fr" }}
                  >
                    <div className="text-center">
                      <input className="h-4 w-4" type="checkbox" />
                    </div>
                    <div></div>
                    <div className="flex gap-2 text-heading items-center text-[#666161]">
                      Title
                      <div className="flex-col text-[8px] hidden hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading">Products </div>
                    <div className="text-heading">Product conditions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
