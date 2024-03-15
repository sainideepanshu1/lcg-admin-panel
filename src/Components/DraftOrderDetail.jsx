import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import { FiHash } from "react-icons/fi";
import Product2 from "../assets/Product2.jpg";
import { GrSquare } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

import { MdCurrencyRupee } from "react-icons/md";


function DraftOrderDetail() {
    const[data,setdata]=useState("");
  return (
    <div className="bg-[#F1F1F1] w-full h-[100%] md:px[10px]">
      <div className="my-6  px-7 py-1 sm:px-6 xm:px-2 ">
        <div className=" flex justify-between">
          <div className="flex gap-2 items-center  ">
            <div className="">
              <Link to="/draftorders">
                <span className=" text-[#4a4a4a]">
                  <FaArrowLeftLong />
                </span>
              </Link>
            </div>

            <div className="text-[20px] font-semibold">
              <Link to="">
                {" "}
                <h3>#D39760</h3>
              </Link>
            </div>

            <div className=" text-[13px]  text-[#222222]">
              <h4>Updated by an app Today at 10:57 am</h4>
            </div>
          </div>

          <div className="">
            <button className=" text-heading px-[12px] py-[3px] gap-1   bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg">
              Dublicate
            </button>
          </div>
        </div>

        <div className="border-[1px] w-full   bg-white my-[15px]	 shadow-md rounded-[8px]">
          <div className="flex px-[15px] py-3 rounded-t-[12px] items-center gap-[6px] bg-[#29845a] text-white">
            <span className="text-[13px]">
              <FaCheck />
            </span>
            <span className="text-[14px]">Completed</span>
          </div>

          <div className=" px-[15px] py-3">
            <p className="text-[13.5px]">
              Order created on 8 Mar 2024, 10:57 am. You can{" "}
              <Link>
                <span className="underline cursor-pointer">
                  view the order{" "}
                </span>{" "}
              </Link>{" "}
              or{" "}
              <Link>
                {" "}
                <span className="underline cursor-pointer">
                  {" "}
                  create a new order.
                </span>
              </Link>{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-4  xl:flex-wrap  my-6  px-0 py-1 sm:px-0 xm:px-0 ">
          <div className="flex flex-col gap-3 h-full   w-[70%] xl:w-[100%]">
            <div className="border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]">
              <div className="  px-[15px]	 text-[13px] font-semibold ">
                <h3>Products</h3>
              </div>

              <div className=" flex justify-between  px-[15px] py-[10px]	 text-[13px] font-semibold">
                <div>
                  {" "}
                  <h3>Product</h3>
                </div>
                <div className="flex gap-[150px]">
                  <h4>Quantity</h4>
                  <h4>Total</h4>
                </div>
              </div>

              <hr />
              <div className="flex justify-between items-start px-[18px] pt-[15px] xm:flex-wrap ">
                <div className="flex items-start gap-[10px]">
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

                    <div>
                      <h3 className="text-[13px] text-[#303030] ">
                        SKU: LCG-PL-GPLV-BR-0007
                      </h3>
                      <div className="flex items-center text-[14px] ">
                        <span className="flex items-center">
                          <MdCurrencyRupee />
                          649
                        </span>
                        <span>.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[150px] text-[13px] ">
                  <div className="flex items-center">
                    <span>1</span>
                  </div>

                  <div className="flex ">
                    <div className="flex items-center text-[14px] ">
                      <span className="flex items-center">
                        <MdCurrencyRupee />
                        649
                      </span>
                      <span>.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[14px] pt-2 text-[#303030] px-[70px]">
                <h3>
                  Enter Name for panda lamp (No emoji):{" "}
                  <span className="text-[#161515]">BATKII</span>
                </h3>
              </div>
              <div></div>
            </div>
            <div className="border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]">
         <h3 className=" px-[15px] pb-[10px]	 text-[13px] font-semibold">Payment</h3>


         <div className=" flex flex-col gap-2 border-[1px] py-[10px] mx-[10px] rounded-lg">
              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px]">Subtotal</h3>
                <h3 className="text-[13px]"> 1 item</h3>
                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>


              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px]">Discount</h3>
                <h3 className="text-[13px]"> _</h3>
                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px]">Shipping</h3>
                <h3 className="text-[13px] px-[10px]">
                Prepaid / Online
                </h3>
                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      100
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>


              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px]">Estimated tax</h3>
                <h3 className="text-[13px] px-[10px]">
                Not calculated
                </h3>
                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      100
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>
              
            

              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px] font-semibold">Total</h3>

                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      100
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>
             
            </div>

         
            </div>
          </div>
          <div className=" flex flex-col gap-4 w-[30%] xl:w-[100%]">
            <div className=" xl:w-[100%]  border-[1px bg-white py-[15px] px-[15px]	 shadow-md rounded-[8px]">
              <div>
                <div className="">
                  <h3 className="text-[13px] font-semibold ">Notes</h3>
                </div>
                <div className="py-[10px]">
                  <h3 className="text-[13px] text-[#616161]">No notes</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="    border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
                <div className="">
                  <div className="flex justify-between  items-center ">
                    <h3 className="text-[13px] font-semibold">Customer</h3>
                  </div>

                  <div>
                    <span className="text-[#005bd3] text-[13px] hover:underline">
                      Hrishikesh Das{" "}
                    </span>
                    <h3 className="text-[13px] h">1 order</h3>
                  </div>
                </div>

                <div className=" ">
                  <h2 className="text-[13px]  font-semibold pt-[8px]">
                    Contact information
                  </h2>
                </div>

                <div className="">
                  <div>
                    <span className="text-[#005bd3]  hover:underline text-[13px]">
                      Gauravsaini@gmail.com
                    </span>
                  </div>
                  <div></div>
                </div>
                <div className="text-[13px]">
                  <h3 className="text-[13px]">No email address provided</h3>
                  <span className="py-[2px]">+91 82787 57344</span>
                  <h3 className="py-[2px]">
                    Will receive notifications in English
                  </h3>
                </div>

                <div className="py-[8px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[13px] font-semibold">
                      Shipping address
                    </h3>
                  </div>
                  <div className="text-[13px] py-[8px] flex flex-col gap-[2px]">
                    <h2>Deepak Roy</h2>
                    <h2>2</h2>
                    <h2>
                      Mandir complex Back Side Road 792001 TEZU Arunachal
                      Pradesh India
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[13px] font-semibold">Billing address</h3>
                  <h3 className="text-[13px] text-[#616161]">
                    Same as shipping address
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4  xl:flex-wrap    px-0 py-1 sm:px-0 xm:px-0">

            <div className="flex flex-col gap-3  h-full   w-[70%] xl:w-[100%] ">

            <div>
            <h3 className="text-[14px] font-semibold text-[#303030] py-1">
              Timeline
            </h3>
            <div className=" border-[1px]  bg-white pt-[15px]	 shadow-md rounded-[8px]">
              <div className=" flex items-center px-[10px]  ">
                <div className="w-[45px] h-[45px] ">
                  <img className="rounded-lg" src={Product2} />
                </div>

                <div className="w-full outline-none mx-[8px]">
                  <input
                    className="w-full outline-none text-[14px] "
                    type="text"
                    onChange={(event)=>setdata(event.target.value)}
                    placeholder="Leave a comment...."
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between bg-[#f7f7f7] px-4 py-5  rounded-b-[8px]">
                <div className="flex items-center gap-3 text-[16px] text-[#303030]">
                  <div className="">
                    <button className="text-[#696666]">
                      <BsEmojiSmile />
                    </button>
                  </div>
                  <div>
                    <button className="text-[#696666]">
                      <CiAt />
                    </button>
                  </div>
                  <div>
                    <button className="text-[#696666]">
                      <FiHash />
                    </button>
                  </div>
                  <div className="pb-[6px]">
                    <input className="text-[14px]" type="file"></input>
                  </div>
                </div>
                <div>
                  <button disabled={!data} style={data?{background:'black'}:{background:'rgba(241, 241, 241, 1)', color:"white" }}  className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[white] font-semibold bg-black " >
                    Post
                  </button>
                </div>
              </div>
              <h2 className="text-[#616161] text-[13px] float-right p-[2px] font-medium">
                Only you and other staff can see comments
              </h2>
            </div>

            <div className="border-l-[2.5px] relative  max-h-[800px] ml-10  border-[#a5a4a4] top-0">
              <div className=" flex flex-col gap-6 py-[40px] ">
                <div className="flex flex-col">
                  <h3 className="px-[20px] text-[#616161] text-[13px]">
                    Yesterday
                  </h3>
                  <div className="flex items-center px-[20px] py-[10px]   ">
                    <span className="absolute left-[-10px] text-[#747373]">
                      <GrSquare />
                    </span>
                    <div className="flex gap-[30px]">
                      <h3 className="text-[#303030] text-[13px]">
                        Order Confirmation email for order{" "}
                        <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "}
                        sent to this customer (Aroramonica4@gmail.com).
                      </h3>
                      <span className="flex  text-[#303030] text-[14px]">
                        5.00pm
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="px-[20px] text-[#616161] text-[13px]">
                    Yesterday
                  </h3>
                  <div className="flex items-center px-[20px] py-[10px]   ">
                    <span className="absolute left-[-10px] text-[#747373]">
                      <GrSquare />
                    </span>
                    <div className="flex gap-[30px]">
                      <h3 className="text-[#303030] text-[13px]">
                        Order Confirmation email for order{" "}
                        <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "}
                        sent to this customer (Aroramonica4@gmail.com).
                      </h3>
                      <span className="flex  text-[#303030] text-[14px]">
                        5.00pm
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="px-[20px] text-[#616161] text-[13px]">
                    Yesterday
                  </h3>
                  <div className="flex items-center px-[20px] py-[10px]   ">
                    <span className="absolute left-[-10px] text-[#747373]">
                      <GrSquare />
                    </span>
                    <div className="flex gap-[30px]">
                      <h3 className="text-[#303030] text-[13px]">
                        Order Confirmation email for order{" "}
                        <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "}
                        sent to this customer (Aroramonica4@gmail.com).
                      </h3>
                      <span className="flex  text-[#303030] text-[14px]">
                        5.00pm
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="px-[20px] text-[#616161] text-[13px]">
                    Yesterday
                  </h3>
                  <div className="flex items-center px-[20px] py-[10px]   ">
                    <span className="absolute left-[-10px] text-[#747373]">
                      <GrSquare />
                    </span>
                    <div className="flex gap-[30px]">
                      <h3 className="text-[#303030] text-[13px]">
                        Order Confirmation email for order{" "}
                        <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "}
                        sent to this customer (Aroramonica4@gmail.com).
                      </h3>
                      <span className="flex  text-[#303030] text-[14px]">
                        5.00pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className=" flex flex-col gap-4 w-[30%] xl:w-[100%]">
          <div className="xl:w-[100%]  border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
            <div className="flex justify-between items-center">
              <h3 className="text-[13px] font-semibold ">Tags</h3>
             
            </div>
            <div className=" py-2  ">
              <input
                type="input"
                className="w-full border-[1px] border-[#303030] px-[8px] py-[2px] rounded-lg "
              />
            </div>

            <div className="w-fit">
               <div className="bg-[#e3e3e3]  flex items-center gap-[2px] rounded-lg  py-1 px-1">
                <span className="text-[12px]">Laxmen</span>
                <button className="text-[17px] pt-[2px]"><IoIosClose /></button>
               </div>

            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default DraftOrderDetail;
