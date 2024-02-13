import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiDivideFill } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { FaInbox } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { TbSettingsFilled } from "react-icons/tb";
import { HiCollection } from "react-icons/hi";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
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
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                >
                  <FaInbox /> Orders
                </Link>
              </li>
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
          isSidebarOpen ? "sm:left-0" : "sm:left-[-100%]"
        }  sm:block fixed`}
        onClick={(e) => {
          if (e.target.classList.contains("bg-[#00000080]")) {
            toggleSidebar();
          }
        }}
      >
        <div className="bg-[#ebebeb]  w-[50%] h-full pt-8 px-6">
          <div>
            <ul className=" text-[14px] font-medium  flex flex-col gap-3 text-[#303030] ">
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2  hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <AiFillHome />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <FaInbox /> Orders
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/products"
                  onClick={toggleSidebar}
                >
                  <IoMdPricetag /> Products
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/collections"
                  onClick={toggleSidebar}
                >
                  <HiCollection /> Collections
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/customers"
                  onClick={toggleSidebar}
                >
                  <IoMdPerson />
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <TbBrandGoogleAnalytics />
                  Analytics
                </Link>
              </li>

              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2  hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <TbTargetArrow />
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
                  onClick={toggleSidebar}
                >
                  <PiDivideFill />
                  Discounts
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2  py-1 px-2 hover:bg-[#fafafa] rounded-lg "
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
