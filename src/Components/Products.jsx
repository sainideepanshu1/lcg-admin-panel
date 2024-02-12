import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { CiViewColumn } from "react-icons/ci";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] w-full flex flex-col gap-3">
        <div className="bg-[#f1f1f1] justify-between px-12 py-1">
          <div className="flex mt-6 items-center justify-between">
            <div>
              <h1 className="text-[20px] font-[600] text-[#000000]">
                Products
              </h1>
            </div>
            <div className="flex gap-3 font-[600] ">
              <div className="flex items-center">
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading">
                  Export
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading">
                  Import
                </button>
              </div>
              <button>
                {" "}
                <Link
                  to="/add-product"
                  className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
                >
                  Add product
                </Link>
              </button>
            </div>
          </div>
          <div className="rounded-lg mt-[24px] bg-[#ffffff] w-full justify-between flex flex-col">
            <div className="flex justify-between py-3 px-2 text-[#585858] ">
              <div className="flex items-center ">
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading font-[600] ">
                  All
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading font-[600] ">
                  Active
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading font-[600] ">
                  Draft
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading font-[600] ">
                  Archived
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[18px] font-[600] ">
                  +
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all text-[18px] px-2 py-0 rounded-lg flex items-center">
                  <IoSearchOutline /> <CgSortAz />
                </button>
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all rounded-lg text-[18px] px-2 py-0">
                  <CiViewColumn />
                </button>
              </div>
            </div>
            <div>
              <div className="grid w-full">
                <div className="w-full px-2 grid items-center text-[14px] text-[#666161] bg-[#f1f1f1] pt-2 pb-2">
                  <div
                    className="grid items-center "
                    style={{
                      gridTemplateColumns:
                        " 0fr 0.5fr 1.5fr 0.5fr 1.5fr 1fr 0.5fr 1fr 0.5fr",
                    }}
                  >
                    <div className="text-center flex items-center">
                      <input className="h-4 w-4" type="checkbox" />
                    </div>
                    <div></div>
                    <div className="flex font-[600] gap-2 items-center text-heading  group ">
                      Product
                      <div className="flex-col hidden  text-[8px] group-hover:flex cursor-pointer  ">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">Status </div>
                    <div className="text-heading font-[600] flex gap-2 items-center group cursor-pointer  ">
                      Inventory
                      <div className="flex-col hidden  text-[8px] group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">
                      Sales channels
                    </div>
                    <div className="text-heading font-[600] ">Markets</div>
                    <div className="text-heading font-[600] flex gap-2 items-center group  cursor-pointer ">
                      Category
                      <div className="flex-col text-[8px] hidden group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] flex gap-2 group items-center cursor-pointer ">
                      Vendor
                      <div className="flex-col hidden  text-[8px] group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-2 grid items-center text-[14px]  pt-2 pb-2">
                  <div
                    className="grid items-center "
                    style={{
                      gridTemplateColumns:
                        " 0fr 0.5fr 1.5fr 0.5fr 1.5fr 1fr 0.5fr 1fr 0.5fr",
                    }}
                  >
                    <div className="text-center flex items-center">
                      <input className="h-4 w-4" type="checkbox" />
                    </div>
                    <div></div>
                    <div className="flex font-[600] gap-2 items-center text-heading text-[#666161] group ">
                      Product
                      <div className="flex-col hidden  text-[8px] group-hover:flex cursor-pointer  ">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">Status </div>
                    <div className="text-heading font-[600] flex gap-2 items-center group cursor-pointer  ">
                      Inventory
                      <div className="flex-col hidden  text-[8px] group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">
                      Sales channels
                    </div>
                    <div className="text-heading font-[600] ">Markets</div>
                    <div className="text-heading font-[600] flex gap-2 items-center group  cursor-pointer ">
                      Category
                      <div className="flex-col text-[8px] hidden group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] flex gap-2 group items-center cursor-pointer ">
                      Vendor
                      <div className="flex-col hidden  text-[8px] group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
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

export default Products;
