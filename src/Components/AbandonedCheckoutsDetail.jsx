import React from "react";
import { MdContentCopy } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import Product2 from "../assets/Product2.jpg";

import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
function AbandonedCheckoutsDetail() {
  return (
    <div className="bg-[#F1F1F1] w-full   md:px[10px]">
      <div className="flex my-6 items-start justify-between px-7 py-1 sm:px-6 xm:px-2 ">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <Link>
                <FaArrowLeftLong />
              </Link>
              <h3 className="text-[20px] text-[#000000] font-[700]">
                #34776896176387
              </h3>
            </div>

            <div className="flex gap-1 items-center text-[12px] text-[#5e4200] bg-[#ffd6a4] px-[5px] py-[2px] rounded-lg">
              <span>Not Recovered</span>
            </div>
          </div>
          <div className="flex items-center px-[24px] text-[#616161] text-[12px]">
            <span>India, 9 March 2024 at 12:38 pm</span>
          </div>
        </div>

        <div>
          <button className="flex text-heading items-center px-[12px] py-[3px] gap-1   bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg">
            Print
          </button>
        </div>
      </div>
      <div className="flex gap-4  xl:flex-wrap  my-6  px-7 py-1 sm:px-6 xm:px-0 ">
        <div className="flex flex-col gap-3 h-full   w-[70%] xl:w-[100%]">
          <div className="border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]">
            <div className="flex justify-between px-[15px] ">
              <div>
                <h2 className="text-[13px] font-semibold">Checkout details</h2>
                <h3 className="text-[13px]">From Ecom360-LoveCraftGifts</h3>
              </div>

              <button className="flex gap-1 px-[15px]  rounded-xl items-center border-[1px] hover:bg-[#eeeded]">
                <span>
                  <MdContentCopy />
                </span>
                <span className="text-[12px] text-[#303030]">
                  Copy checkout URL
                </span>
              </button>
            </div>
            <div>
              <div className="flex border-[1px] rounded-lg mx-[15px] my-[15px] justify-between items-start px-[18px] py-[15px]">
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
                    <div className=" flex flex-col gap-1 text-[#616161] text-[13px]  font-medium  ">
                      <h3>SKU: LCG-PL-GPLV-BR-0005</h3>
                      <div className="flex xm:flex-wrap">
                        <h4>Enter Name for panda lamp (No emoji):</h4>
                        <h4>Srujana </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 text-[13px] xm:hidden">
                  <div className="flex items-center">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                  <h3>X 1</h3>
                </div>

                <div className="flex ">
                  <div className="flex items-center text-[14px] font-semibold ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-2  py-[5px] mx-[10px] rounded-lg">
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
                  <h3 className="text-[13px]">Estimated tax</h3>

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
                      <span className="flex items-center font-semibold">
                        <MdCurrencyRupee />
                        100
                      </span>
                      <span className="font-semibold">.00</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between px-[8px] pt-[5px]">
                  <h3 className="text-[13px]">To be paid by customer</h3>

                  <div className="flex items-center text-[14px] font-medium">
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
          <div className="border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]  px-[18px] ">
            <div>
              <h3 className="text-[13px] font-semibold">Recovery automation</h3>
              <p className="text-[#616161] text-[13px] ">
                Results from automations triggered by this abandoned checkout.
                Details are deleted after 7 days.{" "}
              </p>
            </div>

            <div className="border-[1px] w-full  mt-[10px]  bg-white shadow-md rounded-[8px]  ">
              <div className="flex justify-between py-[10px]	  px-[18px] items-center bg-[#f1f1f1]">
                <h3 className="text-[13px] text-[#005bd3]  hover:underline">
                  Abandoned checkout
                </h3>
                <button className="text-[13px] rounded-xl py-[3px] px-[10px] border-[1px] hover:bg-[#eeeded] font-medium bg-white text-[#303030]">
                  View details
                </button>
              </div>
              <hr />
              <div></div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4 w-[30%] xl:w-[100%]">
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
                    Mandir complex Back Side Road 792001 TEZU Arunachal Pradesh
                    India
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
    </div>
  );
}

export default AbandonedCheckoutsDetail;
