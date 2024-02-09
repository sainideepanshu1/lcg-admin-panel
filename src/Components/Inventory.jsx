import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { BiSortAlt2 } from "react-icons/bi";
import { CiViewColumn } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const Inventory = () => {
  const onExport = () => {
    const fileName = "download";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };
  return (
    <>
      <div className='bg-[#f1f1f1] w-full flex flex-col gap-3 '>
        <div className=' bg-[#f1f1f1]  justify-between px-12 py-1'>
        <div className='flex mt-6 justify-between'>
        <div>
            <h1 className='text-[20px] font-medium text-[#000000]'>Inventory</h1>
          </div>
          <div className='flex gap-3 text-[#3C3030] '>
            <button className="hover:bg-[#E3E3E3] rounded-lg px-3 py-1 text-[12px]" onClick={onExport}>
              Export
            </button>
            <button className="hover:bg-[#E3E3E3] rounded-lg px-3 py-1 text-[12px]" >
              Import
            </button>
            <button className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg  px-3 py-1 text-[12px]" >
              View Products
            </button>

          </div>
        </div>
          <div className='rounded-lg mt-[24px]  bg-[#ffffff]  w-full gap-4 justify-between flex flex-col'>
          <div className='flex justify-between py-3 px-2 '>
            <div>
              <button className="hover:bg-[#E3E3E3] rounded-lg  px-3 py-1 text-[18px]" >
                All
              </button>
              <button className="hover:bg-[#E3E3E3] rounded-lg  px-2 py-1 text-[18px]" >
                +
              </button>
            </div>
            <div className='flex gap-1 '>
              <button className=" border text-[18px] px-2 py-1  rounded-lg flex items-center" >
                <IoSearchOutline /> <CgSortAz />
              </button>
              <button className=" border rounded-lg text-[18px] px-2 py-1 " >
                <CiViewColumn />
              </button>
              <button className=" border  rounded-lg px-2 py-1 text-[18px]" >
                <BiSortAlt2 />
              </button>
            </div>
          </div>
          <div >
          <table className=" flex  w-full">
            <thead className='w-full'><hr />
              <tr className='w-full  flex items-center justify-between text-[14px] text-[#666161] bg-[#f1f1f1] pl-[1.5rem]  pr-[7.5rem] pt-2 pb-2'>
                <input  className='h-4 w-4'  type="checkbox" />
                <th className='flex gap-2 items-center  text-[#666161]'>Product <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>SKU <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>Committed <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>Available <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>On hand <div className='flex  flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
              </tr><hr />
            </thead>
          </table>
          <table className=" flex  w-full">
            <thead className='w-full'>
              <tr className='w-full  flex items-center justify-between text-[14px]  pl-[1.5rem]  pr-[7.5rem] pt-2 pb-2'>
                <input  className='h-4 w-4'  type="checkbox" />
                <th className='flex gap-2 items-center  text-[#666161]'>Product <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>SKU <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>Committed <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>Available <div className='flex flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
                <th className='flex gap-2 items-center  text-[#666161]'>On hand <div className='flex  flex-col text-[8px] '><SlArrowUp /> <SlArrowDown /></div></th>
              </tr>
            </thead>
          </table>
          
          
        </div>
        </div>
       


        </div>
      

      </div>


    </>
  )
}

export default Inventory