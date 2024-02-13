import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useRef } from "react";

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
    <div className="bg-[#f1f1f1] w-full h-screen justify-between px-7 py-1 sm:px-6 ">
      <div className="flex mt-6 items-center justify-between">
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
              <div className="flex gap-4 p-[10px] flex-col bg-white border-[1px] absolute top-[35px] right-[35px] rounded-lg text-heading">
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

      <div className="">
        <div></div>
      </div>
    </div>
  );
}

export default Customers;
