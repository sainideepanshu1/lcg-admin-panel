import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuClipboard } from "react-icons/lu";
import { BiIntersect } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import { FiHash } from "react-icons/fi";
import { CiShop } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

function OrderDetails() {
  const [action, setaction] = useState();
  const actionref = useRef();
  
  const [toggle, setToggle] = useState(false);
  const imexRef = useRef(null);

  const handleClickOutside = (event) => {
    if (imexRef.current && !imexRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



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

  return (
    <div className="bg-[#F1F1F1] w-full h-[100vh] :px-[100px] md:px[10px]">
      <div className="flex my-6 items-start justify-between px-7 py-1 sm:px-6 xm:px-2 ">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <Link>
                <FaArrowLeftLong />
              </Link>
              <h3 className="text-[20px] text-[#000000] font-[700]">#42644</h3>{" "}
            </div>
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
          <div className="flex items-center text-[#616161] text-[12px]">
            <span>
              Chainpur , Bandipur UP, India . Customer for about 2 hours
            </span>

            <span></span>
          </div>
        </div>

        <div>
          <div className="flex  gap-2 sm:hidden">
            <Link>
              <button className="flex text-heading items-center px-[12px] py-[3px] gap-1   bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg">
                Restock
              </button>
            </Link>
            <Link>
              <button className="flex text-heading items-center px-[12px] py-[3px] gap-1   bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg">
                Edit
              </button>
            </Link>

            <button
              ref={actionref}
              onClick={() => {
                setaction(!action);
              }}
              className="relative flex text-heading items-center px-[12px] py-[3px] gap-1  w-[122px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg "
            >
              <span className="text-[#080808]">More action</span>
              <span className="text-[17px]">
                <FiChevronDown />
              </span>
            </button>
            {action && (
              <div
                className=" z-10 w-[200px] flex flex-col gap-2 absolute right-[28px]
  top-[130px] text-[13px] text-[#303030] bg-white items-start py-[6px] px-[10px] rounded-lg "
              >
                <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]   rounded-lg">
                  <span className="text-[18px]">
                    <BiIntersect />
                  </span>
                  <span className="">Duplicate</span>
                </button>
                <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <MdOutlineCancel />
                  </span>
                  <span>Cancel order</span>
                </button>
                <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <BsArchive />
                  </span>
                  <span>Archive</span>
                </button>
                <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiPrinter />
                  </span>
                  <span>Print order page</span>
                </button>
                <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiPrinter />
                  </span>
                  <span>Print packing slips</span>
                </button>

                <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiEye />
                  </span>
                  <span>Print packing slips</span>
                </button>
              </div>
            )}
          </div>

          <div className=" cursor-pointer hidden sm:block bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg px-3 py-[10px] text-heading z-11"
            ref={imexRef}
            onClick={() => {
              setToggle(!toggle);
            }}><BsThreeDots />
{toggle && (
              <div className="">
                <div
                className=" z-10 w-[200px] flex flex-col gap-2 absolute right-[28px]
  top-[130px] text-[13px] text-[#303030] bg-white items-start py-[6px] px-[10px] rounded-lg "
              >

<button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  
                  <span>Restock</span>
                </button>
                <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3] rounded-lg">
                  
                  <span>Edit</span>
                </button>
                
                <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]   rounded-lg">
                  <span className="text-[18px]">
                    <BiIntersect />
                  </span>
                  <span className="">Duplicate</span>
                </button>
                <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <MdOutlineCancel />
                  </span>
                  <span>Cancel order</span>
                </button>
                <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <BsArchive />
                  </span>
                  <span>Archive</span>
                </button>
                <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiPrinter />
                  </span>
                  <span>Print order page</span>
                </button>
                <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiPrinter />
                  </span>
                  <span>Print packing slips</span>
                </button>

                <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiEye />
                  </span>
                  <span>Print packing slips</span>
                </button>
              </div>
              </div>
            )}


          </div>

        </div>
      </div>

      <div className="flex  my-6  px-7 py-1 sm:px-6 xm:px-2 gap-4 xl:flex-wrap">
        <div className="w-[70%] xl:w-[100%]">
              
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default OrderDetails;
