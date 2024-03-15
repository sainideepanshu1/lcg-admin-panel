import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";
import { useRef } from "react";
import { ImCancelCircle } from "react-icons/im";

const Draftorders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState();
  const sortref = useRef(null);
  const [Search, setSearch] = useState();

  const handleClearSearch = () => {
    setSearchTerm("");
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function handleSearch() {
    setSearch(!Search);
  }

  const handleSortClick = (event) => {
    if (sortref.current && !sortref.current.contains(event.target)) {
      setSort(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleSortClick);

    return () => {
      document.removeEventListener("click", handleSortClick);
    };
  }, []);

  return (
    <>
      <div className="bg-[#f1f1f1] w-full  px-12 xm:px-0  sm:px-2 ">
        {/* <-------heding-----> */}
        <div className="justify-between items-center flex px-2 py-8">
          <div>
            <h1 className="text-[20px] font-[600] text-[#000000]">Drafts</h1>
          </div>
          <div className="flex gap-4">
            <div className=" items-center">
              <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[12px] ">
                Export
              </button>
            </div>
            <button>
              <Link
                to="/orders/create-order"
                className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
              >
                Create order
              </Link>
            </button>
          </div>
        </div>

        {/* <-------table heding-------> */}
        <div className="rounded-lg mt-[24px]  xm:p-0 bg-[#ffffff] h-[80vh] overflow-x-hidden  w-full  flex flex-col border border-stone-200">
          <div className="flex justify-between overflow-x-hidden w-full text-[#585858] px-2 py-2 xm:px-4 ">
            <div
              className={`${
                Search ? "hidden" : "block"
              } flex  gap-2 sm:overflow-y-auto  items-center`}
            >
              <div>
                <button className="w-max hover:bg-[#E3E3E3] rounded-lg p-2 text-[12px] xm:text-[12px] font-[600] ">
                  All
                </button>
              </div>
              <div>
                <button className="w-max hover:bg-[#E3E3E3] rounded-lg p-2 text-[12px] xm:text-[12px] font-[600] ">
                  Open and invoice sent
                </button>
              </div>
              <div>
                <button className="w-max hover:bg-[#E3E3E3] rounded-lg p-2 text-[12px] xm:text-[12px] font-[600] ">
                  Open
                </button>
              </div>
              <div>
                <button className="w-max hover:bg-[#E3E3E3]  rounded-lg p-2 text-[12px] xm:text-[12px] font-[600] ">
                  Invoice sent
                </button>
              </div>
              <div>
                <button className="w-max hover:bg-[#E3E3E3] rounded-lg p-2 text-[12px] xm:text-[12px] font-[600] ">
                  Completed
                </button>
              </div>
              <div>
                <button>
                  <Link
                    to=""
                    className="w-max hover:bg-[#E3E3E3] rounded-lg p-2 text-[18px] xm:text-[12px] font-[600] "
                  >
                    +
                  </Link>
                </button>
              </div>
            </div>
            <div
              className={`${Search ? "block" : "hidden"} flex w-full gap-3 `}
            >
              <div className=" w-full    py-1 px-[8px] rounded-lg bg-[#faf8f8] focus-within:outline focus-within:bg-[#f1f1f1c2]  flex gap-2 items-center">
                <div className="w-full flex items-center">
                  <span className="text-[#616161]">
                    <IoIosSearch />
                  </span>
                  <input
                    placeholder="Searching all products"
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-full outline-none text-[14px] bg-[#faf8f8] text-[#303030] focus-within:bg-[#f1f1f1c2]"
                  />
                </div>

                <button onClick={handleClearSearch} className=" cursor-pointer">
                  <ImCancelCircle />
                </button>
              </div>
              <div className="flex gap-2 ">
                <button
                  onClick={handleSearch}
                  className={`${
                    Search ? "block" : "hidden"
                  } bg-black text-[14px] text-white rounded-lg  px-[7px] py-[5px] `}
                >
                  Cancel
                </button>
                <button
                  // onClick={fetchSearched}
                  className="  bg-black text-[14px] text-white rounded-lg mr-[5px] px-[7px] py-[5px]"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={handleSearch}
                className={`${
                  Search ? "hidden" : "block"
                } border shadow-lg hover:bg-[#e3e3e3] transition-all xm:text-[12px] text-[18px] px-2 py-0 rounded-lg flex items-center`}
              >
                <IoSearchOutline /> <CgSortAz />
              </button>

              <span
                ref={sortref}
                onClick={() => {
                  setSort(!sort);
                }}
                className="border shadow-lg cursor-pointer hover:bg-[#e3e3e3] transition-all flex items-center rounded-lg xm:text-[12px] text-[18px] px-2 py-0"
              >
                <TbArrowsSort />
              </span>
              {sort && (
                <div className="">
                  <div className=" flex  p-[20px] flex-col bg-white border-[1px] absolute top-[226px] right-[60px]  rounded-lg  text-heading gap-2  xm:top-[175px]  xm:right-[4px] ">
                    <h1>Sort by</h1>
                    <div className="flex flex-col gap-4 items-start">
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="product_title"
                        />
                        Draft order number
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="created"
                        />
                        Date
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="updated"
                        />
                        Status
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="inventory"
                        />
                        Total price
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="product_type"
                        />
                        Product type
                      </label>
                    </div>

                    <div className="flex flex-col">
                      <button className="hover:bg-[#E3E3E3] flex  gap-6 items-center rounded-lg py-1 px-4 text-[15px]">
                        <FaLongArrowAltDown /> Ascending
                      </button>
                      <button className="hover:bg-[#E3E3E3] flex gap-6 items-center rounded-lg py-1 px-4 text-[15px]">
                        <FaLongArrowAltUp /> Descending
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Draftorders;
