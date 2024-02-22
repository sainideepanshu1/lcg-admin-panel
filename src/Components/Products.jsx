import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { TbArrowsSort } from "react-icons/tb";
import Pic from '../assets/Product1.jpg';
import Pic2 from '../assets/Product2.jpg';
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useRef } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [sort, setSort] = useState(false);
  const sortref = useRef(null);


  const imexRef = useRef(null);
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


  // -------------sort ------


  const handleSortClick = (event) => {
    if (sortref.current && !sortref.current.contains(event.target)) {

    }
  }






  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/product/allProducts"
      );
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        toast.error(error.response.data.message, { duration: 2000 });
      } else {
        toast.error(error.message, { duration: 2000 });
      }
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-[#f1f1f1] w-full  overflow-hidden flex flex-col gap-3">
        <div className="bg-[#f1f1f1] h-screen  xm:p-0 justify-between px-12 py-1">

          <div className="flex mt-6 xm:px-5 items-center justify-between">
            <div>
              <h1 className="text-[20px] font-[600] text-[#000000]">
                Products
              </h1>
            </div>
            <div className="flex gap-2 font-[600] ">
              <span ref={imexRef}
                onClick={() => {
                  setToggle(!toggle);
                }}

                className="relative cursor-pointer hidden xm:block bg-[#E3E3E3] rounded-lg px-3 py-2 text-heading "
              >
                <BsThreeDots /></span>
              <div >


                {toggle && (<div className=" flex gap-4 p-[10px] flex-col bg-white border-[1px] absolute  top-[100px] right-[174px]  hover:bg-[#E3E3E3] rounded-lg  text-heading ">
                  <button>Export</button>
                  <button>Import</button>
                </div>)}

              </div>


              <div className="flex xm:hidden items-center">
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading">
                  Export
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading">
                  Import
                </button>
              </div>
              <button>
                <Link
                  to="/products/add-product"
                  className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
                >
                  Add product
                </Link>
              </button>
            </div>
          </div>
          <div className="rounded-lg mt-[24px] xm:p-0 bg-[#ffffff] h-[144vh] overflow-x-hidden  w-full gap-4 justify-between flex flex-col border border-stone-200">
            <div className="flex justify-between py-1 px-1 text-[#585858]  ">
              <div className="flex  sm:overflow-y-auto  items-center ">
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
                  All
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
                  Active
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
                  Draft
                </button>
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading xm:text-[12px] font-[600] ">
                  Archived
                </button>

                <button>
                  <Link to=""
                    className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[18px] xm:text-[12px] font-[600] ">
                    +
                  </Link>
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all xm:text-[12px] text-[18px] px-2 py-0 rounded-lg flex items-center">
                  <IoSearchOutline /> <CgSortAz />
                </button>


                <span
                  className="border shadow-lg cursor-pointer hover:bg-[#e3e3e3] transition-all flex items-center rounded-lg xm:text-[12px] text-[18px] px-2 py-0">
                  <TbArrowsSort />
                </span>

                <div className="">
                    <div className=" flex gap-2 p-[10px] flex-col bg-white border-[1px] absolute  top-[200px] right-[48px]   rounded-lg  text-heading   xm:top-[175px]  xm:right-[4px] ">
                      <h1>Sort by</h1>
                      <div className="flex flex-col gap-4 items-start" >
                        <label className="flex gap-2 items-center">
                          <input type="radio" name="sort_option" value="product_title" />
                          Product title
                        </label>
                        <label className="flex gap-2 items-center">
                          <input type="radio" name="sort_option" value="created" />
                          Created
                        </label>
                        <label className="flex gap-2 items-center">
                          <input type="radio" name="sort_option" value="updated" />
                          Updated
                        </label>
                        <label className="flex gap-2 items-center">
                          <input type="radio" name="sort_option" value="inventory" />
                          Inventory
                        </label>
                        <label className="flex gap-2 items-center">
                          <input type="radio" name="sort_option" value="product_type" />
                          Product type
                        </label>
                        <label className="flex gap-2 items-center">
                          <input type="radio" name="sort_option" value="vendor" />
                          Vendor
                        </label>
                      </div>

                      <div className="flex flex-col">
                        <button className="hover:bg-[#E3E3E3] flex  gap-6 items-center rounded-lg py-1 px-4 text-[15px]">
                          <FaLongArrowAltDown /> A-Z
                        </button>
                        <button className="hover:bg-[#E3E3E3] flex gap-6 items-center rounded-lg py-1 px-4 text-[15px]">
                          <FaLongArrowAltUp /> Z-A
                        </button>
                      </div>


                    </div> 
                </div>

              </div>
            </div>
            <div>
              <div className="grid sm:overflow-auto  w-full ">
                <div className="w-full px-2 grid xm:hidden  items-center  border border-y-gray-300 text-[#666161] bg-[#f1f1f1] pt-2 pb-2">
                  <div
                    className="grid  items-center "
                    style={{
                      gridTemplateColumns:
                        "0.3fr 1.5fr ",
                    }}
                  >
                    <div className=" flex gap-8  sm:sticky sm:left-0 border-y-gray-300 text-[#666161] bg-[#f1f1f1] w-[100px] ">
                      <div className="text-center  flex items-center">
                        <input className="h-4  w-4" type="checkbox" />

                      </div>
                      <div className="h-[45px] w-[45px] ">
                        {/* <img className=" w-[45px]  rounded-xl " src={Pic2} alt="Pic" /> */}
                      </div>
                    </div>
                    <div className="flex sm:overflow-x-hidden gap-4">
                      <div className="flex font-[600] gap-2 w-[150px] items-center text-[12px]  group ">
                        Product
                        <div className="flex-col hidden  text-[8px] group-hover:flex cursor-pointer  ">
                          <SlArrowUp /> <SlArrowDown />
                        </div>
                      </div>
                      <div className="text-[12px] w-[100px] text-center font-[600] ">Status </div>
                      <div className="text-[12px] font-[600] w-[100px] flex gap-2 items-center group cursor-pointer  ">
                        Inventory
                        <div className="flex-col hidden  text-[8px] group-hover:flex">
                          <SlArrowUp /> <SlArrowDown />
                        </div>
                      </div>
                      <div className="text-[12px] w-[100px]  font-[600] ">
                        Sales channels
                      </div>
                      <div className="text-[12px] w-[100px] text-center font-[600] ">Markets</div>
                      <div className="text-[12px] w-[100px] font-[600] flex gap-2 items-center group  cursor-pointer ">
                        Category
                        <div className="flex-col text-[8px] hidden group-hover:flex">
                          <SlArrowUp /> <SlArrowDown />
                        </div>
                      </div>
                      <div className="text-[12px] font-[600] w-[100px] flex gap-2 group items-center cursor-pointer ">
                        Vendor
                        <div className="flex-col hidden  text-[8px] group-hover:flex">
                          <SlArrowUp /> <SlArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full px-2 border-l-0 grid border border-y-gray-100 xm:hidden items-center text-[14px] pt-2 pb-2"
                    >
                      <div
                        className="grid  items-center "
                        style={{
                          gridTemplateColumns:
                            " 1.5fr 1.5fr ",
                        }}
                      >
                        <div className=" flex gap-6 sm:sticky sm:left-0 bg-white border-y-gray-300 text-[#666161]  w-[100px] ">
                          <div className="text-center  flex items-center">
                            <input className="h-4  w-4" type="checkbox" />

                          </div>
                          <div className="h-[45px] w-[45px] ">
                            <img className=" w-[45px]  rounded-xl " src={Pic2} alt="Pic" />
                          </div>
                        </div>
                        <div className="flex  gap-4">
                          <div className="flex font-[450] gap-2 w-[200px] text-[#30304b] items-center pl-2 pr-2 text-[12px] group ">
                            <Link to={`/product/${product._id}`}>
                              {product.title}
                            </Link>

                          </div>
                          <div className="text-[12px] w-[100px] bg-[#B4FED2]  capitalize text-[#5FA681] text-center  border rounded-xl  p-1 ">
                            {product.status}
                          </div>
                          <div className="text-[12px] w-[100px] font-[450] text-[#666161] flex gap-2 items-center group ">
                            Inventory

                          </div>
                          <div className="text-[12px] w-[100px] text-[#666161] font-[450] ">
                            Sales channels
                          </div>
                          <div className="text-[12px] w-[100px] text-[#666161] text-center font-[450] ">Markets</div>
                          <div className="text-[12px]  w-[100px] font-[450] text-[#666161] flex gap-2 items-center group  cursor-pointer ">
                            {product.product_type}

                          </div>
                          <div className="text-[12px] w-[100px] font-[450] text-[#666161] flex gap-2 group items-center cursor-pointer ">
                            {product.vendor}

                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {products.map((product, index) => {
                  return (

                    <div

                      key={index}
                      className="w-full border-l-0 border-r-0 px-2 pl-[1rem] hidden xm:block lg:hidden items-center border border-y-gray-100 text-[#30304b] text-[0.813rem] pt-3 pb-3">

                      <div className="flex gap-4">
                        <div>
                        <img className=" w-[45px]  rounded-xl " src={Pic2} alt="Pic" />
                        </div>
                        <div>
                          <div className="flex font-[450] gap-2 items-center text-[14px] group ">
                            <Link to={`/product/${product._id}`}>
                              {product.title}
                            </Link>
                          </div>
                          <div className="text-[14px] text-[#666161] font-[450] flex gap-2 items-center group ">
                            Inventory

                          </div>
                          <div className="text-[14px] text-[#666161] font-[450] flex gap-2 group items-center cursor-pointer ">
                            {product.vendor}
                          </div>
                          <div>
                            <div className="text-[14px] bg-[#B4FED2] w-[100px] capitalize text-[#5FA681] border rounded-xl font-[450] ">
                              {product.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
