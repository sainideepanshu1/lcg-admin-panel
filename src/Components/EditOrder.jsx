import React, { useEffect, useRef } from "react";

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
import { IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

import { IoIosSearch } from "react-icons/io";

function EditOrder() {
  const [AddCustomer, setAddCustomer] = useState();
  const [Additem, setAdditem] = useState(false);
  const Additemref = useRef(null);
  const [browse, setbrowse] = useState(false);
  const browseref = useRef(null);


  //   ---------------browser-----------
  const browseclick = (event) => {
    if (browseref.current && !browseref.current.contains(event.target)) {
      setbrowse(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", browseclick, true);
    return () => {
      document.removeEventListener("click", browseclick);
    };
  });

  //   ------------------

  const Additemhandleclick = (event) => {
    if (Additemref.current && !Additemref.current.contains(event.target)) {
      setAdditem(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", Additemhandleclick);
    return () => {
      document.removeEventListener("click", Additemhandleclick);
    };
  });

  return (
    <div className="bg-[#F1F1F1] w-full h-[100%] md:px[10px]">
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

      <div className="flex gap-4  xl:flex-wrap  my-6  px-7 py-1 sm:px-6 xm:px-2 ">
        <div className="flex flex-col gap-3 h-full   w-[70%] xl:w-[100%]">
          <div className=" border-[1px]   bg-white py-[15px]	 shadow-md rounded-[8px]">
            <div className="flex justify-between items-center px-[15px]  ">
              <h3 className="text-[#303030] text-[14px] font-semibold ">
                Add product
              </h3>

              <button onClick={() => setAdditem(!Additem)} className="text-[14px] text-[#005bd3]  hover:underline ">
                Add custom item
              </button>
              {Additem && (
                <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-start justify-center backdrop-blur-sm ">
                  <div className="rounded-xl my-4 bg-white   w-[45%] shadow-md   sm:w-[80%]">
                    <div className="flex items-center  px-3 py-2 bg-[#f3f3f3] rounded-t-xl justify-between">
                      <div>
                        <h2 className="cursor-pointer text-[#303030] text-[14px] font-semibold ">
                          Add custom item
                        </h2>
                      </div>
                      <div>
                        <div  onClick={() => setAdditem(!Additem)}  className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[20px] cursor-pointer">
                          <IoIosClose />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-col  px-4 pb-4 gap-3">
                      <div className="flex  w-[100%] px-2 py-4 gap-3 sm:flex sm:flex-col">
                        <div className="">
                          <div className="pr-4 ">
                            <h2 className="text-heading  text-heading-color py-1 font-[450]">
                              Item name
                            </h2>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="py-[6px] px-3  rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading focus-within:outline "
                            />
                          </div>
                        </div>
                        <div className="">
                          <div className="text-heading py-1  ">Price</div>
                          <div className=" border-[#8a8a8a]  flex items-center px-2 rounded-[0.5rem]  border-[1px] focus-within:outline ">
                            <span className="p-1 text-[#616161]">&#8377;</span>
                            <input
                              type="text"
                              placeholder="0.00"
                              name="price"
                              className="w-[90%] text-[13px] px-[2px] outline-none "
                            />
                          </div>
                        </div>
                        <div className="">
                          <div className="text-heading py-1">Quantity</div>
                          <div className="group border-[#8a8a8a] border w-full flex items-center rounded-[0.5rem] focus-within:outline">
                            <input
                              type="number"
                              placeholder="1"
                              className="w-[95%] text-[13px] px-2 py-[6px] rounded-[0.5rem] outline-none focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm flex  items-center text-[13px] gap-2">
                          <input type="checkbox" id="tax" />
                          Item is taxable
                        </label>
                      </div>
                      <div>
                        <label className="text-sm flex  text-[13px] items-center gap-2">
                          <input type="checkbox" id="tax" />
                          Item is a physical product
                        </label>
                      </div>

                      <div>
                        <div className="pt-2 ">
                          <h3 className="text-[13px]">
                            Item weight (optional)
                          </h3>
                          <div className="flex items-center gap-2 py-2 ">
                            <input
                              step="0.1"
                              className="py-[6px] px-3  rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading outline-none"
                              type="Number"
                            />
                            <div className="">
                              <select className="px-1 py-2 rounded-lg">
                                <option>kg</option>
                              </select>
                            </div>
                          </div>
                          <h3 className="text-[13px]">
                            Used to calculate shipping rates accurately
                          </h3>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="flex  justify-end  px-3 py-4 gap-2 rounded-b-xl ">
                      <button  onClick={() => setAdditem(!Additem)}  className=" text-[black] rounded-lg border  px-3 py-1  text-[12px]">
                        Cancel
                      </button>

                      <button
                     
                        className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                        type="Submit"
                      >
                        Add item
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center gap-2 py-[8px]  px-[15px]">
              <div className="flex gap-1 border-[1px] border-[#8a8a8a]  py-1 px-1 w-full rounded-lg items-center">
                <span className="text-[#8a8a8a]">
                  <IoIosSearch />
                </span>
                <input
                  className="outline-none w-full text-[14px]"
                  type="text"
                  placeholder="Search product to add"
                />
              </div>
              <div>
                <button
                  onClick={() => setbrowse(!browse)}
                  className="border-[1px] text-[13px] border-[#8a8a8a]  rounded-lg px-2 py-[5px] "
                >
                  Browse
                </button>

                {browse && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-start justify-center backdrop-blur-sm">
                    <div className="rounded-xl my-4 bg-white  w-[40%] sm:w-[80%] shadow-md ">
                      <div className="flex   p-3 bg-[#f3f3f3] rounded-t-xl justify-between">
                        <div className="">
                          <h2>Add products</h2>
                        </div>
                        <div>
                          <div
                            onClick={() => setbrowse(!browse)}
                            className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px] cursor-pointer"
                          >
                            <IoIosClose />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="p-2 w-full">
                        <div className="hover:bg-[#FAFAFA]  gap-1 flex items-center text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans  pl-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]">
                          <div className="text-[16px]">
                            <CiSearch />
                          </div>

                          <input
                            className="outline-none rounded-r-xl  hover:bg-[#FAFAFA] py-1 w-[95%]"
                            type="text"
                            name="Products"
                            placeholder="Search products"
                          />
                        </div>
                      </div>
                      <hr />

                      <div className="flex  justify-between  p-3 rounded-b-xl ">
                        <div className=""></div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setbrowse(!browse)}
                            className=" text-[black] rounded-lg border  px-3 py-1 text-[12px]"
                          >
                            Cancel
                          </button>

                          <button
                            onClick={() => {
                              setnotes(false);
                            }}
                            className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                            type="Submit"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="">
              <div className="flex mx-[15px] my-[3px]  gap-1 items-center px-[8px] py-[6px] rounded-lg text-[13px] bg-[#ffeb78] text-[#4f4700] w-[100px] ">
                <span className="text-[16px] ">
                  <HiOutlineArchiveBoxXMark />
                </span>{" "}
                <span>Unfulfilled</span>
              </div>

              <div className="border-[1px] mx-[15px] my-2 rounded-md ">
                <div className="flex justify-between items-start px-[18px] pt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className=" w-[43px] h-[40px] object-contain ">
                      <img className="rounded-md" src={Product2} alt="" />
                    </div>
                    <div className="">
                      <div className="text-[13px] font-semibold">
                        <h2>Glowing Panda - A Memorable Gift</h2>
                      </div>

                      <div className="text-[13px] text-[#303030] bg-[#e3e3e3] px-2 my-[4px] rounded-lg line-clamp-1">
                        <h3 className="line-clamp-1">
                          Brown / Without Gift Wrap / Without Gift Card
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="flex items-center text-[14px]  ">
                      <span className="flex items-center">
                        <MdCurrencyRupee />
                        649
                      </span>
                      <span>.00</span>
                    </div>
                  </div>
                </div>

                <div className="px-[70px] mb-[15px]">
                  <h3 className="text-[#616161] text-[12px]">
                    SKU: LCG-PL-GPLV-BR-0005
                  </h3>
                  <h2 className="text-[14px]">1 × ₹499.00 </h2>
                </div>

                <hr />
              </div>
            </div>
          </div>

          <div className="border-[1px]   bg-white py-[15px]	 shadow-md rounded-[8px]">
            <div className="">
              <h3 className="px-[15px]  text-[#303030] text-[14px] font-semibold ">
                Payment
              </h3>
              <div className=" flex flex-col gap-1 border-[1px] mx-[15px] py-1 px-2 my-2 rounded-md">
                <div className="flex justify-between">
                  <h3 className="text-[13px] font-medium">Subtotal</h3>
                  <div className="flex items-center text-[14px]  ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-[13px] font-medium text-[#005bd3]  hover:underline ">
                    Edit shipping
                  </h3>
                  <h2 className="text-[13px] font-medium">Express Delivery</h2>
                  <div className="flex items-center text-[14px]  ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-[#303030] text-[14px] font-semibold ">
                    Total
                  </h3>
                  <div className="flex items-center text-[14px]  font-semibold  ">
                    <span className="flex items-center font-semibold">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>
                <div></div>

                <hr />

                <div className="flex justify-between py-2">
                  <h3 className="text-[14px]">Paid by customer</h3>
                  <div className="flex items-center text-[14px]  ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>

              

            </div>
            
          </div>
          <div className=" flex flex-col gap-2 border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px] px-[8px]">
            <h3 className="text-[#303030] text-[14px] font-semibold">
              Reason for refund
            </h3>
            <input
              className="w-full border-[1px] px-2 text-[#303030] border-[#303030] rounded-lg py-[4px] "
              type="text"
            />
            <h3 className="text-[#616161] text-[13px]">
              Only you and other staff can see this reason.
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[30%] xl:w-[100%]">
          <div className="xl:w-[100%]  border-[1px bg-white py-[15px]	 shadow-md rounded-[8px]">

          <div   className="">
               <h3 className="text-[#303030] text-[14px] font-semibold pb-[10px]  px-[15px]">Summary</h3>
              <div className="flex flex-col gap-2  px-[15px]">
               <div className="">
                <div className="flex justify-between">
                  <h3 className="text-[14px]">Updated total</h3>
               
                <div className="flex items-center text-[14px] ">
                <span className="flex items-center">
                  <MdCurrencyRupee />
                  600
                </span>
                <span>.00</span>
              </div>
              </div>

               </div>

               <div className="">
                <div className="flex justify-between">
                  <h3 className="text-[14px]">Paid by customer</h3>
               
                <div className="flex items-center text-[14px] ">
                <span className="flex items-center">
                  <MdCurrencyRupee />
                  0
                </span>
                <span>.00</span>
              </div>
              </div>

               </div>
               <div className="pb-[15px]">
                <div className="flex justify-between">
                  <h3 className=" text-[#303030] text-[14px] font-semibold">Amount to collect</h3>
               
                <div className="flex items-center ] text-[#303030] text-[14px] font-semibold ">
                <span className="flex items-center font-[10px] ">
                <FaRupeeSign />

                  0
                </span>
                <span>.00</span>
              </div>
              </div>

               </div>





               </div>

               <hr/>

               <div className="flex flex-col gap-2 py-[10px]">
                <h3 className="px-[15px] text-[#303030] text-[13px] font-semibold">Invoice</h3>
                <h3 className=" px-[15px] text-[14px]">There’s no email address on this order. Your customer won’t be notified of these changes.</h3>
                
               </div>


               <hr/>
               <div className="flex justify-center mx-[15px] my-[12px] ">
               <button className="text-[13px] w-full  border-[1px]  py-[5px] rounded-lg text-[white] font-semibold bg-black" >Update order</button>
               </div>



            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EditOrder;
