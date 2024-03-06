import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { CiViewColumn } from "react-icons/ci";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";
import Pic1 from "../assets/Product1.jpg";

const Collections = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] w-full h-[100vh] flex flex-col gap-3">
        <div className="bg-[#f1f1f1] justify-between xm:p-0 px-12 py-1 ">
          <div className="flex mt-6 px-[20px] justify-between ">
            <div>
              <h1 className="text-[20px] font-medium text-[#000000]">
                Collections
              </h1>
            </div>
            <div>
              <Link
                to="/create-collection"
                className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
              >
                Create collection
              </Link>
            </div>
          </div>
          <div className="rounded-lg mt-[24px] bg-[#ffffff] w-full gap-4 justify-between flex flex-col border-stone-200 border">
            <div className="flex justify-between  py-1 px-1">
              <div className="flex items-center">
                <button className="hover:bg-[#E3E3E3] rounded-lg p-3 text-heading">
                  All
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px]">
                  +
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all text-[18px] px-2 py-1 rounded-lg flex items-center">
                  <IoSearchOutline /> <CgSortAz />
                </button>
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all rounded-lg text-[18px] px-2 py-1">
                  <CiViewColumn />
                </button>
              </div>
            </div>
            <div>
              <div className="grid xm:hidden w-full">
                <div className="w-full px-2 grid items-center text-[14px] border border-y-gray-300 text-[#666161] bg-[#f1f1f1] pt-2 pb-2">
                  <div
                    className="grid items-center "
                    style={{ gridTemplateColumns: " 1fr 1fr 5fr 2fr 4fr" }}
                  >
                    <div className="text-center">
                      <input className="h-4 w-4" type="checkbox" />
                    </div>
                    <div></div>
                    <div className="flex font-[600] gap-2 items-center text-heading text-[#666161]">
                      Title
                      <div className="flex-col text-[8px] hidden hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">Products </div>
                    <div className="text-heading font-[600] ">
                      Product conditions
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid w-full xm:hidden items-center">
                <div className="w-full px-2 grid items-center text-[14px]  text-[#666161] bg-white pt-2 pb-2">
                  <div
                    className="grid items-center "
                    style={{ gridTemplateColumns: " 1fr 1fr 5fr 2fr 4fr" }}
                  >
                    <div className="text-center">
                      <input className="h-4 w-4" type="checkbox" />
                    </div>
                    <div></div>
                    <div className="flex gap-2 text-heading items-center text-[#666161]">
                      Title
                      <div className="flex-col text-[8px] hidden hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading">Products </div>
                    <div className="text-heading">Product conditions</div>
                  </div>
                </div>
              </div>

              <div className="w-full border-l-0 border-r-0 px-2 pl-[1rem] hidden xm:block lg:hidden items-center border border-y-gray-100 text-[#30304b] text-[0.813rem] pt-3 pb-3">
                <div className="flex gap-4">
                  <div>
                    <img
                      className="h-[45px] w-[45px] rounded-xl "
                      src={Pic1}
                      alt="Pic"
                    />
                  </div>
                  <div>
                    <div className="flex font-[450] gap-2 items-center text-heading group ">
                      <Link to="/product">Title</Link>
                    </div>
                    <div className="text-[12px] text-[#666161] font-[450] flex gap-2 items-center group ">
                      Products
                    </div>
                    <div className="text-[12px] text-[#666161] font-[450] flex gap-2 group items-center cursor-pointer ">
                      Product conditions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
