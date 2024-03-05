import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";

const Orders = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] w-full  ">
        {/* <-------heding-----> */}
        <div className="justify-between items-center flex px-12 py-8">
          <div>
            <h1 className="text-[20px] font-[600] text-[#000000]">Orders</h1>
          </div>
          <div className="flex gap-4">
            <div className=" items-center">
              <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading">
                Export
              </button>
            </div>
            <button>
              <Link
                to="/orders/create-order"
                className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
              >
                Create order
              </Link>
            </button>
          </div>
        </div>

        {/* <-------table heding-------> */}

        <div className="flex justify-between overflow-x-hidden w-full text-[#585858] px-12 xm:px-4">
          <div className="flex  sm:overflow-y-auto  items-center ">
            <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
              All
            </button>
            <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
              Unfulfilled
            </button>
            <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
              All Orders
            </button>
            <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
              Archived
            </button>

            <button>
              <Link
                to=""
                className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[18px] xm:text-[12px] font-[600] "
              >
                +
              </Link>
            </button>
          </div>
          <div className="flex gap-1">
            <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all xm:text-[12px] text-[18px] px-2 py-0 rounded-lg flex items-center">
              <IoSearchOutline /> <CgSortAz />
            </button>
            <button className="border shadow-lg cursor-pointer hover:bg-[#e3e3e3] transition-all flex items-center rounded-lg xm:text-[12px] text-[18px] px-2 py-0">
              <TbArrowsSort />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
