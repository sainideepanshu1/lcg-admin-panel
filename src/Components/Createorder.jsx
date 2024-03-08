import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { CgAdd } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import Product2 from "../assets/Product2.jpg";
import { FiHash } from "react-icons/fi";
import { GrSquare } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Createorder = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(false);
  const itemref = useRef(null);

  const [notes, setnotes] = useState(false);
  const notesref = useRef(null);

  const [browse, setbrowse] = useState(false);
  const browseref = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const handlechange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()!== "") {
      settodos([...todos, inputVlauetrim()]);
      setInputValue("");
    }
  };
  const handleDelete = (index) => {
    const updatedtodos = [...todos];
    updatedtodos.splice(index, 1);
    settodos(updatedtodos);
  };

  const handleclick = (event) => {
    if (itemref.current && !itemref.current.contains(event.target)) {
      setItem(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleclick, true);
    return () => {
      document.removeEventListener("click", handleclick);
    };
  });
  const browseclick = (event) => {
    if (browseref.current && !browseref.current.contains(event.target)) {
      setbrowse(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", browseclick, true);
    return () => {
      document.removeEventListener("click", browseclick);
    };
  });

  const notesclick = (event) => {
    if (notesref.current && !notesref.current.contains(event.target)) {
      setnotes(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", notesclick, true);
    return () => {
      document.removeEventListener("click", notesclick);
    };
  });
  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-full">
        <div className="w-[75%] ml-auto mr-auto sm:w-full">
          <div className="flex items-center py-6 text-lg font-sans font-bold sm:px-2">
            <Link className="p-1" to="/Orders">
              <FaArrowLeftLong />
            </Link>
            Create order
          </div>
          <div>
            <div className="flex  gap-3 sm:flex-col sm:items-center md:flex-wrap">
              <div className="w-[70%] md:w-[100%] flex flex-col sm:w-[93%]">
                <div className="rounded-xl flex flex-col bg-white gap-1 shadow-md p-4">
                  <div className="flex gap-4">
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <label
                          className="text-heading text-heading-color font-[650]"
                          htmlFor=""
                        >
                          Products
                        </label>
                      </div>
                      <label
                        onClick={() => setItem(!item)}
                        className="text-[12px] text-[#0068d9]  cursor-pointer hover:underline  "
                      >
                        Add custom item
                      </label>
                    </div>
                    {item && (
                      <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                        <div className="rounded-xl my-4 bg-white   w-[45%] shadow-md ">
                          <div className="flex items-center  px-3 py-2 bg-[#f3f3f3] rounded-t-xl justify-between">
                            <div>
                              <h2 className="cursor-pointer text-[#303030] text-[14px] font-semibold ">
                                Add custom item
                              </h2>
                            </div>
                            <div>
                              <div
                                onClick={() => setItem(!item)}
                                className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[20px] cursor-pointer"
                              >
                                <IoIosClose />
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="flex flex-col  px-4 pb-4 gap-3">
                            <div className="flex  w-[100%] px-2 py-4 gap-3 sm:flex sm:flex-col">
                              <div className="">
                                <div className="pr-4 ">
                                  <h2 className="text-heading  text-heading-color py-1 font-[450]">
                                    Item name
                                  </h2>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    className="py-[6px] px-3  rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading focus-within:outline "
                                  />
                                </div>
                              </div>
                              <div className="">
                                <div className="text-heading py-1  ">Price</div>
                                <div className=" border-[#8a8a8a]  flex items-center px-2 rounded-[0.5rem]  border-[1px] focus-within:outline ">
                                  <span className="p-1 text-[#616161]">
                                    &#8377;
                                  </span>
                                  <input
                                    type="text"
                                    placeholder="0.00"
                                    name="price"
                                    className="w-[90%] text-[13px] px-[2px] outline-none "
                                  />
                                </div>
                              </div>
                              <div className="">
                                <div className="text-heading py-1">
                                  Quantity
                                </div>
                                <div className="group border-[#8a8a8a] border w-full flex items-center rounded-[0.5rem] focus-within:outline">
                                  <input
                                    type="number"
                                    placeholder="1"
                                    className="w-[95%] text-[13px] px-2 py-[6px] rounded-[0.5rem] outline-none focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm flex  items-center text-[13px] gap-2">
                                <input type="checkbox" id="tax" />
                                Item is taxable
                              </label>
                            </div>
                            <div>
                              <label className="text-sm flex  text-[13px] items-center gap-2">
                                <input type="checkbox" id="tax" />
                                Item is a physical product
                              </label>
                            </div>

                            <div>
                              <div className="pt-2 ">
                                <h3 className="text-[13px]">
                                  Item weight (optional)
                                </h3>
                                <div className="flex items-center gap-2 py-2 ">
                                  <input
                                    step="0.1"
                                    className="py-[6px] px-3  rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading outline-none"
                                    type="Number"
                                  />
                                  <div className="">
                                    <select className="px-1 py-2 rounded-lg">
                                      <option>kg</option>
                                    </select>
                                  </div>
                                </div>
                                <h3 className="text-[13px]">
                                  Used to calculate shipping rates accurately
                                </h3>
                              </div>
                            </div>
                          </div>

                          <hr />

                          <div className="flex  justify-end  px-3 py-4 gap-2 rounded-b-xl ">
                            <button 
  onClick={() => setItem(!item)} className=" text-[black] rounded-lg border  px-3 py-1  text-[12px]">
                              Cancel
                            </button>

                            <button
                              // onClick={() => {
                              //   setnotes(false);
                              // }}
                              className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                              type="Submit"
                            >
                              Add item
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between w-full gap-1">
                      <div className="flex w-[100%] gap-1">
                        <div className="hover:bg-[#FAFAFA]  gap-1 flex items-center text-[0.8125rem] text-[#303030] w-[100%] border-[0.04125rem] border-[#8a8a8a] font-sans  pl-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]">
                          <div className="text-[16px]">
                            <CiSearch />
                          </div>

                          <input
                            className="outline-none hover:bg-[#FAFAFA] py-1 w-[95%]"
                            type="text"
                            name="Products"
                            placeholder="Search products"
                          />
                        </div>
                        <button
                          onClick={() => setbrowse(!browse)}
                          // ref={browseref}
                          className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-[80px] border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]"
                        >
                          browse
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[100%]  justify-between">
                    <div className="flex w-[70%] gap-8">
                      <div className="w-[10%]"></div>
                      <div>
                        <h1>Product</h1>
                      </div>
                    </div>
                    <div className="flex w-[30%] gap-8">
                      <div>
                        <h1>Quantity</h1>
                      </div>

                      <div>
                        <h1>Total</h1>
                      </div>
                      <div className=""></div>
                    </div>
                  </div>
                  <div className="flex w-100% justify-between">
                    <div className="flex gap-2 w-[70%] ">
                      <div className="w-[45px] h-[45px]">
                        {" "}
                        <img src={Product2} alt="pic" />
                      </div>
                      <div>
                        <h1 className="text-[13px] text-[#4260da]">
                          1st Birthday Sublimation Baby Frame
                        </h1>
                        <h1 className="text-[13px]">Without Gift Wrap</h1>
                        <h1 className="text-[13px]">SKU: LCG-BF-BSBF-0001</h1>
                        <span className=" text-[#4260da]  text-heading">
                          &#8377;899.00{" "}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[30%] gap-5 items-center">
                      <div>
                        <div className="group border-[#8a8a8a]  border w-full flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                          <input
                            type="number"
                            placeholder="1"
                            className=" px-1 w-[60px] rounded-[0.5rem] outline-none focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <span className=" text-[#4260da] text-heading">
                          &#8377;899.00{" "}
                        </span>
                      </div>
                      <div>
                        {" "}
                        <MdDelete />
                      </div>
                    </div>
                  </div>
                </div>

                {browse && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                    <div className="rounded-xl my-4 bg-white  w-[40%] shadow-md ">
                      <div className="flex   p-3 bg-[#f3f3f3] rounded-t-xl justify-between">
                        <div className="">
                          <h2>Select products</h2>
                        </div>
                        <div>
                          <div
                            onClick={() => setbrowse(!browse)}
                            className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px]"
                          >
                            <IoIosClose />
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="p-2 w-full">
                        <div className="hover:bg-[#FAFAFA]  gap-1 flex items-center text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans  pl-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]">
                          <div className="text-[16px]">
                            <CiSearch />
                          </div>

                          <input
                            className="outline-none hover:bg-[#FAFAFA] py-1 w-[95%]"
                            type="text"
                            name="Products"
                            placeholder="Search products"
                          />
                        </div>
                      </div>
                      <hr/>

                      <div className="justify-between flex flex-col overflow-y-auto">
                        <div className="hover:bg-[#E3E3E3] p-2 ">
                          <h1>
                            <Link
                              // to='/products'
                              className="text-heading text-[#737373] font-[550] "
                            >
                              All Products
                            </Link>
                          </h1>
                        </div>

                       
                        <hr/>
                        <div className="hover:bg-[#E3E3E3] p-2  ">
                          <h1 className="text-heading text-[#737373] font-[550] ">
                            Collections
                          </h1>
                        </div>
                        <hr/>
                        <div className="hover:bg-[#E3E3E3] p-2  ">
                          <h1 className="text-heading text-[#737373] font-[550] ">
                            Vendors
                          </h1>
                        </div>
                      </div>
                      <hr/>
                      <div className="flex  justify-between  p-3 rounded-b-xl ">
                        <div className="">
                       
                        </div>
                        <div className="flex gap-2">
                          <button   onClick={() => setbrowse(!browse)} className=" text-[black] rounded-lg border  px-3 py-1 text-[12px]">
                            Cancel
                          </button>

                          <button
                            onClick={() => {
                              setnotes(false);
                            }}
                            className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                            type="Submit"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="rounded-xl my-4 bg-white shadow-md border ">
                  <div className=" my-4 bg-white pt-4 px-4 ">
                    <div>
                      <h2 className="text-heading text-heading-color font-[650]">
                        Payment
                      </h2>
                    </div>
                    <div className="rounded-md my-4 bg-white border gap-4 flex flex-col p-4">
                      <div className="flex justify-between">
                        <div className="text-heading w-[180px]">Subtotal</div>
                        <div className="text-[#616161]  w-[100px]  text-heading">
                          ---
                        </div>
                        <div></div>
                        <span className="text-[#616161] text-heading">
                          &#8377;0.00{" "}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading w-[180px] text-[#bcbab7] ">
                          Add discount
                        </div>
                        <div className="  w-[100px]  text-heading">---</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading w-[180px] items-start">
                          Add Shipping and delivery
                        </div>
                        <div className=" items-start w-[100px] text-heading">
                          ---
                        </div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>

                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading w-[180px] items-start">
                          Partial Payment
                        </div>
                        <div className=" items-start w-[100px] text-heading">
                          ---
                        </div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading flex items-center gap-1 w-[180px]">
                          Estimated tax{" "}
                          <div className="text-[#616161] text-[16px]">
                            <AiOutlineInfoCircle />
                          </div>{" "}
                        </div>
                        <div className=" w-[100px]  text-heading">
                          Not calculated
                        </div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-heading text-heading-color w-[180px] font-[650]">
                          Total{" "}
                        </div>
                        <div className="text-[#616161]  w-[100px]  text-heading">
                          ---
                        </div>
                        <div></div>
                        <span className="text-[#616161] text-heading font-[650]">
                          &#8377;0.00{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full py-4  border-t bg-[#f7f7f7] rounded-b-xl  px-4 ">
                    <h3
                      className="text-sm text-heading flex items-center gap-2"
                      htmlFor="tax"
                    >
                      Add a product to calculate total and view payment options.
                    </h3>
                  </div>
                </div>
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
                          // type="text"
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
                              {/* <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "} */}
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
                              {/* <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "} */}
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
                              {/* <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "} */}
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
                              {/* <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "} */}
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
              <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
                <div className="sm:mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div className="px-4 flex justify-between items-center pt-4">
                      <div>
                        <h2 className="text-heading text-heading-color font-[650]">
                          Notes
                        </h2>
                      </div>
                      <div onClick={() => setnotes(!notes)}>
                        <GoPencil />
                      </div>
                    </div>
                    <div className="p-4 text-heading  pt-2">
                      {inputValue ? inputValue : <p>No Notes</p>}
                    </div>
                  </div>
                </div>

                {notes && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                    <div className="rounded-xl my-4 bg-white  w-[40%] shadow-md ">
                      <div className="flex border-b-2  p-3 bg-[#f3f3f3] rounded-t-xl justify-between">
                        <div className="">
                          <h2>Add Note</h2>
                        </div>
                        <div>
                          <div
                            onClick={() => setnotes(!notes)}
                            className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px]"
                          >
                            <IoIosClose />
                          </div>
                        </div>
                      </div>
                      <div onSubmit={handleSubmit} className="p-2 w-full ">
                        <input
                          className="outline-none border p-2 rounded-md w-full"
                          type="text"
                          value={inputValue}
                          onChange={handlechange}
                        />
                      </div>
                      <div className="flex border-t-2 gap-2 p-3 justify-end rounded-b-xl ">
                        <div onClick={() => handleDelete(index)} className="">
                          <button>
                            <button
                              onClick={() => {
                                setnotes(false);
                              }}
                              className=" text-[black] rounded-lg border  px-3 py-1 text-[12px]"
                            >
                              Cancel
                            </button>
                          </button>
                        </div>
                        <div>
                          <button>
                            <button
                              onClick={() => {
                                setnotes(false);
                              }}
                              className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                              type="Submit"
                            >
                              Done
                            </button>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div>
                      <div className="px-4 pt-4">
                        <h1 className="text-heading text-heading-color font-[650]">
                          Customer
                        </h1>
                      </div>
                      <div
                        className={`p-4 pt-2 relative ${item ? "-z-10" : ""} ${
                          notes ? "-z-10" : ""
                        }  ${browse ? "-z-10" : ""}`}
                      >
                        <div className="py-[6px] hover:bg-[#FAFAFA]  px-3 w-full gap-1 flex items-center rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading">
                          <div className="text-[16px]">
                            <CiSearch />
                          </div>
                          <input
                            onClick={() => setShow(!show)}
                            className="outline-none hover:bg-[#FAFAFA] py-1 line-clamp-1 "
                            type="text"
                            name=" Customer"
                            placeholder="Search or Create a Customer "
                          />
                        </div>
                        {show && (
                          <div className="rounded-xl my-4 p-1 bg-white shadow-md border absolute z-10  b  overflow-y-auto overflow-x-auto w-[90%]  mt-1">
                            <div className="border-b-2 pb-2">
                              <div className="text-[12px] flex items-center gap-2 text-[#303030]  w-full py-1 hover:bg-[#f7f7f7] rounded-md pl-2  selection:  ">
                                <div className="text-[16px] text-[#303030]  ">
                                  <CgAdd />
                                </div>
                                <h3 className="text-sm text-[12px] flex  items-center gap-2">
                                  Create a new customer
                                </h3>
                              </div>
                            </div>
                            <div className="pt-2">
                              <div className="text-[12px] flex flex-col text-[#303030] w-full py-1  hover:bg-[#f7f7f7] rounded pl-2  ">
                                <div>
                                  {" "}
                                  <h1>ajay</h1>
                                  <h1> ajaygsss1@123o,hmail</h1>
                                </div>
                              </div>
                              <div className="text-[12px] flex flex-col text-[#303030] w-full py-1 hover:bg-[#f7f7f7] rounded pl-2  ">
                                <div>
                                  {" "}
                                  <h1>ajay</h1>
                                  <h1> ajaygsss1@123o,hmail</h1>
                                </div>
                              </div>
                              <div className="text-[12px] flex flex-col text-[#303030]  w-full py-1 hover:bg-[#f7f7f7] rounded pl-2   ">
                                <div>
                                  {" "}
                                  <h1>ajay</h1>
                                  <h1> ajaygsss1@123o,hmail</h1>
                                </div>
                              </div>
                              <div className="text-[12px] flex flex-col text-[#303030]  w-full py-1 hover:bg-[#f7f7f7] rounded pl-2  ">
                                <div>
                                  {" "}
                                  <h1>ajay</h1>
                                  <h1>
                                    {" "}
                                    ajaygsss1@123ohfjgkhlj;k'kjlhkgjfhdsgafda,hmail
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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

export default Createorder;
