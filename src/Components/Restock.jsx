import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { FiAlertTriangle } from "react-icons/fi";
import Product2 from "../assets/Product2.jpg";
import { MdCurrencyRupee } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

function Restock() {
  return (
    <div className='bg-[#F1F1F1] w-full h-[100%] :px-[100px] md:px[10px]'>
        <div className='my-6  px-7 py-1 sm:px-6 xm:px-2 '>
        <div className='flex gap-2 items-center  '>
            <div className=''><Link to='OrderDetails'><span className=' text-[#4a4a4a]'><FaArrowLeftLong /></span></Link></div>

           <div className='text-[18px] font-semibold'>
            <Link to=''> <h3>Restock</h3></Link>
           
             
            
           </div>
           
           </div>
           <div className='px-[18px] text-[13px] text-[#616161]'><h4 >#43368</h4></div>
        </div>

        <div className='flex gap-4  xl:flex-wrap  my-6  px-7 py-1 sm:px-6 xm:px-2 ' >

            {/* ---------------Left-------------- */}
          <div className='flex flex-col gap-3 h-full   w-[70%] xl:w-[100%] '>
          <div className=" border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px]">
            <div className='flex justify-between items-center px-[10px] py-2 '>
            <div className="flex relative gap-1 items-center px-[8px] py-[6px] rounded-lg text-[13px] bg-[#ffeb78] text-[#4f4700] ">
                  <span className="text-[16px] ">
                    <HiOutlineArchiveBoxXMark />
                  </span>{" "}
                  <span>Unfulfilled</span>
                </div>
                
                <div className='text-[14px]'><h3>DSS 56 OLD Court Complex</h3></div>

            </div>

            <div className='flex gap-1 items-start text-[#5e4200] bg-[#fae2e1] rounded-lg mx-[10px] p-[10px]'>
                <span className='pt-[2px]'><FiAlertTriangle/></span>
                <p className='text-[14px]'>This order is partially paid. To update item prices or quantities, edit the order instead of issuing a refund.</p>
            </div>

            <div className=' flex justify-between items-start mx-[10px] border-[1px] px-[10px] my-[10px] py-[10px] rounded-lg '>
               
            <div className="  flex items-start gap-[10px]">
                  <div className=" w-[43px] h-[40px] object-contain ">
                    <img className="rounded-md" src={Product2} alt="" />
                  </div>
                  <div className="w-[150px]">
                    <div className="text-[13px] text-[#005bd3]  hover:underline font-medium">
                      <h2>Glowing Panda - A Memorable Gift</h2>
                    </div>

                    <div className="">
                      <h3 className="text-[13px] text-[#303030] bg-[#e3e3e3] px-2 my-[4px] rounded-lg line-clamp-1 ">
                        Brown / Without Gift Wrap / Without Gift Card
                      </h3>
                      <div className=''>
                    <h3 className='text-[12px] px-[4px] line-clamp-1'> Brown / Without Gift Wrap / Without Gift Card</h3>
                    <div className="flex items-center text-[14px] ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />600
                    </span>
                    <span>.00</span>
                  </div>

                    

                    </div>

                    </div>
                    

                  </div>
                  
                </div>


               <div className='  flex border-[0.1px] bg-[#f5f5f5] rounded-xl   py-[4px] h-[36px] outline px-[6px]'>
                
                <input className='bg-[#f5f5f5] outline-none' type='text' placeholder=''/>
                <div className='flex gap-2'>
                <span className='text-[#616161]'>/ 1</span>
                 <div className=' flex flex-col bg-[#e3e3e3] px-[2px] py-[2px] rounded-md text-[#4a4a4a] text-[13px]'>
                  <button className='hover:bg-[#acaaaa] rounded-t-md'><IoChevronUp /></button>
                  <button className='hover:bg-[#acaaaa] rounded-b-md'><IoChevronDownOutline /></button>
               
                  </div>
                  </div>
               </div>
               <div className="flex items-center text-[14px] ">
                    <span className="flex items-center">
                      <MdCurrencyRupee />600
                    </span>
                    <span>.00</span>
                  </div>


            </div>
            <div className='text-[#616161] text-[13px] px-[10px]  pb-[15px] '><h3>Refunded items will be removed from the order.</h3></div>



            <hr/>

            <div  className='text-[13px] py-[10px]'>
                <label>
                <input className='mx-[10px]  ' type='checkbox'/>
                Restock item
                </label>



            </div>

          </div>

          <div className=' flex flex-col gap-2 border-[1px] w-full   bg-white py-[15px]	 shadow-md rounded-[8px] px-[8px]'>
            <h3 className='text-[#303030] text-[14px] font-semibold'>Reason for refund</h3>
            <input className='w-full border-[1px] text-[#303030] border-[#303030] rounded-lg py-[4px] ' type='text'/>
            <h3 className='text-[#616161] text-[13px]'>Only you and other staff can see this reason.</h3>
          </div>

          </div>
               

               {/* -----------------right---------------- */}
          <div className=" flex flex-col gap-4 w-[30%] xl:w-[100%]">
          <div className=" xl:w-[100%]  border-[1px bg-white py-[15px] px-[15px]	 shadow-md rounded-[8px]"></div>

          </div>
        </div>
        
        

    </div>
  )
}

export default Restock