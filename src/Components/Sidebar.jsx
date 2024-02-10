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

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-[15%] sticky top-0 sm:hidden">
        <div className="bg-[#ebebeb]  w-full h-full pt-8 px-6">
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
                  to="/add-product"
                >
                  <IoMdPricetag /> Products
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
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
      <div className="h-screen w-full bg-[#00000080] top-[68px] hidden sm:absolute sm:block fixed">
        <div className="bg-[#ebebeb] w-[70%] h-full pt-8 px-6">
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
                  to="/add-product"
                >
                  <IoMdPricetag /> Products
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 py-1 px-2 hover:bg-[#fafafa] rounded-lg"
                  to="/"
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
    </>
  );
};

export default Sidebar;
