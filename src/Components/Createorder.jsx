import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from 'react-icons/io';

const Createorder = () => {
  const [show, setshow] = useState(false);
  const [item, setitem] = useState(false);
  const itemref = useRef(null);

  const [notes, setnotes] = useState(false);
  const notesref = useRef(null);

  const handleclick = (event) => {
    if (itemref.current && !itemref.current.contains(event.target)) {
      setitem(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleclick, true);
    return () => {
      document.removeEventListener("click", handleclick)
    }
  })

  const notesclick = (event) => {
    if (notesref.current && !notesref.current.contains(event.target)) {
      setnotes(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", notesclick, true);
    return () => {
      document.removeEventListener("click", notesclick)
    }
  })
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
          <form>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-[70%] flex flex-col sm:w-[93%]">
                <div className="rounded-xl flex flex-col bg-white gap-1 shadow-md p-4">
                  <div className="flex gap-4">
                    <div className='flex justify-between items-center w-full'>
                      <div>
                        <label className="text-heading text-heading-color font-[650]" htmlFor="">
                          Products
                        </label>
                      </div>
                      <label>

                        <Link
                          onClick={() =>
                            setitem(!item)
                          }
                          ref={itemref}

                          className="text-[12px] text-[#0068d9] " htmlFor=""
                        >
                          Add custom item
                        </Link>
                      </label>
                    </div>
                    {item && (
                      <div className='fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm'>
                        <div className="rounded-xl my-4 bg-white  w-[40%] shadow-md ">
                          <div className='flex border-b-2  p-3 bg-[#f3f3f3] rounded-t-xl justify-between'>
                            <div className="">
                              <h2>Add custom item</h2>
                            </div>
                            <div >
                              <div onClick={() =>
                                setitem(!item)

                              }
                                className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px]">
                                <IoIosClose />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col  px-4 pb-4 gap-3">
                            <div className="grid grid-cols-3 px-2 py-4 gap-3 sm:flex sm:flex-col">
                              <div>
                                <div className="pr-4 ">
                                  <h2 className="text-heading  text-heading-color font-[450]">
                                    Item name
                                  </h2>
                                </div>
                                <div>
                                  <input
                                    name="tags"
                                    type="text"
                                    className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="text-heading">Price</div>
                                <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                  <span className="p-1 text-[#616161]">&#8377;</span>
                                  <input

                                    type="number"
                                    placeholder="0.00"
                                    name="price"

                                    className="w-[90%] px-1 outline-none focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="text-heading">Quantity</div>
                                <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                  <span className="p-1 text-[#616161]">&#8377;</span>
                                  <input

                                    type="number"
                                    placeholder="0.00"
                                    name="comparePrice"

                                    className="w-[90%] px-1 outline-none focus:outline-none"
                                  />
                                  {/* <div className="group relative">
                            <CiCircleQuestion size={20} />
                            <div className="hidden group-hover:block p-[0.75rem] absolute shadow-md text-[12px] bg-white rounded-lg w-[16.75rem]">
                              To display a markdown, enter a value higher than
                              your price.
                              <br /> Often shown with a strikethrough.
                            </div>
                          </div> */}
                                </div>
                              </div>
                            </div>
                            <div>
                              <label
                                className="text-sm flex items-center gap-2"
                                htmlFor="tax"
                              >
                                <input
                                  type="checkbox"
                                  id="tax"
                                  name="tax"
                                />

                                Item is taxable
                              </label>
                            </div>
                            <div>
                              <label
                                className="text-sm flex items-center gap-2"
                                htmlFor="tax"
                              >
                                <input
                                  type="checkbox"
                                  id="tax"
                                  name="tax"
                                />
                                Item is a physical product
                              </label>
                            </div>

                          </div>
                          <div className='flex border-t-2 p-3 rounded-b-xl '>
                            <div className="">
                              <h2>Add custom item</h2>
                            </div>
                            <div >
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
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className='flex justify-between w-full gap-1'>
                      <div className='flex w-[100%] gap-1'>
                        <div className="hover:bg-[#FAFAFA]  gap-1 flex items-center text-[0.8125rem] text-[#303030] w-[100%] border-[0.04125rem] border-[#8a8a8a] font-sans  pl-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]">

                          <div className='text-[16px]'><CiSearch /></div>

                          <input
                            className='outline-none hover:bg-[#FAFAFA] py-1 w-[100%]'
                            type="text"
                            name="Products"
                            placeholder="Search products"
                          />
                        </div>
                        <button className='hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-[80px] border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]'>
                          browse

                        </button>
                      </div>


                    </div>

                  </div>
                </div>

                <div className="rounded-xl my-4 bg-white shadow-md border ">
                  <div className=" my-4 bg-white pt-4 px-4 ">
                    <div>
                      <h2 className="text-heading text-heading-color font-[650]">
                        Payment
                      </h2>
                    </div>
                    <div className="rounded-md my-4 bg-white border gap-4 flex flex-col p-4">
                      <div className='flex justify-between'>
                        <div className="text-heading w-[180px]">Subtotal</div>
                        <div className='text-[#616161]  w-[100px]  text-heading'>---</div>
                        <div></div>
                        <span className="text-[#616161] text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between text-[#bcbab7] '>
                        <div className="text-heading w-[180px] text-[#bcbab7] ">Add discount</div>
                        <div className='  w-[100px]  text-heading'>---</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between text-[#bcbab7] '>
                        <div className="text-heading w-[180px] items-start">Add Shipping and delivery</div>
                        <div className=' items-start w-[100px] text-heading'>---</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between text-[#bcbab7] '>
                        <div className="text-heading flex items-center gap-1 w-[180px]">Estimated tax <div className='text-[#616161] text-[16px]'><AiOutlineInfoCircle /></div> </div>
                        <div className=' w-[100px]  text-heading'>Not calculated</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between'>
                        <div className="text-heading text-heading-color w-[180px] font-[650]">Total </div>
                        <div className='text-[#616161]  w-[100px]  text-heading'>---</div>
                        <div></div>
                        <span className="text-[#616161] text-heading font-[650]">&#8377;0.00 </span>
                      </div>
                    </div>

                  </div>
                  <div className=' w-full py-4  border-t bg-[#f7f7f7] rounded-b-xl  px-4 '>
                    <h3
                      className="text-sm text-heading flex items-center gap-2"
                      htmlFor="tax"
                    >

                      Add a product to calculate total and view payment options.
                    </h3>
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
                      <div onClick={() =>
                        setnotes(!notes)
                      }
                      >
                        <GoPencil />
                      </div>
                    </div>
                    <div className="p-4 text-heading pt-2">
                      No notes
                    </div>
                  </div>
                </div>


                {notes && (
                  <div className='fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm'>
                    <div className="rounded-xl my-4 bg-white  w-[40%] shadow-md ">
                      <div className='flex border-b-2  p-3 bg-[#f3f3f3] rounded-t-xl justify-between'>
                        <div className="">
                          <h2>Add Note</h2>
                        </div>
                        <div >
                          <div onClick={() =>
                            setnotes(!notes)

                          }
                            className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px]">
                            <IoIosClose />
                          </div>
                        </div>
                      </div>
                      <div className='p-2 w-full '>  
                        <textarea  rows={3} cols={10}
                        className='outline-none border p-2 rounded-md w-full'
                        type="text" />
                      </div>
                      <div className='flex border-t-2 p-3 rounded-b-xl '>
                        <div className="">
                          <button>
                            <Link
                              to="/orders/create-order"
                              className=" text-[black] rounded-lg px-3 py-2 text-[12px]"
                            >
                              Cancel
                            </Link>
                          </button>
                        </div>
                        <div >
                          <button>
                            <Link
                              to="/orders/create-order"
                              className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
                            >
                              Done
                            </Link>
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
                      <div className={`p-4 pt-2 relative ${item ? "-z-10" : ""}`}>
                        <div className="py-[6px] hover:bg-[#FAFAFA]  px-3 w-full gap-1 flex items-center rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading">
                          <div className='text-[16px]'><CiSearch /></div>
                          <input
                            onClick={() => setshow(!show)}
                            className='outline-none hover:bg-[#FAFAFA] py-1 line-clamp-1 '
                            type="text"
                            name=" Customer"
                            placeholder="Search or Create a Customer "
                          />
                        </div>
                        {
                          show && <div className="rounded-xl my-4 p-1 bg-white shadow-md border absolute z-10  b  overflow-y-auto overflow-x-auto w-[90%]  mt-1">
                         <div className='border-b-2 pb-2'>
                         <div className="text-heading  flex flex-col text-[black]  w-full py-1 hover:bg-[#f7f7f7] rounded-md pl-2  selection:  ">
                              <h3 className="text-sm text-heading flex  items-center gap-2">
                                Create a new customer
                              </h3>
                            </div> 
                         </div>
                            <div className='pt-2'> 
                            <div className="text-heading flex flex-col text-[#bcbab7] w-full py-1  hover:bg-[#f7f7f7] rounded pl-2  ">
                              <div>    <h1>ajay</h1>
                                <h1> ajaygsss1@123o,hmail</h1></div>
                            </div>
                            <div className="text-heading flex flex-col text-[#bcbab7] w-full py-1 hover:bg-[#f7f7f7] rounded pl-2  ">
                              <div >    <h1>ajay</h1>
                                <h1> ajaygsss1@123o,hmail</h1></div>
                            </div>
                            <div className="text-heading flex flex-col text-[#bcbab7] w-full py-1 hover:bg-[#f7f7f7] rounded pl-2   ">
                              <div >    <h1>ajay</h1>
                                <h1> ajaygsss1@123o,hmail</h1></div>
                            </div>
                            <div className="text-heading flex flex-col text-[#bcbab7] w-full py-1 hover:bg-[#f7f7f7] rounded pl-2  ">
                              <div>    <h1>ajay</h1>
                                <h1> ajaygsss1@123o,hmail</h1></div>
                            </div>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Createorder
























