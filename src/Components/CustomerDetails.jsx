import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiChevronDown, FiHash } from "react-icons/fi";
import { MdCurrencyRupee, MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Product2 from "../assets/Product2.jpg";
import { LuClipboard, LuPencil } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { CiAt, CiShop } from "react-icons/ci";
import { GrSquare } from "react-icons/gr";
import OutsideClickHandler from "react-outside-click-handler";
import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Moment from "moment";
import OrderSvg from "./OrderSvg";
import toast from "react-hot-toast";

function CustomerDetails() {
  const { customerID } = useParams();
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const fetchCustomerDetails = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/api/customers/getCustomer/" + customerID
    );
    setCustomer(data.customer);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const [action, setAction] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [ManageAddress, setmanageAddress] = useState(false);
  const [editaddress, seteditaddress] = useState(false);

  const [customerOptions, setCustomerOptions] = useState(false);

  const handleDelete = async (id) => {
    if (
      confirm(
        `Are you sure you want to delete the customer this customer? This can't be undone.`
      )
    ) {
      try {
        await axios.delete(
          `http://localhost:8000/api/customers/deleteCustomer`,
          { data: { ids: [id] } }
        );
        toast.success("Customer deleted Successfully");
        navigate("/customers");
      } catch (error) {
        toast.error("Error deleting customers:", error);
      }
    }
  };

  return (
    <div className="bg-[#F1F1F1] w-full h-[100%] :px-[100px] md:px[10px]">
      <div className="w-[75%] ml-auto mr-auto sm:w-full">
        <div className="flex my-6 items-center justify-between px-7 py-1 sm:px-6 xm:px-2 ">
          <div className="px-2">
            <Link className="p-3" to="/customers">
              <FaArrowLeftLong size={20} />
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-2 xm:">
              <h3 className="text-[20px] text-[#000000] w-full font-[700] xm:text-sm">
                {isLoading ? (
                  <Skeleton />
                ) : (
                  customer.first_name &&
                  (customer.last_name
                    ? `${customer.first_name} ${customer.last_name}`
                    : customer.first_name)
                )}
              </h3>
            </div>
            <div className="flex items-center text-[#616161] text-[12px]">
              <span className="flex gap-2">
                {customer?.default_address && (
                  <>
                    {customer.default_address.city && (
                      <>
                        {customer.default_address.city},
                        {customer.default_address.province &&
                          `${customer.default_address.province}, `}
                        {customer.default_address.country}
                      </>
                    )}
                    {!customer.default_address.city &&
                      customer.default_address.province && (
                        <>
                          {customer.default_address.province},{" "}
                          {customer.default_address.country}
                        </>
                      )}
                    {!customer.default_address.city &&
                      !customer.default_address.province &&
                      customer.default_address.country}
                    <span className="font-extrabold">·</span>
                  </>
                )}
                Customer for about {Moment(customer.created_at).fromNow(true)}
              </span>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="relative">
              <OutsideClickHandler onOutsideClick={() => setAction(false)}>
                <button
                  onClick={() => setAction(true)}
                  className="flex text-heading items-center px-[12px] py-[3px] gap-1 border-[1px] w-[122px]  bg-[#E3E3E3] hover:bg-#e5e5e5 rounded-lg shadow-common active:shadow-active"
                >
                  <span className="text-[#080808]">More action</span>
                  <span className="text-[17px]">
                    <FiChevronDown />
                  </span>
                </button>
                {action && (
                  <div
                    className="z-10 flex flex-col gap-2 absolute right-0 w-48
  top-8 text-[13px] text-[#303030] bg-white items-start py-[10px] px-[10px] rounded-lg shadow-md"
                  >
                    <button className="text-left w-full  py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                      Send account invite
                    </button>
                    <button className="text-left w-full py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                      Merge customer
                    </button>
                    <button className="text-left w-full py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                      Request customer data
                    </button>
                    <button className="text-left w-full py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                      Erase personal data
                    </button>
                    <button
                      onClick={() => handleDelete(customer._id)}
                      className="text-left w-full py-[5px] px-[6px] text-[#8e1f0b] rounded-lg hover:bg-[#fee2e1]"
                    >
                      Delete customer
                    </button>
                  </div>
                )}
              </OutsideClickHandler>
            </div>
          </div>
        </div>

        <div className=" flex  my-6  px-7 py-1 sm:px-6 xm:px-2 gap-4 xl:flex-wrap">
          <div className="w-[70%] xl:w-[100%] ">
            {isLoading ? (
              <div className="flex p-1 border-[1px] items-center justify-between bg-white	 shadow-md rounded-[8px]">
                <Skeleton height={150} containerClassName="flex-1" />
              </div>
            ) : customer.orders_count === 0 ? (
              <div className="flex px-20 xm:px-2 py-4 border-[1px] items-center justify-between bg-white	 shadow-md rounded-[8px]">
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-semibold">Last order placed</div>
                  <div className="text-xs">
                    This customer hasn’t placed any orders yet
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        navigate(
                          `/orders/create-order?customer=${customer._id}`
                        )
                      }
                      className="text-heading font-[550] p-1 border rounded-lg shadow-common text-heading-color active:shadow-active active:bg-[#f7f7f7]"
                    >
                      Create order
                    </button>
                  </div>
                </div>
                <div>
                  <OrderSvg />
                </div>
              </div>
            ) : (
              <div className="flex border-[1px] items-center justify-start  bg-white py-[15px]	 shadow-md rounded-[8px]">
                <div className="flex gap-2 items-center px-10  text-[#616161]">
                  <span>
                    <CiShop />
                  </span>
                  <span className="text-[13px]">All time</span>
                </div>

                <div className="flex px-[40px] xm:px-[0px] justify-between xm:gap-5">
                  <div className=" flex flex-col gap-1 items-center border-l px-[10px] ">
                    <span className="text-[#616161] text-[13px] border-b-[2px] border-dotted  ">
                      Amount spent
                    </span>
                    <div className="flex items-center text-[14px] font-semibold ">
                      <span className="flex items-center">
                        <MdCurrencyRupee />
                        {customer.total_spent}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-center  border-l px-[10px] ">
                    <span className="text-[#616161] text-[13px] border-b-[2px] border-dotted  ">
                      Order
                    </span>
                    <span className="text-[14px] font-semibold ">
                      {customer.orders_count}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className=" border-[1px] my-[15px] px-[10px]  bg-white py-[15px]	 shadow-md rounded-[8px]">
              <h2 className="text-[14px] font-semibold text-[#303030]">
                Last order placed
              </h2>
              <div className="border-[1px] rounded-[8px] my-[8px] py-[20px]">
                <div className="flex justify-between px-[10px] ">
                  <div className="flex items-start flex-wrap gap-2">
                    <Link to="/orders/order-details">
                      <h2 className="text-[0.8125rem] hover:underline cursor-pointer	 text-[#004299] font-semibold ">
                        #41678
                      </h2>
                    </Link>
                    <div className="flex gap-1 items-center text-[12px] text-[#5e4200] bg-[#ffd6a4] px-[5px] py-[2px] rounded-lg">
                      <span>
                        <IoCheckbox />
                      </span>
                      <span>Paid</span>
                    </div>
                    <div className="flex gap-1 items-center text-[12px] text-[#5e4200] bg-[#ffd6a4] px-[5px] py-[2px] rounded-lg">
                      <span>
                        <MdCheckBoxOutlineBlank />
                      </span>
                      <span>Payment pending</span>
                    </div>
                    <div className="flex gap-1 items-center px-[5px] py-[2px] rounded-lg text-[12px] bg-[#ffeb78] text-[#4f4700] ">
                      <span>
                        <MdCheckBoxOutlineBlank />
                      </span>
                      <span> Unfulfilled</span>
                    </div>
                  </div>
                  <div className="flex items-center text-[14px] font-semibold ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>{" "}
                    <span>.00</span>
                  </div>
                </div>

                <div className=" text-[#616161] text-[13px] pt-[5px] pb-[15px] px-[10px] ">
                  <h2>23 February 2024 at 10:02 am from Online Store</h2>
                </div>
                <hr />

                <div className="flex justify-between items-start px-[10px] pt-[15px]">
                  <div className="flex items-center gap-[10px]">
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
                    </div>
                  </div>

                  <div className="flex items-center  gap-6">
                    <div className="text-[13px] xm:hidden">x1</div>

                    <div className="flex items-center text-[14px] font-semibold ">
                      <span className="flex items-center">
                        <MdCurrencyRupee />
                        649
                      </span>{" "}
                      <span>.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-end gap-2">
                <div className="">
                  <Link to="/">
                    <button className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[#303030] font-semibold">
                      View all orders
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <button className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[white] font-semibold bg-black">
                      Create order
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="text-[14px] font-semibold text-[#303030] py-1">
                Timeline
              </h3>
              <div className=" border-[1px]  bg-white pt-[15px]	 shadow-md rounded-[8px]">
                <div className=" flex items-center px-[10px]  ">
                  <div className="w-[45px] h-[45px] ">
                    <img className="rounded-lg" src={Product2} />
                  </div>

                  <div className="w-full outline-none mx-[8px]">
                    <input
                      className="w-full outline-none text-[14px] "
                      type="text"
                      placeholder="Leave a comment...."
                    />
                  </div>
                </div>

                <div className="flex flex-wrap justify-between bg-[#f7f7f7] px-4 py-5  rounded-b-[8px]">
                  <div className="flex items-center gap-3 text-[16px] text-[#303030]">
                    <div className="">
                      <button className="text-[#696666]">
                        <BsEmojiSmile />
                      </button>
                    </div>
                    <div>
                      <button className="text-[#696666]">
                        <CiAt />
                      </button>
                    </div>
                    <div>
                      <button className="text-[#696666]">
                        <FiHash />
                      </button>
                    </div>
                    <input className="text-[14px] w-full" type="file"></input>
                  </div>
                  <div>
                    <button className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[#303030] font-semibold">
                      Post
                    </button>
                  </div>
                </div>
                <h2 className="text-[#616161] text-[13px] float-right p-[2px] font-medium">
                  Only you and other staff can see comments
                </h2>
              </div>

              <div className="border-l-[2.5px] relative  max-h-[800px] ml-10  border-[#a5a4a4] top-0">
                <div className=" flex flex-col gap-6 py-[40px] ">
                  <div className="flex flex-col">
                    <h3 className="px-[20px] text-[#616161] text-[13px]">
                      Yesterday
                    </h3>
                    <div className="flex items-center px-[20px] py-[10px]   ">
                      <span className="absolute left-[-10px] text-[#747373]">
                        <GrSquare />
                      </span>
                      <div className="flex gap-[30px]">
                        <h3 className="text-[#303030] text-[13px]">
                          Order Confirmation email for order{" "}
                          <Link>
                            <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                              #42544
                            </button>
                          </Link>{" "}
                          sent to this customer (Aroramonica4@gmail.com).
                        </h3>
                        <span className="flex  text-[#303030] text-[14px]">
                          5.00pm
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="px-[20px] text-[#616161] text-[13px]">
                      Yesterday
                    </h3>
                    <div className="flex items-center px-[20px] py-[10px]   ">
                      <span className="absolute left-[-10px] text-[#747373]">
                        <GrSquare />
                      </span>
                      <div className="flex gap-[30px]">
                        <h3 className="text-[#303030] text-[13px]">
                          Order Confirmation email for order{" "}
                          <Link>
                            <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                              #42544
                            </button>
                          </Link>{" "}
                          sent to this customer (Aroramonica4@gmail.com).
                        </h3>
                        <span className="flex  text-[#303030] text-[14px]">
                          5.22 pm
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="px-[20px] text-[#616161] text-[13px]">
                      Yesterday
                    </h3>
                    <div className="flex items-center px-[20px] py-[10px]   ">
                      <span className="absolute left-[-10px] text-[#747373]">
                        <GrSquare />
                      </span>
                      <div className="flex gap-[30px]">
                        <h3 className="text-[#303030] text-[13px]">
                          Order Confirmation email for order{" "}
                          <Link>
                            <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                              #42544
                            </button>
                          </Link>{" "}
                          sent to this customer (Aroramonica4@gmail.com).
                        </h3>
                        <span className="flex  text-[#303030] text-[14px]">
                          5.22 pm
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="px-[20px] text-[#616161] text-[13px]">
                      Yesterday
                    </h3>
                    <div className="flex items-center px-[20px] py-[10px]   ">
                      <span className="absolute left-[-10px] text-[#747373]">
                        <GrSquare />
                      </span>
                      <div className="flex gap-[30px]">
                        <h3 className="text-[#303030] text-[13px]">
                          Order Confirmation email for order{" "}
                          <Link>
                            <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                              #42544
                            </button>
                          </Link>{" "}
                          sent to this customer (Aroramonica4@gmail.com).
                        </h3>
                        <span className="flex  text-[#303030] text-[14px]">
                          5.22 pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%] xl:w-[100%]  flex flex-col gap-[15px]">
            <div className="    border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
              <div className="flex justify-between  items-center ">
                <h3 className="text-[13px] font-semibold">Customer</h3>
                <OutsideClickHandler
                  onOutsideClick={() => setCustomerOptions(false)}
                >
                  <div
                    className="relative"
                    onClick={() => setCustomerOptions(true)}
                  >
                    <div className="  cursor-pointer py-1 px-[6px] transition ease-in-out rounded-md hover:bg-[#d8d8d8]">
                      <span className="">
                        <BsThreeDotsVertical />
                      </span>
                    </div>
                    {customerOptions && (
                      <div className=" border-[1px]  w-[220px] z-10 flex flex-col gap-2 absolute right-[0px] top-[38px] text-[13px] text-[#303030] bg-white items-start py-[10px] px-[10px] rounded-lg ">
                        <button className=" py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                          Edit contact information
                        </button>
                        <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                          Manage addresses{" "}
                        </button>
                        <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                          Edit marketing settings
                        </button>
                        <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                          Manage tax exemptions
                        </button>
                      </div>
                    )}
                  </div>
                </OutsideClickHandler>
              </div>
              <h2 className="text-[13px] font-semibold py-[8px]">
                Contact information
              </h2>
              {customer.email ? (
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <span className="text-[#005bd3] text-[13px] hover:underline">
                      {isLoading ? (
                        <Skeleton containerClassName="flex-1" />
                      ) : (
                        customer.email
                      )}
                    </span>
                  </div>
                </div>
                {customer && (
                  <div className=" border-[1px]  w-[220px] z-10 flex flex-col gap-2 absolute right-[0px] top-[38px] text-[13px] text-[#303030] bg-white items-start py-[10px] px-[10px] rounded-lg ">
                    <div>
                      <button
                        onClick={() => setEditContact(!editContact)}
                        className=" py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg"
                      >
                        Edit contact information
                      </button>

                      {editContact && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm ">
                          <div className="rounded-xl my-4 bg-white   w-[45%] shadow-md   sm:w-[80%]">
                            <div className="flex items-center  px-3 py-2 bg-[#f3f3f3] rounded-t-xl justify-between">
                              <div>
                                <h2 className="cursor-pointer text-[#303030] text-[14px] font-semibold ">
                                  Edit customer
                                </h2>
                              </div>
                              <div>
                                <div
                                  onClick={() => setEditContact(!editContact)}
                                  className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[20px] cursor-pointer"
                                >
                                  <IoIosClose />
                                </div>
                              </div>
                            </div>

                            <hr />
                            <div className="flex gap-2">
                              <div>
                                <div className="px-4 pt-4">
                                  <h2 className="text-heading text-heading-color font-[450]">
                                    First name
                                  </h2>
                                </div>
                                <div className="p-4 pt-2 ">
                                  <input
                                    placeholder="First Name"
                                    type="text"
                                    name="first_name"
                                    className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>
                              <div className="">
                                <div className="px-4 pt-4">
                                  <h2 className="text-heading text-heading-color font-[450]">
                                    Last Name
                                  </h2>
                                </div>
                                <div className="p-4 pt-2 ">
                                  <input
                                    placeholder="Last Name"
                                    type="text"
                                    name="Last_name"
                                    className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="px-4 ">
                                <h2 className="text-heading text-heading-color font-[450]">
                                  Email
                                </h2>
                              </div>
                              <div className="p-4 pt-2">
                                <input
                                  placeholder="Email"
                                  type="email"
                                  name="email"
                                  className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                />
                              </div>
                            </div>

                            <div>
                              <div className="px-4 ">
                                <h2 className="text-heading text-heading-color font-[450]">
                                  Phone number
                                </h2>
                              </div>
                              <div className="p-4 pt-2">
                                <input
                                  placeholder="Phone Number"
                                  type="text"
                                  name="phone"
                                  className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                />
                              </div>
                            </div>

                            <hr />

                            <div className="flex  justify-end  px-3 py-4 gap-2 rounded-b-xl ">
                              <button
                                onClick={() => setEditContact(!editContact)}
                                className=" text-[black] rounded-lg border  px-3 py-1  text-[12px]"
                              >
                                Cancel
                              </button>

                              <button
                                className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                                type="Save"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => setmanageAddress(!ManageAddress)}
                        className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg"
                      >
                        Manage addresses
                      </button>

                      {ManageAddress && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen  flex  items-center justify-center backdrop-blur-sm ">
                          <div className="rounded-xl relative my-4 bg-white   w-[45%] shadow-md   sm:w-[80%]">
                            <div className="flex items-center  px-3 py-2 bg-[#f3f3f3] rounded-t-xl justify-between">
                              <div>
                                <h2 className="cursor-pointer text-[#303030] text-[14px] font-semibold ">
                                  Manage addresses
                                </h2>
                              </div>
                              <div>
                                <button
                                  className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[20px] cursor-pointer"
                                  onClick={() =>
                                    setmanageAddress(!ManageAddress)
                                  }
                                >
                                  <IoIosClose />
                                </button>
                              </div>
                            </div>
                            <hr />
                            <div className="px-3 py-2">
                              <span className="text-heading-color absolute rounded-lg left-[37px] top-[70px] px-[8px] py-[2px] bg-[#e3e3e3]  ">
                                Default
                              </span>

                              <div className="flex  justify-between items-start border-[1px] rounded-lg my-[20px] bg-[#f7f7f7]">
                                <div className="py-[25px]  text-[13px] font-[450] px-[12px]">
                                  <h3>Saddam Hussain</h3>
                                  <h3>Osman Bagh kamatipura PS bahadurpura</h3>
                                  <h3>500064 HYDERABAD Telangana</h3>
                                  <h3>India</h3>
                                  <h3>9866999061</h3>
                                </div>
                                <div className="py-[30px] px-[12px] ">
                                  <div>
                                    <button
                                      onClick={() =>
                                        seteditaddress(!editaddress)
                                      }
                                      className="cursor-pointer py-1 px-[6px] transition ease-in-out rounded-md hover:bg-[#d8d8d8]"
                                    >
                                      <LuPencil />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <hr />

                              <div className="text-end py-[10px]">
                                <button
                                  onClick={() => seteditaddress(!editaddress)}
                                  className="text-[black] rounded-lg border  px-3 py-1  text-[12px]"
                                >
                                  Add new address
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {editaddress && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen  flex  items-center justify-center backdrop-blur-sm ">
                          <div className=" h-[80%]  overflow-y-auto relative my-4 bg-white   w-[45%] shadow-md   sm:w-[80%]">
                            <div className="flex items-center h-[400] px-3 py-2 bg-[#f3f3f3] rounded-t-xl justify-between">
                              <div>
                                <h2 className="cursor-pointer text-[#303030] text-[14px] font-semibold ">
                                  Edit address
                                </h2>
                              </div>
                              <div>
                                <button
                                  className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[20px] cursor-pointer"
                                  onClick={() => {
                                    setmanageAddress(false);
                                    seteditaddress(!editaddress);
                                  }}
                                >
                                  <IoIosClose />
                                </button>
                              </div>
                            </div>
                            <hr />
                            <div>
                              <div className="flex gap-2">
                                <div>
                                  <div className="px-4 pt-4">
                                    <h2 className="text-heading text-heading-color font-[450]">
                                      First name
                                    </h2>
                                  </div>
                                  <div className="p-4 pt-2 ">
                                    <input
                                      placeholder="First Name"
                                      type="text"
                                      name="first_name"
                                      className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                    />
                                  </div>
                                </div>
                                <div className="">
                                  <div className="px-4 pt-4">
                                    <h2 className="text-heading text-heading-color font-[450]">
                                      Last Name
                                    </h2>
                                  </div>
                                  <div className="p-4 pt-2 ">
                                    <input
                                      placeholder="Last Name"
                                      type="text"
                                      name="Last_name"
                                      className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="px-4 ">
                                  <h2 className="text-heading text-heading-color font-[450]">
                                    Company
                                  </h2>
                                </div>
                                <div className="p-4 pt-2">
                                  <input
                                    placeholder="Company"
                                    type="text"
                                    name="company"
                                    className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>

                              <div>
                                <div className="px-4 ">
                                  <h2 className="text-heading text-heading-color font-semibold">
                                    Address
                                  </h2>
                                </div>
                                <div className="p-4 pt-2">
                                  <div className="flex items-center rounded-[0.5rem]  border-[#8a8a8a] border-[0.04125rem] ">
                                    <span className=" text-[#8a8a8a] pl-[8px]">
                                      {/* You can replace this with your desired icon */}
                                      <IoSearch />
                                    </span>
                                    <input
                                      placeholder="Address"
                                      type="text"
                                      name="address1"
                                      className="py-[6px]   mx-3 w-full text-heading outline-none"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="px-4 ">
                                  <h2 className="text-heading text-heading-color font-[450]">
                                    Apartment, suite, etc.
                                  </h2>
                                </div>
                                <div className="p-4 pt-2">
                                  <input
                                    placeholder="Apartment, suite, etc."
                                    type="text"
                                    name="address2"
                                    className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>

                              <div className="flex items-center sm:block ">
                                <div>
                                  <div className="px-4 pt-3">
                                    <h2 className="text-heading text-heading-color font-[450]">
                                      City
                                    </h2>
                                  </div>
                                  <div className="p-4 pt-2">
                                    <input
                                      placeholder="City"
                                      type="text"
                                      name="city"
                                      className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                    />
                                  </div>
                                </div>

                                <select
                                  className="w-[48%] mt-[24px] bg-white text-heading border-[#8a8a8a] border rounded-[0.5rem] py-[8px] pl-[12px] mx-4  pr-[8px] sm:w-[95%] xm:w-[92%] "
                                  name="province"
                                >
                                  <option disabled>Select a state</option>
                                  <option value="Andaman and Nicobar Islands">
                                    Andaman and Nicobar Islands
                                  </option>
                                  <option value="Andhra Pradesh">
                                    Andhra Pradesh
                                  </option>
                                  <option value="Arunachal Pradesh">
                                    Arunachal Pradesh{" "}
                                  </option>
                                  <option value="Assam ">Assam </option>
                                  <option value="Bihar">Bihar </option>
                                  <option value="Chandigarh">
                                    Chandigarh{" "}
                                  </option>
                                  <option value="Chhattisgarh ">
                                    Chhattisgarh{" "}
                                  </option>
                                  <option value="Dadra and Nagar Haveli">
                                    Dadra and Nagar Haveli
                                  </option>
                                  <option value="Daman and Diu">
                                    Daman and Diu{" "}
                                  </option>
                                  <option value="Delhi">Delhi </option>
                                  <option value="Goa">Goa </option>
                                  <option value="Gujarat">Gujarat </option>
                                  <option value="Haryana">Haryana </option>
                                  <option value="Himachal Pradesh ">
                                    Himachal Pradesh{" "}
                                  </option>
                                  <option value="Jammu and Kashmir">
                                    Jammu and Kashmir{" "}
                                  </option>
                                  <option value="Jharkhand">Jharkhand </option>
                                  <option value="Karnataka">Karnataka </option>
                                  <option value="Kerala ">Kerala </option>
                                  <option value="Ladakh ">Ladakh </option>
                                  <option value="Lakshadweep">
                                    Lakshadweep{" "}
                                  </option>
                                  <option value="Madhya Pradesh ">
                                    Madhya Pradesh{" "}
                                  </option>
                                  <option value="Maharashtra">
                                    Maharashtra{" "}
                                  </option>
                                  <option value="Manipur">Manipur </option>
                                  <option value="Meghalaya">Meghalaya </option>
                                  <option value="Mizoram">Mizoram </option>
                                  <option value="Mizoram">Mizoram </option>
                                  <option value="Odisha">Odisha </option>
                                  <option value="Puducherry">
                                    Puducherry{" "}
                                  </option>
                                  <option value="Punjab">Punjab </option>
                                  <option value="Rajasthan">Rajasthan </option>
                                  <option value="Sikkim">Sikkim </option>
                                  <option value="Tamil Nadu">
                                    Tamil Nadu{" "}
                                  </option>
                                  <option value="Telangana">Telangana </option>
                                  <option value="Tripura">Tripura </option>
                                  <option value="Uttar Pradesh">
                                    Uttar Pradesh{" "}
                                  </option>
                                  <option value="Uttarakhand">
                                    Uttarakhand{" "}
                                  </option>
                                  <option value="West Bengal ">
                                    West Bengal{" "}
                                  </option>
                                </select>
                              </div>

                              <div>
                                <div className="px-4 ">
                                  <h2 className="text-heading text-heading-color font-[450]">
                                    PIN code
                                  </h2>
                                </div>
                                <div className="p-4 pt-2">
                                  <input
                                    placeholder="PIN code"
                                    type="number"
                                    name="zip"
                                    className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>

                              <div>
                                <div className="px-4 ">
                                  <h2 className="text-heading text-heading-color font-[450]">
                                    Phone number
                                  </h2>
                                </div>
                                <div className="p-4 pt-2">
                                  <input
                                    placeholder="Phone Number"
                                    type="text"
                                    name="phone"
                                    className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>

                              <hr />

                              <div className="flex  justify-end  px-3 py-4 gap-2 rounded-b-xl ">
                                <button
                                  onClick={() => {
                                    setmanageAddress(false);
                                    seteditaddress(!editaddress);
                                  }}
                                  className=" text-[black] rounded-lg border  px-3 py-1  text-[12px]"
                                >
                                  Cancel
                                </button>

                                <button
                                  className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                                  type="Save"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                      Edit marketing settings
                    </button>
                    <button className="py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                      Manage tax exemptions
                    </button>
                  </div>
                </div>
              ) : (
                <h3 className="text-[13px]">No email address provided</h3>
              )}

              <div className="text-[13px]">
                {isLoading ? (
                  <Skeleton />
                ) : (
                  customer.phone && (
                    <span className="py-[2px]">{customer.phone}</span>
                  )
                )}
                <h3 className="py-[2px]">
                  Will receive notifications in English
                </h3>
              </div>

              <div className="py-[8px]">
                <h3 className="text-[13px] font-semibold">Default address</h3>
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <div className="text-[13px] py-[8px] flex flex-col gap-[2px]">
                    {customer.default_address ? (
                      <>
                        <h2>{`${customer.default_address.first_name} ${customer.default_address.last_name}`}</h2>
                        <h2>{`${
                          customer.default_address.address1
                            ? `${customer.default_address.address1}, `
                            : ""
                        }${customer.default_address.address2 ?? ""}`}</h2>
                        <h2>{`${customer.default_address.city ?? ""} ${
                          customer.default_address.province ?? ""
                        } ${customer.default_address.zip ?? ""}`}</h2>
                        {customer.default_address.country && (
                          <h2>{customer.default_address.country}</h2>
                        )}
                      </>
                    ) : (
                      <h2>No address provided</h2>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[13px] font-semibold">Tax exemptions</h3>
                <h3 className="text-[13px] text-[#616161]">No exemptions</h3>
              </div>
            </div>
            <div className=" xl:w-[100%]  border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-[13px] font-semibold ">Tags</h3>
                  <span className="text-[#616161] cursor-pointer font-semibold">
                    <LuPencil />
                  </span>
                </div>
                <div className="w-full py-2  ">
                  <input
                    type="input"
                    className="w-full border-[1px] border-[#303030] px-[8px] py-[2px] rounded-lg "
                  />
                </div>
              </div>
            </div>

            <div className=" xl:w-[100%]  border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-[13px] font-semibold ">Notes</h3>
                  <span className="text-[#616161] cursor-pointer font-semibold">
                    <LuPencil />
                  </span>
                </div>
                <div>
                  <h3 className="text-[13px] text-[#616161]">No notes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
