import React, { useEffect, useRef } from "react";
import Lovecraft from "../assets/lovecrafts2.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
function Navbar() {
  const [popup, setPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const popupRef = useRef(null);
  function togglePopup() {
    setPopup(true);
  }

  const handleClearSearch = () => {
    setSearchValue("");
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        setPopup(true);
      }
    };
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup]);
  return (
    <>
      <div className=" Navbar flex bg-[rgba(26,26,26,1)]  justify-between items-center px-[20px] py-[6px] ">
        <div className="">
          <div className="Navicon text-[20px] text-white pr-[8px] sm:block  hidden ">
            <span>
              <IoMdMenu />
            </span>
          </div>
          <img
            className="NavImg w-[10rem] sm:hidden object-contain block"
            src={Lovecraft}
            alt="Not Found"
          />
        </div>

        <div
          onClick={togglePopup}
          className="flex items-center  cursor-pointer border-[1px] divide-solid px-2 w-[37%] rounded-lg h-[30px] border-[rgba(204,204,204,1)] hover:border-white"
        >
          <button className=" flex  cursor-pointer items-center gap-2 ">
            <div className="" style={{ color: "rgba(204,204,204,1)" }}>
              <span className="">
                <IoIosSearch />
              </span>
            </div>
            <div
              style={{ color: "rgba(204,204,204,1)" }}
              className="flex justify-between  h-[2rem] items-center "
            >
              <span>Search </span>
              {/* <span>Ctrl k</span> */}
            </div>
          </button>
        </div>

        {/* hidden search bar */}

        <div ref={popupRef} className={` ${popup ? "open" : "close"}`}>
          <div className="Searchbar bg-white   absolute top-[7px] h-[203px] left-[290px] border-solid min-w-[600px] pt-[14px] pb-[150px] rounded-xl shadow-xl  md:left-[120px] sm:left-[0px]  xm:min-w-[315px] xm:left-[40px] ">
            <div className=" flex items-center  border-[1px] mx-[10px] rounded-lg border-[#202223] px-[10px]  py-[3px] sm:[100vw] ">
              <span className="text-[17px]">
                <IoIosSearch />
              </span>
              <div className="w-full px-1 ">
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full outline-none"
                  placeholder="Search"
                />
              </div>
              <div className="flex  gap-2">
                <button onClick={handleClearSearch}>
                  <span className="text-[18px] ">
                    <IoCloseCircleOutline />
                  </span>
                </button>
                <button>
                  <span className="  text-[24px]">
                    <CgSortAz />
                  </span>
                </button>
              </div>
            </div>
            <div className=" flex flex-wrap gap-2 text-[15px] m-[10px]">
              <button className="text-[13px] px-[6px] py-[0px] bg-[#d3d4d4] rounded-lg">
                <span>Customers</span>
              </button>
              <button className="text-[13px] px-[6px] py-[0px] bg-[#d3d4d4] rounded-lg">
                <span>Order</span>
              </button>
              <button className="text-[13px] px-[6px] py-[0px] bg-[#d3d4d4] rounded-lg">
                <span>Products</span>
              </button>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center py-[35px]">
              <div>
                <span className="text-[18px] text-[#767777] ">
                  <IoIosSearch />
                </span>
              </div>
              <div className="text-[14px] font-semibold">
                <h1>Find anything in love craft gift</h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex gap-2 items-center ">
          <div className="bg-[#303030] border-solid p-[8px] rounded-lg transition-duration: 15ms;  hover:bg-[rgba(74,74,74,1)] transition-all cursor-pointer">
            <span className="text-white">
              <FaRegBell />
            </span>
          </div>

          <div className="cursor-pointer p-[6px] rounded-lg text-white bg-[#303030] hover:bg-[var(--p-color-bg-fill-inverse-hover);] transition-colors">
            <span className="text-[14px] font-semibold  sm:hidden">love craft gift </span>
            <span className=" text-black text-[12px] bg-[#25E82B] rounded-lg p-[6px]">
              lcg
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
