import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import OutsideClickHandler from "react-outside-click-handler";
import AllProductsMobileView from "./AllProductsMobileView";
import AllProductsTabPCView from "./AllProductsTabPCView";
import { ProductsContext } from "../Contexts/ProductsContext";

const AllProducts = () => {
  const {
    setSelectAll,
    setSelectedProducts,
    setPage,
    page,
    perPage,
    toggle,
    search,
    searchTerm,
    setSearchTerm,
    sort,
    setSort,
    setToggle,
    setSearch,
    setPerPage,
  } = useContext(ProductsContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/product/getProducts?page=${page}&perPage=${perPage}`
      );
      const newProducts = response.data;

      setProducts(newProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setIsLoading(true);
      setProducts([]);
      setSelectAll(false);
      setSelectedProducts([]);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
    setIsLoading(true);
    setProducts([]);
    setSelectAll(false);
    setSelectedProducts([]);
  };

  useEffect(() => {
    fetchAllProducts();
  }, [page, perPage]);

  const handlePerPageChange = (e) => {
    setProducts([]);
    setIsLoading(true);
    const newPerPage = Number(e.target.value);
    setPerPage(newPerPage);
    setPage(1);
  };

  // ---------------search bar -------------
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchSearched();
    }
  };

  const fetchSearched = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:8000/api/product/searchProduct?search=${searchTerm}`
      );

      if (data.length > 0) {
        setProducts(data);
      } else {
        toast.error("No Results found!!!");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    return () => {
      setSearchTerm("");
    };
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
              <OutsideClickHandler onOutsideClick={() => setToggle(false)}>
                <div
                  onClick={() => {
                    setToggle(true);
                  }}
                  className="relative cursor-pointer hidden xm:block bg-[#E3E3E3] rounded-lg px-3 py-2 text-heading "
                >
                  <BsThreeDots />
                  {toggle && (
                    <div className=" flex gap-4 p-[10px] flex-col bg-white border-[1px] absolute z-10 top-[32px] right-0  hover:bg-[#E3E3E3] rounded-lg  text-heading ">
                      <button>Export</button>
                    </div>
                  )}
                </div>
              </OutsideClickHandler>

              <div className="flex xm:hidden items-center">
                <button className="hover:bg-[#E3E3E3] rounded-lg p-2 text-heading">
                  Export
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
          <div className="rounded-lg mt-[24px]  xm:p-0 bg-[#ffffff] h-[80vh] overflow-x-hidden  w-full  flex flex-col border border-stone-200">
            <div className="flex justify-between  py-3 px-1 text-[#585858] ">
              <div
                className={`${
                  search ? "hidden" : "block"
                } flex sm:overflow-y-auto  items-center`}
              >
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
                  <Link
                    to=""
                    className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[18px] xm:text-[12px] font-[600] "
                  >
                    +
                  </Link>
                </button>
              </div>

              <div
                className={`${search ? "block" : "hidden"} flex w-full gap-3 `}
              >
                <div className=" w-full    py-1 px-[8px] rounded-lg bg-[#faf8f8] focus-within:outline focus-within:bg-[#f1f1f1c2]  flex gap-2 items-center">
                  <div className="w-full flex items-center">
                    <span className="text-[#616161]">
                      <IoIosSearch />
                    </span>
                    <input
                      placeholder="Searching all products"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                      onKeyDown={onKeyDown}
                      className="w-full outline-none text-[14px] bg-[#faf8f8] text-[#303030] focus-within:bg-[#f1f1f1c2]"
                    />
                  </div>

                  <button
                    onClick={() => setSearchTerm("")}
                    className=" cursor-pointer"
                  >
                    <ImCancelCircle />
                  </button>
                </div>
                <div className="flex gap-2 ">
                  <button
                    onClick={() => setSearch(false)}
                    className={`${
                      search ? "block" : "hidden"
                    } bg-black text-[14px] text-white rounded-lg  px-[7px] py-[5px] `}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={fetchSearched}
                    className="bg-black text-[14px] text-white rounded-lg mr-[5px] px-[7px] py-[5px]"
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="flex gap-1">
                <button
                  onClick={() => setSearch(true)}
                  className={`${
                    search ? "hidden" : "block"
                  } border shadow-lg hover:bg-[#e3e3e3] transition-all xm:text-[12px] text-[18px] px-2 py-0 rounded-lg flex items-center`}
                >
                  <IoSearchOutline /> <CgSortAz />
                </button>

                <div
                  onClick={() => {
                    setSort(true);
                  }}
                  className="relative border shadow-lg cursor-pointer hover:bg-[#e3e3e3] transition-all flex items-center rounded-lg xm:text-[12px] text-[18px] px-2 py-0"
                >
                  <TbArrowsSort />
                  {sort && (
                    <OutsideClickHandler onOutsideClick={() => setSort(false)}>
                      <div className=" flex gap-2 p-[10px] flex-col bg-white border-[1px] absolute z-10  top-[40px] right-0   rounded-lg  text-heading   xm:top-[175px]  xm:right-[4px] ">
                        <h1>Sort by</h1>
                        <div className="flex flex-col gap-4 items-start">
                          <label className="flex gap-2 items-center">
                            <input
                              type="radio"
                              name="sort_option"
                              value="product_title"
                            />
                            Product title
                          </label>
                          <label className="flex gap-2 items-center">
                            <input
                              type="radio"
                              name="sort_option"
                              value="created"
                            />
                            Created
                          </label>
                          <label className="flex gap-2 items-center">
                            <input
                              type="radio"
                              name="sort_option"
                              value="updated"
                            />
                            Updated
                          </label>
                          <label className="flex gap-2 items-center">
                            <input
                              type="radio"
                              name="sort_option"
                              value="inventory"
                            />
                            Inventory
                          </label>
                          <label className="flex gap-2 items-center">
                            <input
                              type="radio"
                              name="sort_option"
                              value="product_type"
                            />
                            Product type
                          </label>
                          <label className="flex gap-2 items-center">
                            <input
                              type="radio"
                              name="sort_option"
                              value="vendor"
                            />
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
                    </OutsideClickHandler>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="grid overflow-auto  w-full ">
                <AllProductsTabPCView products={products} />
                {isLoading && <Skeleton count={50} />}
                <AllProductsMobileView products={products} />
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-3 mt-3 gap-3 items-center">
            <div className="text-heading">
              Display
              <select value={perPage} onChange={handlePerPageChange}>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              results per page
            </div>
            <button
              onClick={handlePrevPage}
              disabled={page === 1 || isLoading}
              className={`${
                page === 1 || isLoading
                  ? "text-gray-300"
                  : "active:shadow-inner active:border active:border-gray-500"
              } p-3 rounded-lg`}
            >
              <FaChevronLeft />
            </button>
            <button
              disabled={isLoading}
              onClick={handleNextPage}
              className={`${
                isLoading
                  ? "text-gray-300"
                  : "active:shadow-inner active:border active:border-gray-500"
              }  p-3 rounded-lg`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
