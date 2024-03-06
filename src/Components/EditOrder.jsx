import React from 'react'

import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { FiAlertTriangle } from "react-icons/fi";
import Product2 from "../assets/Product2.jpg";
import { MdCurrencyRupee } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import { IoIosClose } from 'react-icons/io';
function EditOrder() {
    const [AddCustomer,setAddCustomer]=useState();
  
  return (
    <div className='bg-[#F1F1F1] w-full h-[100%] md:px[10px]'>
    <div className="my-6  px-7 py-1 sm:px-6 xm:px-2 ">
        <div className="flex gap-2 items-center  ">
          <div className="">
            <Link to="OrderDetails">
              <span className=" text-[#4a4a4a]">
                <FaArrowLeftLong />
              </span>
            </Link>
          </div>

          <div className="text-[18px] font-semibold">
            <Link to="">
              {" "}
              <h3>Edit order</h3>
            </Link>
          </div>
        </div>
        <div className="px-[18px] text-[13px] text-[#616161]">
          <h4>#43368</h4>
        </div>
      </div>

      <div className='flex gap-4  xl:flex-wrap  my-6  px-7 py-1 sm:px-6 xm:px-2 '>
        <div className='flex flex-col gap-3 h-full   w-[70%] xl:w-[100%]'>
            <div className=' border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]'>

                <div className='flex justify-between items-center px-[15px]  '>
                    <h3 className='text-[#303030] text-[14px] font-semibold '>Add product</h3>

                    <button className='text-[14px] text-[#005bd3]  hover:underline '>Add custom item</button>

                 
                      <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                        <div className="rounded-xl my-4 bg-white  w-[40%] shadow-md ">
                          <div className="flex border-b-2  p-3 bg-[#f3f3f3] rounded-t-xl justify-between">
                            <div >
                              <h2 className="cursor-pointer">Add custom item</h2>
                            </div>
                            <div>
                              <div
                               
                                className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px]"
                              >
                                <IoIosClose />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col  px-4 pb-4 gap-3">
                            <div className="flex  w-[100%] px-2 py-4 gap-3 sm:flex sm:flex-col">
                              <div className="w-[60%]">
                                <div className="pr-4 ">
                                  <h2 className="text-heading  text-heading-color font-[450]">
                                    Item name
                                  </h2>
                                </div>
                                <div>
                                  <input
                                    // name="tags"
                                    type="text"
                                    className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>
                              <div className="w-[60%]">
                                <div className="text-heading">Price</div>
                                <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                  <span className="p-1 text-[#616161]">
                                    &#8377;
                                  </span>
                                  <input
                                    type="number"
                                    placeholder="0.00"
                                    name="price"
                                    className="w-[90%] px-1 outline-none focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="w-[60%]">
                                <div className="text-heading">Quantity</div>
                                <div className="group border-[#8a8a8a] border w-full flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                  <input
                                    type="number"
                                    placeholder="1"
                                    className="w-[95%] px-1 py-1 rounded-[0.5rem] outline-none focus:outline-none"
                                  />
                                
                                </div>
                              </div>
                            </div>
                            <div>
                              <label
                                className="text-sm flex text-[12px] items-center gap-2"
                                htmlFor="tax"
                              >
                                <input type="checkbox" id="tax" name="tax" />
                                Item is taxable
                              </label>
                            </div>
                            <div>
                              <label
                                className="text-sm flex  text-[12px] items-center gap-2"
                                htmlFor="tax"
                              >
                                <input type="checkbox" id="tax" name="tax" />
                                Item is a physical product
                              </label>
                            </div>
                          </div>

                          <div className="flex  justify-end border-t-2 p-3 gap-2 rounded-b-xl ">
                            <button
                            
                              className=" text-[black] rounded-lg border  px-3 py-1 text-[12px]"
                            >
                              Cancel
                            </button>

                            <button
                              // onClick={() => {
                              //   setnotes(false);
                              // }}
                              className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                              type="Submit"
                            >
                              Add item
                            </button>
                          </div>
                        </div>
                      </div>
                 


                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4 w-[30%] xl:w-[100%]'>
            <div className='xl:w-[100%]  border-[1px bg-white py-[15px]	 shadow-md rounded-[8px]'>

            </div>
        </div>
      </div>

    </div>
  )
}

export default EditOrder