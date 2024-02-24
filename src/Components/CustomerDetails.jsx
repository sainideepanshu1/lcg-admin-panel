import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Product2 from '../assets/Product2.jpg'
import { LuClipboard } from "react-icons/lu";
import { Link } from "react-router-dom";

import { CiShop } from "react-icons/ci";

function CustomerDetails() {
  const [action, setaction] = useState();
  const actionref = useRef();

  // ----------more-action-------------
  const handleaction = (event) => {
    if (actionref.current && !actionref.current.contains(event.target)) {
      setaction(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleaction);

    return () => {
      document.removeEventListener("click", handleaction);
    };
  }, []);

  // const handleClickOutside = (event) => {
  //   if (imexRef.current && !imexRef.current.contains(event.target)) {
  //     setToggle(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);
  return (
    <div className="bg-[#F1F1F1] w-full h-[100vh] :px-[100px] md:px[10px]">
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
          <button
            ref={actionref}
            onClick={() => {
              setaction(!action);
            }}
            className="relative flex text-heading items-center px-[12px] py-[3px] gap-1 border-[1px] w-[122px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg "
          >
            <span className="text-[#080808]">More action</span>
            <span className="text-[17px]">
              <FiChevronDown />
            </span>
          </button>
          {action && (
            <div
              className=" flex flex-col gap-2 absolute right-[28px]
  top-[130px] text-[13px] text-[#303030] bg-white items-start py-[10px] px-[10px] rounded-lg "
            >
              <button className=" py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                Send account invite
              </button>
              <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                Merge customer
              </button>
              <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                Request customer data
              </button>
              <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                Erase personal data
              </button>
              <button className=" py-[5px] px-[6px] text-[#8e1f0b] rounded-lg hover:bg-[#fee2e1]">
                Delete customer
              </button>
            </div>
          )}
        </div>
      </div>

      <div className=" flex  my-6  px-7 py-1 sm:px-6 xm:px-2 gap-4 xl:flex-wrap">
        <div className="w-[70%] xl:w-[100%] ">
          <div className="flex border-[1px] items-center justify-start  bg-white py-[15px]	 shadow-md rounded-[8px]">
            <div className="flex gap-2 items-center px-10  text-[#616161]">
              <span>
                <CiShop />
              </span>
              <span className="text-[13px]">All time</span>
            </div>

            <div className="flex px-[40px] xm:px-[0px]  gap-[200px] xm:gap-5">
              <div className=" flex flex-col gap-1 border-l px-[10px] ">
                <span className="text-[#616161] text-[13px] border-b-[2px] border-dotted  ">
                  Amount spent
                </span>
                <div className="flex items-center text-[14px] font-semibold ">
                  <span className="flex items-center">
                    <MdCurrencyRupee />
                    649
                  </span>{" "}
                  <span>.00</span>
                </div>
              </div>
              <div className="flex flex-col gap-1  border-l px-[10px] ">
                <span className="text-[#616161] text-[13px] border-b-[2px] border-dotted  ">
                  Order
                </span>
                <span className="text-[14px] font-semibold ">100</span>
              </div>
            </div>
          </div>
          <div className=" border-[1px] my-[15px] px-[10px]  bg-white py-[15px]	 shadow-md rounded-[8px]">
            <h2 className="text-[14px] font-semibold text-[#303030]">
              Last order placed
            </h2>
            <div className="border-[1px] rounded-[8px] my-[8px] py-[20px]">
              <div className="flex justify-between px-[10px] ">
                <div className="flex items-start flex-wrap gap-2">
                  <h2 className="text-[0.8125rem] hover:underline cursor-pointer	 text-[#004299] font-semibold ">
                    #41678
                  </h2>
                  <div className="flex gap-1 items-center text-[12px] text-[#5e4200] bg-[#ffd6a4] px-[5px] py-[2px] rounded-lg">
                    <span>
                      <IoCheckbox />
                    </span>
                    <span>Paid</span>
                  </div>
                  <div className="flex gap-1 items-center text-[12px] text-[#5e4200] bg-[#ffd6a4] px-[5px] py-[2px] rounded-lg">
                    <span>
                      <MdCheckBoxOutlineBlank />
                    </span>
                    <span>Payment pending</span>
                  </div>
                  <div className="flex gap-1 items-center px-[5px] py-[2px] rounded-lg text-[12px] bg-[#ffeb78] text-[#4f4700] ">
                    <span>
                      <MdCheckBoxOutlineBlank />
                    </span>
                    <span> Unfulfilled</span>
                  </div>
                </div>
                <div className="flex items-center text-[14px] font-semibold ">
                  <span className="flex items-center">
                    <MdCurrencyRupee />
                    649
                  </span>{" "}
                  <span>.00</span>
                </div>
              </div>

              <div className=" text-[#616161] text-[13px] pt-[5px] pb-[15px] px-[10px] ">
                <h2>23 February 2024 at 10:02 am from Online Store</h2>
              </div>
             <hr/>

             <div className="flex justify-between items-start px-[10px] pt-[15px]">
              <div className="flex items-center gap-[10px]">
                <div className=" w-[43px] h-[40px] object-contain ">
                  <img className="rounded-md" src={Product2} alt="" />
                </div>
                <div className="">
                  <div className="text-[13px] font-semibold">
                  <h2>Glowing Panda - A Memorable Gift</h2>
                  </div>

                  <div className="text-[13px] text-[#303030] bg-[#e3e3e3] px-2 my-[4px] rounded-lg line-clamp-1">
                  <h3 className="line-clamp-1">Brown / Without Gift Wrap / Without Gift Card</h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center  gap-6">
                <div className="text-[13px] xm:hidden">x1</div>

              <div className="flex items-center text-[14px] font-semibold ">
                  <span className="flex items-center">
                    <MdCurrencyRupee />
                    649
                  </span>{" "}
                  <span>.00</span>
                </div>

              </div>

             </div>
            



            </div>
            <div className=" flex justify-end gap-2">
              <div className="">
                <Link to='/'>
                <button className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[#303030] font-semibold">View all orders</button>
                </Link>
              </div>
              <div>
                <Link to='/'>
                <button className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[white] font-semibold bg-black">Create order</button>
                </Link>
              </div>

            </div>
            
            
          </div>
        </div>
        <div className="w-[30%]  xl:w-[100%]  border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
          <div className="flex justify-between  items-center ">
            <h3 className="text-[13px] font-semibold">Customer</h3>
            <div>
              <div className="cursor-pointer py-1 px-[6px] transition ease-in-out rounded-md hover:bg-[#d8d8d8]">
                <span className="">
                  <BsThreeDotsVertical />
                </span>
              </div>

              <div className=""></div>
            </div>
          </div>
          <h2 className="text-[13px] font-semibold py-[8px]">
            Contact information
          </h2>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-[#005bd3] text-[13px] hover:underline">
                Gauravsaini@gmail.com
              </span>
            </div>
            <div>
              <span className="text-[#616161] font-semibold">
                <LuClipboard />
              </span>
            </div>
          </div>
          <div className="text-[13px]">
            <h3 className="text-[13px]">No email address provided</h3>
            <span className="py-[2px]">+91 82787 57344</span>
            <h3 className="py-[2px]">Will receive notifications in English</h3>
          </div>

          <div className="py-[8px]">
            <h3 className="text-[13px] font-semibold">Default address</h3>
            <div className="text-[13px] py-[8px] flex flex-col gap-[2px]">
              <h2>Deepak Roy</h2>
              <h2>2</h2>
              <h2>
                Mandir complex Back Side Road 792001 TEZU Arunachal Pradesh
                India
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[13px] font-semibold">Tax exemptions</h3>
            <h3 className="text-[13px] text-[#616161]">No exemptions</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
