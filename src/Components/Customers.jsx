import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { CgSortAz } from "react-icons/cg";
import { IoChevronUp } from "react-icons/io5";
import { LuLayout } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
function Customers() {
  const [toggle, setToggle] = useState(false);
  const imexRef = useRef(null);

 

  const handleClickOutside = (event) => {
    if (imexRef.current && !imexRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="bg-[#F1F1F1] w-full h-screen justify-between ">
      <div className="flex mt-6 items-center justify-between px-7 py-1 sm:px-6 ">
        <div>
          <h1 className="text-[20px] font-[600] text-[#000000]">Customers</h1>
        </div>

        <div className="flex gap-2 font-[600] ">
          <div
            ref={imexRef}
            onClick={() => {
              setToggle(!toggle);
            }}
            className="relative cursor-pointer hidden sm:block bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg px-3 py-[10px] mt-[1px]text-heading z-11 "
          >
            <BsThreeDots />
            {toggle && (
              <div className="flex z-20 gap-4 p-[10px] flex-col bg-white border-[1px] absolute top-[35px] right-[35px] rounded-lg text-heading">
                <button>Export</button>
                <button>Import</button>
              </div>
            )}
          </div>

          <div className="flex gap-2 sm:hidden items-center">
            <button className="text-[12px] font-medium cursor-pointer bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg p-[6px]">
              Export
            </button>
            <button className="text-[12px] font-medium cursor-pointer bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg p-[6px]">
              Import
            </button>
          </div>
          <button>
            <Link
              to="/"
              className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
            >
              Add customer
            </Link>
          </button>
        </div>
      </div>
      {/* ---------- no of customer--------  */}

      <div className=" bg-[ #F3F3F3] 
      rounded-xl border-[1px] border-[#a09f9fdc] shadow-md my-[20px] mx-7   xm:mx-0 gap-0 justify-normal xm:rounded-md ">
        <div    className=" flex items-center justify-between ">
        <div className="flex items-center gap-0  flex-wrap xm:gap-0  ">
          <div className=" flex  gap-1 text-heading py-[16px] px-[16px] xm:py-[4px]  ">
            <h3 className="text-[#080808]">116020 </h3>
            <h3 className="text-[#555454]">customers</h3>
          </div>

          <div className=" flex text-heading gap-1  py-[16px] px-[16px] xm:px-[10px] xm:py-[4px] ">
            <h3 className="text-[#080808]">100% </h3>
            <h3 className="text-[#555454]">of your customer base</h3>
          </div>
        </div>

        <div>
          <div className=" hidden flex transition-400 px-[15px]">
            <button className="flex w-[89px] text-heading items-center px-[5px] py-[4px] gap-1 border-[1px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg ">
              <span className="text-[#080808]">Add Filter</span>
              <span>
                <FaAngleDown />
              </span>
            </button>
          </div>
          <div className=" flex items-center gap-8 px-[10px]">
            <div className="cursor-pointer">
              <div className="group  relative">
                <div
                  
                  className="hidden absolute bg-white p-2 rounded-lg text-heading top-[-40px] right-[-25px] group-hover:block"
                >
                  <h3>Templates</h3>
                </div>
                <div className=" rounded-md text-[#4a4a4a] p-2 hover:hover:bg-[#E3E3E3]  ">
                  <span>
                    <LuLayout />
                  </span>
                </div>
              </div>

           
            </div>
            <div className="relative group cursor-pointer text-[18px] border-l  border-r border-1 border-[#EBEBEB] px-[12px] ">
              <div className=" hidden absolute top-[-42px] right-[-2px] bg-white p-2 rounded-lg text-heading  group-hover:block">
                <h3>Filters</h3>
              </div>

              <div className="rounded-md  p-[6px] text-[#4a4a4a]   hover:bg-[#E3E3E3] ">
                <span className="">
                <IoFilterSharp />
                </span>
              </div>
            </div>

            <div className=" relative group cursor-pointer">
            <div className=" w-[91px] hidden  absolute right-[-31px]
  top-[-43px] bg-white p-2 rounded-lg text-heading  group-hover:block xm:right-[-2px]">
              <h3>Close editor</h3>
            </div>
              <div className=" rounded-md text-[#4a4a4a]   p-[6px]   hover:bg-[#E3E3E3] ">

                
                <span>
                  <IoChevronUp />
                </span>
              </div>
            </div>
          </div>
          </div>
         
        </div>

        <div className="bg-white  ">
       <textarea className="w-full h-[45px]">
      
       </textarea>
       
          <hr></hr>
        </div>

        <div className="flex justify-end gap-2 py-[10px] px-[15px] bg-white rounded-b-xl">
            <button className=" py-[6px] px-[8px] rounded-lg text-[13px] border-[1px]">Discard</button>
            <button className=" py-[6px] px-[8px] rounded-lg text-[13px] border-[1px]">Apply</button>
        </div>

       
      </div>
    </div>
  );
}

export default Customers;
