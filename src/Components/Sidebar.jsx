import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { PiDivideFill } from 'react-icons/pi';
import { TbTargetArrow } from 'react-icons/tb';
import { FaInbox } from 'react-icons/fa6';
import { IoMdPricetag } from 'react-icons/io';
import { TbSettingsFilled } from 'react-icons/tb';
import { HiCollection } from 'react-icons/hi';
import { GoReply } from 'react-icons/go';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [Order, setOrder] = useState();
  const Orderref = useRef(null);

  const handleOrderClick = (event) => {
    if (Orderref.current && !Orderref.current.contains(event.target)) {
      setOrder(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOrderClick);

    return () => {
      document.removeEventListener('click', handleOrderClick);
    };
  }, []);
  return (
    <>
      <div className="h-screen w-[17%] sticky top-0 sm:hidden ">
        <div className="bg-[#ebebeb] overflow-auto w-full h-full pt-8 px-6">
          <div>
            <ul className="  text-[14px] font-medium  flex flex-col gap-3 text-[#303030] ">
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2  hover:bg-[#fafafa] rounded-lg"
                  to="/"
                >
                  <AiFillHome />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  ref={Orderref}
                  onClick={() => {
                    setOrder(!Order);
                  }}
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/orders"
                >
                  <FaInbox /> Orders
                </Link>
              </li>
              {Order && (
                <div className="">
                  <li>
                    <Link
                      className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] group rounded-lg"
                      to="/draftorders"
                    >
                      <div className='w-3'>
                        <div className="rotate-180  hidden group-hover:block">
                          <GoReply />
                        </div>
                      </div>
                      Draft Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] group rounded-lg"
                      to="/Abandoned"
                    >
                     <div className='w-3'>
                        <div className="rotate-180 hidden group-hover:block">
                          <GoReply />
                        </div>
                      </div>
                      Abandoned
                    </Link>
                  </li>
                </div>
              )}

              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/products"
                >
                  <IoMdPricetag /> Products
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/collections"
                >
                  <HiCollection /> Collections
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/customers"
                >
                  <IoMdPerson />
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                >
                  <TbBrandGoogleAnalytics />
                  Analytics
                </Link>
              </li>

              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2  hover:bg-[#fafafa] rounded-lg"
                  to="/"
                >
                  <TbTargetArrow />
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                >
                  <PiDivideFill />
                  Discounts
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg "
                  to="/"
                >
                  <TbSettingsFilled />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`h-screen w-full transition-all duration-500 z-10 bg-[#00000080] top-[48px] hidden sm:absolute ${
          isSidebarOpen ? 'sm:left-0' : 'sm:left-[-100%]'
        }  sm:block fixed`}
        onClick={(e) => {
          if (e.target.classList.contains('bg-[#00000080]')) {
            toggleSidebar();
          }
        }}
      >
        <div className="bg-[#ebebeb]  w-[50%]  h-full pt-[7px] pr-[24px] pl-[8px]">
          <div>
            <ul className=" text-[14px] font-medium  flex flex-col gap-[0.35rem] text-[#303030] ">
              <li>
                <Link
                  className="flex font-[700] items-center gap-2  py-1 px-2  hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <AiFillHome />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/orders"
                  onClick={toggleSidebar}
                >
                  <FaInbox /> Orders
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/draftorders"
                  onClick={toggleSidebar}
                >
                  <TfiAngleDoubleRight /> Draft Orders
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/Abandoned"
                  onClick={toggleSidebar}
                >
                  <TfiAngleDoubleRight /> Abandoned
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/products"
                  onClick={toggleSidebar}
                >
                  <IoMdPricetag /> Products
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/collections"
                  onClick={toggleSidebar}
                >
                  <HiCollection /> Collections
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/customers"
                  onClick={toggleSidebar}
                >
                  <IoMdPerson />
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <TbBrandGoogleAnalytics />
                  Analytics
                </Link>
              </li>

              <li>
                <Link
                  className="flex font-[700] items-center gap-2 py-1 px-2  hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <TbTargetArrow />
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <PiDivideFill />
                  Discounts
                </Link>
              </li>
              <li>
                <Link
                  className="flex font-[700] items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg "
                  to="/"
                  onClick={toggleSidebar}
                >
                  <TbSettingsFilled />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
