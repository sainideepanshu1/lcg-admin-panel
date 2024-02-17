import React from "react";
import { LuAlertTriangle } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
function AddCustomers() {
  return (
    <div className="bg-[#F1F1F1] w-full h-[100vh] ">
      <div className="flex justify-between px-7 py-5 bg-[rgba(26,26,26,1)]  mt-[2px]">
        <div className="flex items-center text-[#e3e3e3] gap-2">
          <span>
            <LuAlertTriangle />
          </span>
          <h3>Unsaved changes</h3>
        </div>

        <div className="flex items-center gap-3 text-[14px]">
          <button className="  rounded-lg bg-[#303030]  hover:bg-[rgba(74,74,74,1)] py-[5px] px-[10px] text-[#e3e3e3]">
            Discard
          </button>
          <button className="bg-[#303030]  py-[5px] px-[10px] rounded-lg hover:bg-[rgba(74,74,74,1)] text-white">
            Save
          </button>
        </div>
      </div>

      <div className="flex items-center   text-[20px] font-bold px-7 py-6 gap-3">
        <span className="text-[16px]">
          <FaArrowLeftLong />
        </span>
        <h3>New customer</h3>
      </div>
      <hr></hr>

      <div className="flex  px-7 py-5  justify-between">
        <div className="text-[14px] font-semibold">
          <h3>Customer overview</h3>
        </div>

        <div className="border-[1px] w-[50%] rounded-lg bg-white ">
          <div className="flex">
            <div>
              <div className="px-4 pt-4">
                <h2 className="text-heading text-heading-color font-[450]">
                  First name
                </h2>
              </div>
              <div className="p-4 pt-2">
                <input
                  type="text"
                  name="First name"
                  className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>

            <div>
              <div className="px-2 pt-4">
                <h2 className="text-heading text-heading-color font-[450]">
                  Last name
                </h2>
              </div>
              <div className="p-2 pt-2">
                <input
                  type="text"
                  name="First name"
                  className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>

            
          </div>

          <div>
          <div>
              <div>
                <div className="px-4 pt-4">
                  <h2 className="text-heading text-heading-color font-[450]">
                  Email
                  </h2>
                </div>
                <div className="p-4 pt-2">
                  <input
                    type="Email"
                    name="First name"
                    className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomers;
