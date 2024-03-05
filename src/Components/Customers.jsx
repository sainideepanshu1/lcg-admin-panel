import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoChevronUp } from "react-icons/io5";
import { LuLayout } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowUp } from "react-icons/lu";
import { LuArrowDown } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import axios from "axios";

function Customers() {
  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState(false);
  const imexRef = useRef(null);
  const [checkbox, setcheckbox] = useState(false);

  const [customers, setCustomers] = useState([]);

  const fetchAllCustomers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/customers/getCustomers"
      );
      const newCustomers = response.data.customers;

      setCustomers(newCustomers);
      console.log(newCustomers[3].addresses);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchAllCustomers();
  }, []);

  // ---------click option--------

  function Option() {
    setcheckbox(!checkbox);
  }

  const [sort, setSort] = useState(false);
  const sortRef = useRef(null);

  // ----sort bar---
  const handleclick = (event) => {
    if (sortRef.current && !sortRef.current.contains(event.target)) {
      setSort(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleclick, true);

    return () => {
      document.removeEventListener("click", handleclick, true);
    };
  }, []);

  // ---------filter click-------
  function filterClick() {
    setFilter(!filter);
  }

  // --------searchbar deny function--------------

  const [textareaValue, setTextareaValue] = useState("");
  const handleButtonClick = () => {
    setTextareaValue(" ");
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  // --------------import export outclick button--------
  const handleClickOutside = (event) => {
    if (imexRef.current && !imexRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  // top down arrow------------

  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-screen justify-between ">
        <div className="flex mt-6 items-center justify-between px-7 py-1 sm:px-6 ">
          <div>
            <h1 className="text-[20px] font-[600] text-[#000000]">Customers</h1>
          </div>

          <div className="flex gap-2 font-[600] ">
            <div
              ref={imexRef}
              onClick={() => {
                setToggle(!toggle);
              }}
              className="relative cursor-pointer hidden sm:block bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg px-3 py-[10px] mt-[1px]text-heading z-11 "
            >
              <BsThreeDots />
              {toggle && (
                <div className="flex z-20 gap-4 p-[10px] flex-col bg-white border-[1px] absolute top-[35px] right-[35px] rounded-lg text-heading">
                  <button>Export</button>
                  <button>Import</button>
                </div>
              )}
            </div>

            <div className="flex gap-2 sm:hidden items-center">
              <button className="text-[12px] font-medium cursor-pointer bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg p-[6px]">
                Export
              </button>
              <button className="text-[12px] font-medium cursor-pointer bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg p-[6px]">
                Import
              </button>
            </div>
            <button>
              <Link
                to="/AddCustomers"
                className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
              >
                Add customer
              </Link>
            </button>
          </div>
        </div>
        {/* ---------- no of customer--------  */}

        <div
          className=" bg-[ #F3F3F3] 
      rounded-xl border-[1px] border-[#a09f9fdc] shadow-md my-[20px] mx-7   xm:mx-0 gap-0 justify-normal xm:rounded-sm  "
        >
          <div className=" flex items-center justify-between ">
            <div className="flex items-center gap-0  flex-wrap xm:gap-0  ">
              <div className=" flex  gap-1 text-heading py-[16px] px-[16px] xm:py-[4px]  ">
                <h3 className="text-[#080808]">116020 </h3>
                <h3 className="text-[#555454]">customers</h3>
              </div>

              <div className=" flex text-heading gap-1  py-[16px] px-[16px] xm:px-[10px] xm:py-[4px] ">
                <h3 className="text-[#080808]">100% </h3>
                <h3 className="text-[#555454]">of your customer base</h3>
              </div>
            </div>

            <div>
              <div
                onClick={filterClick}
                className={`flex transition-400 px-[15px] ${
                  filter ? "hidden" : "block"
                }`}
              >
                <button className="flex w-[89px] text-heading items-center px-[5px] py-[4px] gap-1 border-[1px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg ">
                  <span className="text-[#080808]">Add Filter</span>
                  <span>
                    <FaAngleDown />
                  </span>
                </button>
              </div>
              <div>
                <div
                  className={` flex items-center gap-8 px-[10px] ${
                    filter ? "block" : "hidden"
                  }`}
                >
                  <div className="cursor-pointer">
                    <div className="group  relative">
                      <div className="hidden absolute bg-white p-2 rounded-lg text-heading top-[-40px] right-[-25px] group-hover:block">
                        <h3>Templates</h3>
                      </div>
                      <div className=" rounded-md text-[#4a4a4a] p-2 hover:hover:bg-[#E3E3E3]  ">
                        <span>
                          <LuLayout />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer text-[18px] border-l  border-r border-1 border-[#EBEBEB] px-[12px] ">
                    <div className=" hidden absolute top-[-42px] right-[-2px] bg-white p-2 rounded-lg text-heading  group-hover:block">
                      <h3>Filters</h3>
                    </div>

                    <div className="rounded-md  p-[6px] text-[#4a4a4a]   hover:bg-[#E3E3E3] ">
                      <span className="">
                        <IoFilterSharp />
                      </span>
                    </div>
                  </div>
                  <div onClick={filterClick}>
                    <div className="relative group cursor-pointer">
                      <div
                        className=" w-[91px] hidden  absolute right-[-31px]
  top-[-43px] bg-white p-2 rounded-lg text-heading  group-hover:block xm:right-[-2px]"
                      >
                        <h3>Close editor</h3>
                      </div>
                      <div className=" rounded-md text-[#4a4a4a]   p-[6px]   hover:bg-[#E3E3E3] ">
                        <span>
                          <IoChevronUp />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${filter ? "block" : "hidden"}`}>
            <div className="bg-white  ">
              <textarea
                placeholder="To create a segment, choose  template or apply a filter"
                className="w-full py-2 font-mono px-2 text-[14px] text-[#303030] h-[80px]"
                onChange={handleTextareaChange}
                value={textareaValue}
              ></textarea>

              <hr></hr>
            </div>

            <div className="flex justify-end gap-2 py-[10px] px-[15px] bg-white rounded-b-xl">
              <button
                onClick={handleButtonClick}
                className=" py-[6px] px-[8px] rounded-lg text-[13px] border-[1px]"
              >
                Discard
              </button>
              <button className=" py-[6px] px-[8px] rounded-lg text-[13px] border-[1px]">
                Apply
              </button>
            </div>
          </div>
        </div>
        {/* ------------------customer detail----------- */}

        <div className=" bg-white rounded-xl border-[1px] border-[#a09f9fdc] shadow-md my-[10px] mx-7   xm:mx-0 gap-0 justify-normal xm:rounded-md xm:border-[0px] ">
          <div className=" flex justify-between p-[8px]  ">
            <div className="w-full justify-center flex items-center  py-1 px-[8px] rounded-lg bg-[#faf8f8] focus-within:outline focus-within:bg-[#f1f1f1c2]  ">
              <span className="text-[#616161]">
                <IoIosSearch />
              </span>
              <input
                placeholder="Search customers"
                className="w-full outline-none text-[14px] bg-[#faf8f8] text-[#303030] focus-within:bg-[#f1f1f1c2]"
              />
            </div>

            <div className="flex  items-center ">
              <button
                className=" bg-black text-[14px] text-white rounded-lg mx-[10px]
          px-[7px] py-[5px]"
              >
                Search
              </button>

              <div>
                <button
                  ref={sortRef}
                  onClick={() => {
                    setSort(!sort);
                  }}
                  className=" relative border-[1px] rounded-md bg-white p-[4px]"
                >
                  <LuArrowUpDown />
                </button>
              </div>

              {sort && (
                <div ref={sortRef} className=" ">
                  <div className="text-[#1a1a1a] flex flex-col gap-1 absolute top-[264px] right-[38px] px-[10px] rounded-lg py-[8px] bg-white text-[14px] xm:right-[10px]">
                    <h1>Sort by</h1>
                    <div className="  flex gap-2 outline-[#000] ">
                      <label className="cursor-pointer">
                        {" "}
                        <input
                          className="text-[#1a1a1a] "
                          type="radio"
                          name="radio"
                        ></input>
                        Last update{" "}
                      </label>
                    </div>
                    <div className="flex cursor-pointer gap-2">
                      <label className="cursor-pointer">
                        <input type="radio" value="HTML" name="radio" />
                        Amount spent{" "}
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <label className="cursor-pointer">
                        <input type="radio" name="radio" />
                        Total orders{" "}
                      </label>
                    </div>

                    <div className="flex gap-2">
                      <label className="cursor-pointer">
                        <input type="radio" name="radio" />
                        Last order date
                      </label>
                    </div>

                    <div className="flex gap-2">
                      <label className="cursor-pointer">
                        <input type="radio" name="radio" />
                        First order date{" "}
                      </label>
                    </div>

                    <div className="flex gap-2">
                      <label className="cursor-pointer">
                        <input type="radio" name="radio" />
                        Date added as customer{" "}
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <label className="cursor-pointer">
                        <input type="radio" name="radio" />
                        Last abandoned order date{" "}
                      </label>
                    </div>

                    <div className="">
                      <div className=" cursor-pointer flex gap-2 items-center ">
                        <span>
                          <LuArrowUp />
                        </span>
                        <h3>Oldest to newest</h3>
                      </div>

                      <div className=" cursor-pointer  flex gap-2 items-center">
                        <span>
                          {" "}
                          <LuArrowDown />
                        </span>
                        <h3>Newest to oldest</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="grid justify-between gap-4 border-t  bg-[#f5f3f3] text-[#686767] px-[10px] py-[8px] text-[13px] font-medium items-center sm:hidden "
              style={{ gridTemplateColumns: "0fr 3fr 3fr 4fr 2fr 2fr" }}
            >
              <div className="">
                <input type="checkbox" className="rounded " />
              </div>
              <div className="">
                <h3>Customer name</h3>
              </div>
              <div>
                <h3>Email subscription</h3>
              </div>
              <div>
                <h3>Location</h3>
              </div>

              <div>
                <h3>Orders</h3>
              </div>

              <div>
                <h3>Amount spent</h3>
              </div>
            </div>
            <div className={`${checkbox ? "block" : "hidden"}`}>
              <div className="onclick customer option flex gap-[30px] text-[13px] px-3 py-2 xm:gap-1 xm:text-[12px] xm:px-1">
                <div className=" px-[5px] py-[4px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg cursor-pointer">
                  <button>Merge customers</button>
                </div>

                <div className=" px-[5px] py-[4px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg cursor-pointer">
                  <button>Add tags</button>
                </div>
                <div className=" px-[5px] py-[4px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg cursor-pointer">
                  <button>Remove tags</button>
                </div>

                <div className=" px-[5px] py-[4px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg cursor-pointer">
                  <button>Delete customers</button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[420px] overflow-y-auto sm:hidden">
            {customers.map((customer, index) => (
              <div key={index}>
                <Link to={`/CustomerDetails/${customer._id}`}>
                  <div
                    className="grid justify-between gap-4 border-t border-b bg-white text-[#303030] px-[10px] py-[8px] text-[13px] font-medium items-center hover:bg-[#f5f3f3] cursor-pointer sm:hidden"
                    style={{ gridTemplateColumns: "0fr 3fr 3fr 4fr 2fr 2fr" }}
                  >
                    <div className="">
                      <input
                        onClick={() => Option(index)}
                        type="checkbox"
                        className="rounded"
                      />
                    </div>

                    <div className="hover:underline">
                      <h3>{`${customer.first_name} ${customer.last_name}`}</h3>
                    </div>

                    <div>
                      <button className="border-[1px] px-[5px] text-[12.5px] bg-[#b4fed2] text-[#0c5132] rounded-lg">
                        {customer.verified_email ? " Subscribed" : ""}
                      </button>
                    </div>

                    <div>
                      <h3>
                        {`${
                          customer?.default_address?.city
                            ? `${customer.default_address.city}, ${
                                customer.default_address.province || ""
                              }, ${customer.default_address.country}`
                            : customer?.default_address?.province
                            ? `${customer.default_address.province}, ${customer.default_address.country}`
                            : customer?.default_address?.country ?? "-"
                        }`}
                      </h3>
                    </div>

                    <div>
                      <h3>{`${customer.orders_count} orders`}</h3>
                    </div>

                    <div className="flex items-center">
                      <span>
                        <MdOutlineCurrencyRupee />
                      </span>
                      <div className="flex items-center">
                        <h3>{customer.total_spent}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden sm:block">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="border-t border-b bg-white text-[#303030] px-[10px] py-[8px] text-[13px] font-medium items-center"
              >
                <div className="text-black text-[14px] py-[1px]">
                  <h3>{`${customer.first_name} ${customer.last_name}`}</h3>
                </div>

                <div className=" py-[1px]">
                  <h3>{`${
                    customer?.default_address?.city
                      ? `${customer.default_address.city}, ${
                          customer.default_address.province || ""
                        }, ${customer.default_address.country}`
                      : customer?.default_address?.province
                      ? `${customer.default_address.province}, ${customer.default_address.country}`
                      : customer?.default_address?.country ?? "-"
                  }`}</h3>
                </div>

                <div className="flex gap-1">
                  <div>
                    <h3>{`${customer.orders_count} orders`}</h3>
                  </div>

                  <div className="flex items-center">
                    <span>
                      <MdOutlineCurrencyRupee />
                    </span>
                    <div className="flex items-center">
                      <h3>{customer.total_spent}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" p-3  bg-[#f5f3f3] rounded-bl-xl rounded-br-xl ">
          <div className="flex justify-end ">
            <div className=" flex  gap-1 ">
              <span className=" cursor-pointer  rounded-xl  p-[5px] text-[13px] hover:bg-[rgb(206,204,204)] ">
                <FaAngleLeft />
              </span>
              <span className=" cursor-pointer p-[5px] text-[13px]   rounded-xl hover:bg-[rgb(206,204,204)] ">
                {" "}
                <FaAngleRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
