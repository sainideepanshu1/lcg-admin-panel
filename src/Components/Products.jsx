import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { TbArrowsSort } from "react-icons/tb";
import Pic from '../assets/Product1.jpg'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);


  function option() {
    setToggle(!toggle);
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
      <div className="bg-[#f1f1f1] w-full flex flex-col gap-3">
        <div className="bg-[#f1f1f1] h-screen xm:p-0 justify-between px-12 py-1">

          <div className="flex mt-6 xm:px-5 items-center justify-between">
            <div>
              <h1 className="text-[20px] font-[600] text-[#000000]">
                Products
              </h1>
            </div>
            <div className="flex gap-3 font-[600] ">
              <span
                onClick={option}
                className="relative hidden xm:block bg-[#E3E3E3] rounded-lg px-3 py-2 text-heading "
              >
                <BsThreeDots />
                <div className={`${toggle ? "block" : "hidden"}`}>
                  <div className=" flex gap-4 p-[10px] flex-col bg-white border-[1px] absolute  top-[35px] right-[24px]  hover:bg-[#E3E3E3] rounded-lg  text-heading ">
                    <button>Export</button>
                    <button>Import</button>
                  </div>
                </div>
              </span>

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
          <div className="rounded-lg mt-[24px] xm:p-0 bg-[#ffffff] overflow-x: auto; scrollbar-width: none; w-full gap-4 justify-between flex flex-col border border-stone-200">
            <div className="flex justify-between py-1 px-1 text-[#585858] ">
              <div className="flex overflow-x-auto items-center ">
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
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[18px] xm:text-[12px] font-[600] ">
                  +
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all xm:text-[12px] text-[18px] px-2 py-0 rounded-lg flex items-center">
                  <IoSearchOutline /> <CgSortAz />
                </button>
                <button className="border shadow-lg hover:bg-[#e3e3e3] transition-all rounded-lg xm:text-[12px] text-[18px] px-2 py-0">
                  <TbArrowsSort />
                </button>
              </div>
            </div>
            <div>
              <div className="grid w-full overflow-auto ">
                <div className="w-full px-2 grid xm:hidden items-center text-[14px] border border-y-gray-300 text-[#666161] bg-[#f1f1f1] pt-2 pb-2">
                  <div
                    className="grid items-center "
                    style={{
                      gridTemplateColumns:
                        " 0fr 0.5fr 1.5fr 0.5fr 1.5fr 1fr 0.5fr 1fr 0.5fr",
                    }}
                  >
                    <div className="text-center flex items-center">
                      <input className="h-4 w-4" type="checkbox" />
                    </div>
                    <div></div>
                    <div className="flex font-[600] gap-2 items-center text-heading  group ">
                      Product
                      <div className="flex-col hidden  text-[8px] group-hover:flex cursor-pointer  ">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">Status </div>
                    <div className="text-heading font-[600] flex gap-2 items-center group cursor-pointer  ">
                      Inventory
                      <div className="flex-col hidden  text-[8px] group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] ">
                      Sales channels
                    </div>
                    <div className="text-heading font-[600] ">Markets</div>
                    <div className="text-heading font-[600] flex gap-2 items-center group  cursor-pointer ">
                      Category
                      <div className="flex-col text-[8px] hidden group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                    <div className="text-heading font-[600] flex gap-2 group items-center cursor-pointer ">
                      Vendor
                      <div className="flex-col hidden  text-[8px] group-hover:flex">
                        <SlArrowUp /> <SlArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
                {products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full px-2 border-l-0  grid border border-y-gray-100 xm:hidden items-center text-[14px] pt-2 pb-2"
                    >
                      <div
                        className="grid items-center "
                        style={{
                          gridTemplateColumns:
                            " 0fr 0.5fr 1.5fr 0.5fr 1.5fr 1fr 0.5fr 1fr 0.5fr",
                        }}
                      >
                        <div className="text-center flex items-center">
                          <input className="h-4 w-4" type="checkbox" />
                        </div>
                        <div></div>
                        <div className="flex font-[450] gap-2 text-[#30304b] items-center text-heading group ">
                          <Link to={`/product/${product._id}`}>
                            {product.title}
                          </Link>
                          <div className="flex-col hidden  text-[8px] group-hover:flex   "></div>
                        </div>
                        <div className="text-heading bg-[#B4FED2] w-14 capitalize text-[#5FA681] px-2 py-0 border rounded-xl font-[450] ">
                          {product.status}
                        </div>
                        <div className="text-heading font-[450] text-[#666161] flex gap-2 items-center group ">
                          Inventory
                          <div className="flex-col hidden  text-[#666161] text-[8px] group-hover:flex"></div>
                        </div>
                        <div className="text-heading text-[#666161] font-[450] ">
                          Sales channels
                        </div>
                        <div className="text-heading text-[#666161] font-[450] ">Markets</div>
                        <div className="text-heading font-[450] text-[#666161] flex gap-2 items-center group  cursor-pointer ">
                          {product.product_type}
                          <div className="flex-col text-[8px] text-[#666161] hidden group-hover:flex"></div>
                        </div>
                        <div className="text-heading font-[450] text-[#666161] flex gap-2 group items-center cursor-pointer ">
                          {product.vendor}
                          <div className="flex-col hidden  text-[#666161] text-[8px] group-hover:flex"></div>
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
                          <img className="h-[45px] w-[45px] rounded-xl " src={Pic} alt="Pic" />
                        </div>
                        <div>
                        <div className="flex font-[450] gap-2 items-center text-heading group ">
                          <Link to={`/product/${product._id}`}>
                            {product.title}
                          </Link>
                        </div>
                        <div className="text-[12px] text-[#666161] font-[450] flex gap-2 items-center group ">
                          Inventory

                        </div>
                        <div className="text-[12px] text-[#666161] font-[450] flex gap-2 group items-center cursor-pointer ">
                          {product.vendor}
                        </div>
                        <div className="text-[12px] bg-[#B4FED2] w-14 capitalize text-[#5FA681] px-2 py-0 border rounded-xl font-[450] ">
                          {product.status}
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
