import React from "react";

import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
function AbandonedCheckoutsDetail() {
  return (
    <div className="bg-[#F1F1F1] w-full h-[100%]  md:px[10px]">
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
    </div>
  );
}

export default AbandonedCheckoutsDetail;
