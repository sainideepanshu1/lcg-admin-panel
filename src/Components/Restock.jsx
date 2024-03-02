import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Restock() {
  return (
    <div className='bg-[#F1F1F1] w-full h-[100%] :px-[100px] md:px[10px]'>
        <div className=''>
            <div><Link to='OrderDetails'><span><FaArrowLeftLong /></span></Link></div>
           <div>
            
           </div>
        </div>
    </div>
  )
}

export default Restock