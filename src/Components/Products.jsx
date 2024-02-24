import toast from "react-hot-toast";
import  { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";
import {  BsThreeDots } from "react-icons/bs";
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
import { useRef } from "react";
import { ImCancelCircle } from "react-icons/im";

const Products = () => {
  // ---------------Search bar -------------
  const [Search, setSearch] = useState();
  const [sort, setSort] = useState();
  const [perPage, setPerPage] = useState(50);
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
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
      setSort(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleSortClick);

    return () => {
      document.removeEventListener("click", handleSortClick);
    };
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/product/getProducts?page=${page}&perPage=${perPage}`
      );
      const newProducts = response.data;

      setProducts(newProducts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
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

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    if (!selectAll) {
      const allProductIds = products.map((product) => product._id);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const handlePerPageChange = (e) => {
    const newPerPage = Number(e.target.value);
    setPerPage(newPerPage);
    setPage(1);
  };

  const handleSelectProduct = (productId) => {
    const updatedSelection = selectedProducts.includes(productId)
      ? selectedProducts.filter((id) => id !== productId)
      : [...selectedProducts, productId];

    setSelectedProducts(updatedSelection);
  };

  // ---------------Search bar -------------

  function handleSearch() {
    setSearch(!Search);
  }

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
        setIsLoading(false);

      } else {
        toast.error("No Results found!!!");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products. Please try again later.");
    }

  };


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
              <span
                ref={imexRef}
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="relative cursor-pointer hidden xm:block bg-[#E3E3E3] rounded-lg px-3 py-2 text-heading "
              >
                <BsThreeDots />
              </span>
              <div>
                {toggle && (
                  <div className=" flex gap-4 p-[10px] flex-col bg-white border-[1px] absolute  top-[100px] right-[174px]  hover:bg-[#E3E3E3] rounded-lg  text-heading ">
                    <button>Export</button>
                    
                  </div>
                )}
              </div>

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
                className={`${Search ? "hidden" : "block"
                  } flex   sm:overflow-y-auto  items-center`}
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
                className={`${Search ? "block" : "hidden"} flex w-full gap-3 `}
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
                      className="w-full outline-none text-[14px] bg-[#faf8f8] text-[#303030] focus-within:bg-[#f1f1f1c2]"
                    />
                  </div>

                  <span className=" cursor-pointer">
                    <ImCancelCircle />
                  </span>
                </div>
                <div className="flex gap-2 ">
                  <button
                    onClick={handleSearch}
                    className={`${Search ? "block" : "hidden"
                      } bg-black text-[14px] text-white rounded-lg  px-[7px] py-[5px] `}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={fetchSearched}
                    className="  bg-black text-[14px] text-white rounded-lg mr-[5px]
          px-[7px] py-[5px]"
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="flex gap-1">
                <button
                  onClick={handleSearch}
                  className={`${Search ? "hidden" : "block"
                    } border shadow-lg hover:bg-[#e3e3e3] transition-all xm:text-[12px] text-[18px] px-2 py-0 rounded-lg flex items-center`}
                >
                  <IoSearchOutline /> <CgSortAz />
                </button>

                <span
                  ref={sortref}
                  onClick={() => {
                    setSort(!sort);
                  }}
                  className="border shadow-lg cursor-pointer hover:bg-[#e3e3e3] transition-all flex items-center rounded-lg xm:text-[12px] text-[18px] px-2 py-0"
                >
                  <TbArrowsSort />
                </span>
                {sort && (
                  <div className="">
                    <div className=" flex gap-2 p-[10px] flex-col bg-white border-[1px] absolute  top-[200px] right-[48px]   rounded-lg  text-heading   xm:top-[175px]  xm:right-[4px] ">
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
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="grid overflow-auto  w-full ">
                <div className="w-full px-2 grid xm:hidden  items-center  border border-y-gray-300 text-[#666161] bg-[#f1f1f1] pt-2 pb-2">
                  <div className="destop_type flex gap-8 items-center table-heading ">
                    <div className=" flex gap-8  sticky left-0 border-y-gray-300 text-[#666161] bg-[#f1f1f1] w-[100px] ">
                      <div className="text-center  flex items-center">
                        <input
                          className="h-4 w-4"
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />
                      </div>
                      <div className="h-[45px] w-[45px] "></div>
                    </div>
                    <div className="flex sm:overflow-x-hidden gap-4">
                      <div className="flex font-[600] gap-2 w-[200px] items-center text-[12px]  group ">
                        Product
                        <div className="flex-col hidden  text-[8px] group-hover:flex cursor-pointer  ">
                          <SlArrowUp /> <SlArrowDown />
                        </div>
                      </div>
                      <div className="text-[12px] w-[100px] text-center font-[600] ">
                        Status{" "}
                      </div>
                      <div className="text-[12px] font-[600] w-[200px] flex gap-2 items-center group cursor-pointer  ">
                        Inventory
                        <div className="flex-col hidden  text-[8px] group-hover:flex">
                          <SlArrowUp /> <SlArrowDown />
                        </div>
                      </div>
                      <div className="text-[12px] w-[100px]  font-[600] ">
                        Sales channels
                      </div>
                      <div className="text-[12px] w-[100px] text-center font-[600] ">
                        Markets
                      </div>
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
                {isLoading && <Skeleton count={50} />}
                <div>
                  {products.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full px-2 border-l-0 grid border border-y-gray-100 xm:hidden items-center text-[14px] pt-2 pb-2"
                      >
                        <div
                          className="flex gap-8 items-center "
                          style={{
                            gridTemplateColumns: " 1.5fr 1.5fr ",
                          }}
                        >
                          <div className=" flex gap-6 sticky left-0 bg-white border-y-gray-300 text-[#666161]  w-[100px] ">
                            <div className="text-center  flex items-center">
                              <input
                                className="h-4  w-4"
                                type="checkbox"
                                checked={selectedProducts.includes(product._id)}
                                onChange={() => {
                                  handleSelectProduct(product._id);
                                }}
                              />
                            </div>
                            <div className="h-[45px] w-[45px] ">
                              {product.images.length > 0 ? (
                                <img
                                  className="w-[45px] rounded-xl"
                                  src={product.images[0].src}
                                  alt="Pic"
                                />
                              ) : (
                                <div>No Image</div>
                              )}

                            </div>
                          </div>
                          <div className="flex items-center  gap-4">
                            <div className="flex font-[450] gap-2 w-[200px] text-[#000] items-center pl-2 pr-2  text-[12px] hover:underline group ">
                              <Link to={`/product/${product._id}`}>
                                {product.title}
                              </Link>
                            </div>
                            <div className="text-[12px] w-[100px] h-[27px] bg-[#B4FED2]  capitalize text-[#0c5132] text-center  border rounded-xl  p-1 ">
                              {product.status}
                            </div>
                            <div className="text-[12px] w-[200px] font-[450] text-[#666161] flex gap-2 items-center group ">
                              {`${product.variants.reduce((total, variant) => {
                                return total + variant.inventory_quantity;
                              }, 0)} in stock for ${product.variants.length
                                } variants`}
                            </div>
                            <div className="text-[12px] w-[100px] text-[#666161] font-[450] ">
                              Sales channels
                            </div>
                            <div className="text-[12px] w-[100px] text-[#666161] text-center font-[450] ">
                              Markets
                            </div>
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
                </div>
                {products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full border-l-0 border-r-0 px-2 pl-[1rem] hidden xm:block lg:hidden items-center border border-y-gray-100 text-[#30304b] text-[0.813rem] pt-3 pb-3"
                    >
                      <div className="flex gap-4">
                        <div>
                          {" "}
                          {product.images.length > 0 ? (
                            <img
                              className="w-[45px] rounded-xl"
                              src={product.images[0].src}
                              alt="Pic"
                            />
                          ) : (
                            <div>No Image</div>
                          )}

                        </div>
                        <div>
                          <div className="flex font-[450] gap-2 items-center text-[14px] group ">
                            <Link to={`/product/${product._id}`}>
                              {product.title}
                            </Link>
                          </div>
                          <div className="text-[14px] text-[#666161] font-[450] flex gap-2 items-center group ">
                            {`${product.variants.reduce((total, variant) => {
                              return total + variant.inventory_quantity;
                            }, 0)} in stock for ${product.variants.length
                              } variants`}
                          </div>
                          <div className="text-[14px] text-[#666161] font-[450] flex gap-2 group items-center cursor-pointer ">
                            {product.vendor}
                          </div>
                          <div>
                            <div className="text-[14px] bg-[#B4FED2] w-[80px]  px-4 capitalize text-[#0c5132] border rounded-xl font-[450] ">
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
              disabled={page === 1}
              className={`${page === 1
                  ? "text-gray-300"
                  : "active:shadow-inner active:border active:border-gray-500"
                } p-3 rounded-lg`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNextPage}
              className="active:shadow-inner active:border active:border-gray-500 p-3 rounded-lg"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );

              }

export default Products;
