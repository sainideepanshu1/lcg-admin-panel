import React, { useEffect, useRef } from "react";
import Lovecraft from "../assets/lovecrafts2.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function Navbar({ toggleSidebar }) {
  const [popup, setPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const[profile,setprofile] =useState(false);

// profile open
const popprofile=useRef(null);
function ToggleProfile(){
  setprofile(!profile);
}


  //Searchbar open 
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
        event.preventDefault();
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

  useEffect(() => {
    if (popup) {
      popupRef.current.querySelector("input").focus();
    }
  }, [popup]);

  return (
    <>
      <div className="w-full Navbar flex bg-[rgba(26,26,26,1)]  justify-between items-center px-[20px] py-[6px] ">
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
          className="searchbarbutton  flex items-center  cursor-pointer border-[1px] divide-solid px-2 w-[37%] rounded-lg h-[30px] border-[rgba(204,204,204,1)] hover:border-white sm:w-[68%]  "
        >
          <button className=" flex  cursor-pointer items-center gap-2 ">
            <div className="" style={{ color: "rgba(204,204,204,1)" }}>
              <span onClick={toggleSidebar} className="">
                <IoIosSearch />
              </span>
            </div>
            <div
              style={{ color: "rgba(204,204,204,1)" }}
              className="flex justify-between   h-[2rem] items-center "
            >
              <h2>Search </h2>
              {/* <h2>Ctrl k</h2> */}
            </div>
          </button>
        </div>

        {/* hidden search bar */}

        <div ref={popupRef} className={` ${popup ? "block" : "hidden"}`}>
          <div className="Searchbar bg-white   absolute top-[7px] h-[203px] left-[290px] border-solid min-w-[600px] pt-[14px] pb-[150px] rounded-xl shadow-xl  md:left-[120px] sm:left-[0px]  xm:min-w-[315px] xm:left-[40px] ">
            <div className=" flex items-center  border-[1px] mx-[10px] rounded-lg border-[#202223] px-[10px]  py-[3px] sm:[100vw] ">
              <span className="text-[17px]">
                <IoIosSearch />
              </span>
              <div className="w-full px-1 ">
                <input
                  autoFocus
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
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

          {/* <div className="Alert">
            <div className="">
              <div className="">
              <button>   <span> <CgSortAz /></span></button>
                <button><span><FaRegCircleCheck /></span></button>
              </div>

            </div>

            <div className="">
               <div>
                  <span>Billing </span>
                  <span><LuDot /></span>
                   <span>Tuesday at 8:15 am</span>
                   <button><input type="radio" /></button>

               </div>
               <div className="">{
                Alert.map((Product,index)=>{
                  return( <div>
                    <span><TbAlertSquareRounded /></span>

                    <div key={index}>
                      <h3>{Product.h3}</h3>
                      <h4>{Product.h4}</h4>
                        
                    </div>

                  </div>)
                 
                })
               }
                    

               </div>
            </div>


          </div> */}
<div className="">
          <div onClick={ToggleProfile} className="cursor-pointer p-[6px] rounded-lg text-white bg-[#303030] hover:bg-[var(--p-color-bg-fill-inverse-hover);] transition-colors">
            <span className="text-[14px] font-semibold  sm:hidden">
              love craft gift{" "}
            </span>
            <span className=" text-black text-[12px] bg-[#25E82B] rounded-lg p-[6px]">
              lcg
            </span>
          </div>

<div ref={popprofile} className={`${profile ? "block" : "hidden"}`}>
          <div className="cursor-pointer bg-white absolute border-[1px]  rounded-lg top-[60px] right-[20px] p-[10px] w-[317px]">
            <div className="px-[4px]  ">
              <h1 className="text-[#050505ef] text-[0.9rem] font-medium ">Raman Goyal</h1>
              <span className="text-[0.8rem] text-[#0c0b0b6e] font-medium">lovecraftgifts@gmail.com</span>
            </div>
            <div className="py-[4px] flex flex-col gap-[3px]">
              <h3 className="  py-[2px] px-[4px] text-[#161616ef] text-[0.9rem] font-medium rounded-lg hover:bg-[#00000026] ">Security</h3>
              <h3 className="text-[#050505ef]  px-[4px] py-[2px] text-[0.9rem] font-medium  rounded-lg hover:bg-[#00000026] ">Log out</h3>
            </div>
          </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
