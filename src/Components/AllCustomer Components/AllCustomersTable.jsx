/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuArrowDown, LuArrowUp, LuArrowUpDown } from "react-icons/lu";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AllCustomersContext } from "../../Contexts/AllCustomersContext";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import toast from "react-hot-toast";

export default function AllCustomersTable({ customers, fetchAllCustomers }) {

  const [searchTerm , setSearchTerm] = useState() 



  const {
    sort,
    setSort,
    setCustomers,
    selectAll,
    setSelectAll,
    setSelectedCustomers,
    selectedCustomers,
    isLoading,
  } = useContext(AllCustomersContext);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    if (!selectAll) {
      const allCustomersId = customers.map((customer) => customer._id);
      setSelectedCustomers(allCustomersId);
    } else {
      setSelectedCustomers([]);
    }
  };

  const handleSelectCustomer = (customerID) => {
    const updatedSelection = selectedCustomers.includes(customerID)
      ? selectedCustomers.filter((id) => id !== customerID)
      : [...selectedCustomers, customerID];

    setSelectedCustomers(updatedSelection);
  };

  const handleDeleteCustomers = async () => {
    try {
      await axios.delete(
        `http://localhost:8000/api/customers/deleteCustomer`,
        { data: { ids: selectedCustomers } } // Send the IDs array directly
      );
      toast.success("Customer deleted Successfully");
      // Refresh the customer list after deletion
      fetchAllCustomers();
      setSelectAll(false);
      setSelectedCustomers([]);
    } catch (error) {
      toast.error("Error deleting customers:", error);
    }
  };

  const fetchSearched = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/customers/searchCustomer?query=${searchTerm}`
      );

      if (data.length > 0) {
        setCustomers(data);
      } else {
        toast.error("No Results found!!!");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products. Please try again later.");
    } 
  };

  

  return (
    <div className=" bg-white rounded-xl border-[1px] border-[#a09f9fdc] shadow-md my-[10px] mx-7   xm:mx-0 gap-0 justify-normal xm:rounded-md xm:border-[0px] ">
      <div className=" flex justify-between p-[8px]  ">
        <div className="w-full justify-center flex items-center  py-1 px-[8px] rounded-lg bg-[#faf8f8] focus-within:outline focus-within:bg-[#f1f1f1c2]  ">
          <span className="text-[#616161]">
            <IoIosSearch />
          </span>
          <input
            placeholder="Search customers"
            className="w-full outline-none text-[14px] bg-[#faf8f8] text-[#303030] focus-within:bg-[#f1f1f1c2]"
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
        </div>

        <div className="flex  items-center ">
          <button
            className=" bg-black text-[14px] text-white rounded-lg mx-[10px]
          px-[7px] py-[5px]"
          onClick={fetchSearched}
          >
            Search
          </button>

          <OutsideClickHandler onOutsideClick={() => setSort(false)}>
            <button
              onClick={() => {
                setSort(true);
              }}
              className=" relative border-[1px] rounded-md bg-white p-[4px]"
            >
              <LuArrowUpDown />
            </button>
            {sort && (
              <div className=" ">
                <div className="text-[#1a1a1a] flex flex-col gap-1 absolute top-[264px] right-[38px] px-[10px] rounded-lg py-[8px] bg-white text-[14px] xm:right-[10px]">
                  <h1>Sort by</h1>
                  <div className="  flex gap-2 outline-[#000] ">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input
                        className="text-[#1a1a1a] "
                        type="radio"
                        name="radio"
                      ></input>
                      Last update{" "}
                    </label>
                  </div>
                  <div className="flex cursor-pointer gap-2">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input type="radio" value="HTML" name="radio" />
                      Amount spent{" "}
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input type="radio" name="radio" />
                      Total orders{" "}
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input type="radio" name="radio" />
                      Last order date
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input type="radio" name="radio" />
                      First order date{" "}
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input type="radio" name="radio" />
                      Date added as customer{" "}
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <label className="cursor-pointer flex items-center gap-1">
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
          </OutsideClickHandler>
        </div>
      </div>
      <div>
        <div
          className="grid justify-between gap-4 border-t  bg-[#f5f3f3] text-[#686767] px-[10px] py-[8px] text-[13px] font-medium items-center sm:hidden "
          style={{ gridTemplateColumns: "0fr 3fr 3fr 4fr 2fr 2fr" }}
        >
          <div className="">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="rounded "
            />
          </div>

          <div>
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
        <div className={`${selectedCustomers.length > 0 ? "block" : "hidden"}`}>
          <div className="onclick customer option flex gap-[30px] text-[13px] px-3 py-2 xm:gap-1 xm:text-[12px] xm:px-1">
            <div className=" px-[5px] py-[4px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg cursor-pointer">
              <button onClick={handleDeleteCustomers}>Delete customers</button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[420px] overflow-y-auto sm:hidden">
        {isLoading && <Skeleton count={50} />}
        {customers.map((customer, index) => (
          <div key={index}>
            <div
              className="grid justify-between gap-4 border-t border-b bg-white text-[#303030] px-[10px] py-[8px] text-[13px] font-medium items-center hover:bg-[#f5f3f3] cursor-pointer sm:hidden"
              style={{ gridTemplateColumns: "0fr 3fr 3fr 4fr 2fr 2fr" }}
            >
              <div className="">
                <input
                  type="checkbox"
                  className="rounded"
                  checked={selectedCustomers.includes(customer._id)}
                  onChange={() => {
                    handleSelectCustomer(customer._id);
                  }}
                />
              </div>
              <Link to={`/customers/customer-details/${customer._id}`}>
                <div className="hover:underline">
                  <h3>{`${customer.first_name} ${customer.last_name}`}</h3>
                </div>
              </Link>
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
  );
}
