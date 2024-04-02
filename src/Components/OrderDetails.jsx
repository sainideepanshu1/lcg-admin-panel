import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuClipboard } from "react-icons/lu";
import { BiIntersect } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import { FiHash } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import Product2 from "../assets/Product2.jpg";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { BsFillBoxFill } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import { IoEyeSharp } from "react-icons/io5";
import { TfiPanel } from "react-icons/tfi";
import { GrSquare } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";

function OrderDetails() {
  const [payment, setpayment] = useState();
  const [data, setdata] = useState("");

  function paymenthandle() {
    setpayment(!payment);
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  const [action, setaction] = useState();
  const actionref = useRef();

  const [toggle, setToggle] = useState(false);
  const imexRef = useRef(null);

  const [hold, setHold] = useState();
  const holdref = useRef();

  // -----------hold fulfilled------

  const holdclick = (event) => {
    if (holdref.current && !holdref.current.contains(event.target)) {
      setHold(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", holdclick);
    return () => document.removeEventListener("click", holdclick);
  }, []);

  //-----------------------

  const handleClickOutside = (event) => {
    if (imexRef.current && !imexRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleaction = (event) => {
    if (actionref.current && !actionref.current.contains(event.target)) {
      setaction(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleaction);

    return () => {
      document.removeEventListener("click", handleaction);
    };
  }, []);

  return (
    <div className="bg-[#F1F1F1] w-full h-[100%]  md:px[10px]">
      <div className="flex my-6 items-start justify-between px-7 py-1 sm:px-6 xm:px-2 ">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <Link>
                <FaArrowLeftLong />
              </Link>
              <h3 className="text-[20px] text-[#000000] font-[700]">#42644</h3>{" "}
            </div>
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
          <div className="flex items-center text-[#616161] text-[12px]">
            <span>
              Chainpur , Bandipur UP, India . Customer for about 2 hours
            </span>
          </div>
        </div>

        <div>
          <div className="flex  gap-2 sm:hidden">
            <Link to="/orders/order-details/restock">
              <button className="flex text-heading items-center px-[12px] py-[3px] gap-1   bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg">
                Restock
              </button>
            </Link>
            <Link to="/orders/order-details/edit-order">
              <button className="flex text-heading items-center px-[12px] py-[3px] gap-1   bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg">
                Edit
              </button>
            </Link>

            <button
              ref={actionref}
              onClick={() => {
                setaction(!action);
              }}
              className="relative flex text-heading items-center px-[12px] py-[3px] gap-1  w-[122px]  bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg "
            >
              <span className="text-[#080808]">More action</span>
              <span className="text-[17px]">
                <FiChevronDown />
              </span>
            </button>
            {action && (
              <div
                className=" z-10 w-[200px] flex flex-col gap-2 absolute right-[28px]
  top-[130px] text-[13px] text-[#303030] bg-white items-start py-[6px] px-[10px] rounded-lg "
              >
                <button className=" flex w-full gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]   rounded-lg">
                  <span className="text-[18px]">
                    <BiIntersect />
                  </span>
                  <span className="">Duplicate</span>
                </button>
                <button className="  flex  w-full  gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <MdOutlineCancel />
                  </span>
                  <span>Cancel order</span>
                </button>
                <button className=" flex  w-full  gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <BsArchive />
                  </span>
                  <span>Archive</span>
                </button>
                <button className=" flex  w-full  gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiPrinter />
                  </span>
                  <span>Print order page</span>
                </button>
                <button className="  flex  w-full  gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiPrinter />
                  </span>
                  <span>Print packing slips</span>
                </button>

                <button className="  flex  w-full  gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                  <span className="text-[18px]">
                    <FiEye />
                  </span>
                  <span>Print packing slips</span>
                </button>
              </div>
            )}
          </div>

          <div
            className=" cursor-pointer hidden sm:block bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] rounded-lg px-3 py-[10px] text-heading z-11"
            ref={imexRef}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <BsThreeDots />
            {toggle && (
              <div className="">
                <div
                  className=" z-10 w-[200px] flex flex-col gap-2 absolute right-[28px]
  top-[130px] text-[13px] text-[#303030] bg-white items-start py-[6px] px-[10px] rounded-lg "
                >
                  <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                    <span>Restock</span>
                  </button>
                  <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3] rounded-lg">
                    <span>Edit</span>
                  </button>

                  <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]   rounded-lg">
                    <span className="text-[18px]">
                      <BiIntersect />
                    </span>
                    <span className="">Duplicate</span>
                  </button>
                  <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                    <span className="text-[18px]">
                      <MdOutlineCancel />
                    </span>
                    <span>Cancel order</span>
                  </button>
                  <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                    <span className="text-[18px]">
                      <BsArchive />
                    </span>
                    <span>Archive</span>
                  </button>
                  <button className=" flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                    <span className="text-[18px]">
                      <FiPrinter />
                    </span>
                    <span>Print order page</span>
                  </button>
                  <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                    <span className="text-[18px]">
                      <FiPrinter />
                    </span>
                    <span>Print packing slips</span>
                  </button>

                  <button className="  flex gap-2 items-center text-[13px] py-[5px] px-[6px] hover:bg-[#E3E3E3]  rounded-lg">
                    <span className="text-[18px]">
                      <FiEye />
                    </span>
                    <span>Print packing slips</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-4  xl:flex-wrap  my-6  px-7 py-1 sm:px-6 xm:px-2  ">
        <div className=" flex flex-col gap-3 h-full   w-[70%] xl:w-[100%] ">
          <div className=" border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]">
            <div className="flex">
              <div className="flex relative w-full justify-between items-center px-[10px] py-2">
                <div className="flex relative gap-1 items-center px-[8px] py-[6px] rounded-lg text-[13px] bg-[#ffeb78] text-[#4f4700] ">
                  <span className="text-[16px] ">
                    <HiOutlineArchiveBoxXMark />
                  </span>{" "}
                  <span>Unfulfilled</span>
                </div>

                <div className="cursor-pointer ">
                  <button
                    onClick={() => setHold(!hold)}
                    className="text-[#616161]"
                  >
                    <BsThreeDots />
                  </button>
                  {hold && (
                    <div className="absolute  right-[5px] bg-white border-[1px] px-[14px] py-[8px] rounded-lg ">
                      <button className="text-[13px]">Hold Fulfilled</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="border-[1px]  py-[10px]  mx-[10px] rounded-lg  ">
              <div className="px-[8px]">
                <h3 className="text-[#616161] text-[13px]">Location</h3>
                <h3 className="text-[13.5px]">DSS 56 OLD Court Complex</h3>
              </div>

              <hr />

              <div className="flex justify-between items-start px-[18px] pt-[15px]">
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
                <div className="flex gap-3 text-[13px] xm:hidden">
                  <div className="flex items-center">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                  <h3>X 1</h3>
                </div>

                <div className="flex ">
                  <div className="flex items-center text-[14px] font-semibold ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-2 text-[#616161] text-[13px] px-[68px] font-medium py-2 ">
                <h3>SKU: LCG-PL-GPLV-BR-0005</h3>
                <div className="flex xm:flex-wrap">
                  <h4>Enter Name for panda lamp (No emoji):</h4>
                  <h4>Srujana </h4>
                </div>
              </div>
            </div>
            <div className="float-right py-2 px-3">
              <button className="text-[13px] border-[1px] px-[10px] py-[6px] rounded-lg text-[white] font-semibold bg-black">
                Fulfill item{" "}
              </button>
            </div>
          </div>

          <div className=" border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]">
            <div className="flex">
              <div className="flex relative w-full justify-between items-center px-[10px] py-2">
                <div className="flex gap-1 items-center text-[12px] text-[#5e4200] bg-[#ffd6a4] px-[8px] py-[6px] rounded-lg">
                  <span className="text-[16px] ">
                    <FaRegClock />
                  </span>{" "}
                  <span>Payment pending</span>
                </div>

                <div className="cursor-pointer ">
                  <button onClick={paymenthandle} className="text-[#616161]">
                    <BsThreeDots />
                  </button>
                  {payment && (
                    <OutsideClickHandler onOutsideClick={handleClose}>
                      <div>
                        <div className="absolute  right-[5px] bg-white border-[1px] px-[14px] py-[8px] rounded-lg ">
                          <button className="text-[13px]">
                            Add payment terms
                          </button>
                        </div>
                      </div>
                    </OutsideClickHandler>
                  )}

                  {/* className={`${payment?"block":"hidden"}` }*/}
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-2 border-[1px] py-[10px] mx-[10px] rounded-lg">
              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px]">Subtotal</h3>
                <h3 className="text-[13px]"> 1 item</h3>
                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      649
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px]">Shipping</h3>
                <h3 className="text-[13px] px-[10px]">
                  Cash on delivery (0.3 kg: Items 0.3 kg, Package 0.0 kg)
                </h3>
                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      100
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px] font-semibold">Total</h3>

                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />
                      100
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>
              <hr></hr>

              <div className="flex justify-between px-[8px]">
                <h3 className="text-[13px] ">Paid</h3>

                <div className=" ">
                  <div className="flex items-center text-[14px] font-medium">
                    <span className="flex items-center">
                      <MdCurrencyRupee />0
                    </span>
                    <span>.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[#5e4200] bg-[#fae2e1] rounded-lg mx-[10px] p-[10px]">
                <div className="flex gap-2 items-center">
                  <span className="text-[14px]">
                    <FiAlertTriangle />
                  </span>
                  <h3>Balance</h3>
                </div>

                <div className="flex items-center text-[14px] font-medium">
                  <span className="flex items-center">
                    <MdCurrencyRupee />
                    100
                  </span>
                  <span>.00</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end py-2 px-3">
              <button className="text-[13px] border-[1px] px-[10px] py-[6px] rounded-lg  font-semibold">
                Send invoice
              </button>
              <button className="text-[13px] border-[1px] px-[10px] py-[6px] rounded-lg text-[white] font-semibold bg-black">
                Fulfill item
              </button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4 w-[30%] xl:w-[100%]">
          <div className=" xl:w-[100%]  border-[1px bg-white py-[15px] px-[15px]	 shadow-md rounded-[8px]">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-[13px] font-semibold ">Notes</h3>
                <span className="text-[#616161] cursor-pointer font-semibold">
                  <LuPencil />
                </span>
              </div>
              <div className="py-[10px]">
                <h3 className="text-[13px] text-[#616161]">No notes</h3>
              </div>
            </div>
          </div>

          <div className="">
            <div className="    border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
              <div className="">
                <div className="flex justify-between  items-center ">
                  <h3 className="text-[13px] font-semibold">Customer</h3>
                  <div className="relative">
                    <div className="  cursor-pointer ">
                      <span className="text-[#616161] ">
                        <IoClose />
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[#005bd3] text-[13px] hover:underline">
                    Hrishikesh Das{" "}
                  </span>
                  <h3 className="text-[13px] h">1 order</h3>
                </div>
              </div>

              <div className=" flex justify-between items-center">
                <h2 className="text-[13px]  font-semibold pt-[8px]">
                  Contact information
                </h2>
                <span className="text-[#616161] ">
                  <LuPencil />
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[#005bd3]  hover:underline text-[13px]">
                    Gauravsaini@gmail.com
                  </span>
                </div>
                <div>
                  <span className="text-[#616161] font-semibold cursor-pointer">
                    <LuClipboard />
                  </span>
                </div>
              </div>
              <div className="text-[13px]">
                <h3 className="text-[13px]">No email address provided</h3>
                <span className="py-[2px]">+91 82787 57344</span>
                <h3 className="py-[2px]">
                  Will receive notifications in English
                </h3>
              </div>

              <div className="py-[8px]">
                <div className="flex justify-between items-center">
                  <h3 className="text-[13px] font-semibold">
                    Shipping address
                  </h3>
                  <span className="text-[#616161] ">
                    <LuPencil />
                  </span>
                </div>
                <div className="text-[13px] py-[8px] flex flex-col gap-[2px]">
                  <h2>Deepak Roy</h2>
                  <h2>2</h2>
                  <h2>
                    Mandir complex Back Side Road 792001 TEZU Arunachal Pradesh
                    India
                  </h2>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[13px] font-semibold">Billing address</h3>
                <h3 className="text-[13px] text-[#616161]">
                  Same as shipping address
                </h3>
              </div>
            </div>
          </div>
          <div className="    border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
            <h3 className="text-[13px] font-semibold">Conversion summary</h3>
            <div className="flex flex-col gap-2 pt-[4px]">
              <div className="flex gap-2 items-center">
                <span className="text-[14px]">
                  <BsFillBoxFill />
                </span>
                <h3 className="text-[13px]">This is their 1st order</h3>
              </div>

              <div className="flex gap-2 items-cente">
                <span className="text-[14px]">
                  <IoEyeSharp />
                </span>
                <h3 className="text-[13px]">
                  1st session from an unknown source
                </h3>
              </div>
              <div className="flex gap-2 items-cente">
                <span className="text-[14px]">
                  <TfiPanel />
                </span>
                <h3 className="text-[13px]">1 session over 1 day</h3>
              </div>
            </div>
            <button className="text-[#005bd3] text-[13px] hover:underline">
              View conversion details
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 xl:flex-wrap-reverse my-6  px-7 py-1 sm:px-6 xm:px-2 ">
        <div className="flex flex-col gap-3 h-full   w-[70%] xl:w-[100%] ">
          <div>
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
                    onChange={(event) => setdata(event.target.value)}
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
                  <div className="pb-[6px]">
                    <input className="text-[14px]" type="file"></input>
                  </div>
                </div>
                <div>
                  <button
                    disabled={!data}
                    style={
                      data
                        ? { background: "black" }
                        : {
                            background: "rgba(241, 241, 241, 1)",
                            color: "white",
                          }
                    }
                    className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[white] font-semibold bg-black "
                  >
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
                        5.00pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4 w-[30%] xl:w-[100%]">
          <div className="xl:w-[100%]  border-[1px bg-white py-[20px] px-[15px]	 shadow-md rounded-[8px]">
            <div className="flex justify-between items-center">
              <h3 className="text-[13px] font-semibold ">Tags</h3>
              <span className="text-[#616161] cursor-pointer font-semibold">
                <LuPencil />
              </span>
            </div>
            <div className=" py-2  ">
              <input
                type="input"
                className="w-full border-[1px] border-[#303030] px-[8px] py-[2px] rounded-lg "
              />
            </div>

            <div className="w-fit">
              <div className="bg-[#e3e3e3]  flex items-center gap-[2px] rounded-lg  py-1 px-1">
                <span className="text-[12px]">Laxmen</span>
                <button className="text-[17px] pt-[2px]">
                  <IoIosClose />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
