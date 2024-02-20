import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";

function CustomerDetails() {
  return (
    <div className='bg-[#F1F1F1] w-full h-[100vh]'>
        <div className='flex mt-6 items-center justify-between px-7 py-1 sm:px-6 '>
            <div> <div className='flex items-center gap-2'>
                <span><FaArrowLeftLong /></span>
                <h3 className='text-[20px] text-[#000000] font-[700]'>Sushil sharma</h3></div>
                <div className='flex items-center text-[#616161] text-[12px]'>
                    <span>Chainpur , Bandipur UP, India</span>
                    <span className=''><RxDotFilled /></span>
                    <span>Customer for about 2 hours</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CustomerDetails