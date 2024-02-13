import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Customers } from "../Data/CustomerData";
import { FaReddit } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { PiLinkSimpleLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import Editor from "./Editor";


const Product = () => {
    const { id } = useParams();
    const [Dot, setDot] = useState(false);
  const [share, setShare] = useState(false);
  const [productData, setProductData] = useState({});

  const optionRef = useRef();
  const handleClickOutside = (event) => {
    if (optionRef.current && !optionRef.current.contains(event.target)) {
      setShare(false);
    } };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);




  ///Mobile three dot options
const [Dot,setDot] =useState(false);
const DotRef =useRef();



const handleClick =(event)=>{
  if(DotRef.current && !DotRef.current.contains(event.target)){
    setDot(false);

  }}
  useEffect(()=>{
    document.addEventListener("click",handleClick);

    return()=>{
      document.removeEventListener("click",handleChange);
    }

  },[])

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    comparePrice: "",
    status: "",
    productCategory: "",
    productType: "",
    tags: "",
    collections: "",
    vendor: "",
    tax: false,
  });
    
  const updateDescription = (newDescription) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      description: newDescription,
    }));
  };
    
  const optionRef = useRef();
  const handleClickOutside = (event) => {
    if (optionRef.current && !optionRef.current.contains(event.target)) {
      setShare(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  ///Mobile three dot options
  const DotRef = useRef();

  const handleClick = (event) => {
    if (DotRef.current && !DotRef.current.contains(event.target)) {
      setDot(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // ----------------
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    try {
     
    } catch (error) {
      console.log(error);
      toast.error(error.message, { duration: 2000 });
    }
  };

    const getProductByID = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/product/getProduct/${id}`
      );

      setProductData(data.product);

      setProduct({
        title: data.product.title || "",
        description: data.product.body_html || "",
        price: data.product.price || "",
        comparePrice: data.product.comparePrice || "",
        status: data.product.status || "",
        productCategory: data.product.productCategory || "",
        productType: data.product.product_type || "",
        tags: data.product.tags || "",
        collections: data.product.collections || "",
        vendor: data.product.vendor || "",
        tax: data.product.tax || false,
      });
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
    getProductByID();
  }, []);

  
  
  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-full">
        <div className="w-[62.375rem] ml-auto mr-auto sm:w-full">
          <div className="flex items-center  justify-between lg: gap-[10px] ">
            <div className="flex   items-center py-6 text-lg font-sans font-bold sm:px-2 sm:flex-wrap ">
              <Link className="p-1" to="/">
                <FaArrowLeftLong />
              </Link>
              <div className="break-words">{product.title}</div>

            </div>

            <div>
              <div className="flex items-center gap-[8px] px-[10px] sm:hidden">
                <div className="flex px-[10px] bg-[#E3E3E3] hover:bg-[rgb(206,204,204)]  py-[4px] rounded-md text-[13px] font-medium cursor-pointer transition duration-2000">
                  <h3>Duplicate</h3>
                </div>
                <div className=" flex  px-[10px] bg-[#E3E3E3] hover:bg-[rgb(206,204,204)]  py-[4px] rounded-md text-[13px] font-medium cursor-pointer transition duration-2000">
                  <h3>View</h3>
                </div>

                <div>
                  <div
                    ref={optionRef}
                    onClick={() => {
                      setShare(!share);
                    }}
                    className="  flex gap-3 items-center justify-center px-[10px] bg-[#E3E3E3] hover:bg-[rgb(206,204,204)]  py-[4px] rounded-md text-[13px] font-medium cursor-pointer transition duration-2000"
                  >
                    <h3>Share</h3>
                    <h3>
                      <FaChevronDown />
                    </h3>
                  </div>
                  {share && (                    
                      <div className="  flex flex-col  gap-3 absolute  top-[118px]   bg-white rounded-lg  border-[1px] text-[#4A4A4A]  px-[12px] py-[10px] sm:right-[10px]">
                        <div className="">
                          <a className="flex gap-2 items-center" href="/">
                            <span>
                              <PiLinkSimpleLight />
                            </span>
                            <span className="text-[14px]">Copy link</span>
                          </a>
                        </div>

                      <div>
                        <a className="flex gap-2 items-center" href="/">
                          <span>
                            <FaFacebook />
                          </span>
                          <span className="text-[14px]">Facebook</span>
                        </a>
                      </div>

                      <div>
                        <a className="flex gap-2 items-center" href="/">
                          <span>
                            <FaTwitter />
                          </span>
                          <span className="text-[14px]">Twitter</span>
                        </a>
                      </div>

                      <div>
                        <a className="flex gap-2 items-center" href="/">
                          <span>
                            <FaReddit />
                          </span>
                          <span className="text-[14px]">Reddit</span>
                        </a>
                      </div>

                      <div>
                        <a className="flex gap-2 items-center" href="/">
                          <span>
                            <FaLinkedin />
                          </span>
                          <span className="text-[14px]">LinkedIn</span>
                        </a>
                      </div>

                        <div>
                          <a className="flex gap-2 items-center" href="/">
                            <span>
                              <FaPinterest />
                            </span>
                            <span className="text-[14px]">Pinterest</span>
                          </a>
                        </div>
                      </div>
                    
                  )}
                </div>
              </div>

              <div>
                <div ref={DotRef}
                    onClick={()=>{
                      setDot(!Dot);
                    }} className="hidden px-[8px] py-[7px] mx-[10px] rounded-lg border-[1px] bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] cursor-pointer sm:block">
                  
                  <span className="text-black">
                    <HiDotsHorizontal />
                  </span>
                </div>
                    
                {Dot && (
                <div className="Menusidebar overflow-scroll w-[280px]  flex flex-col absolute  top-[124px]   bg-white rounded-lg  border-[1px] text-[#4A4A4A]  px-[12px] py-[10px] sm:right-[10px] xm:top-[178px]">
                  <div className=" flex text-[14px] flex-col gap-3 pb-[10px]">
                    <h3>Duplicate</h3>
                    <h3>View</h3>
                  </div>
                  <hr className="" />
                  <div className="py-[10px]">
                    <h3 className="text-[14px] text-[#000000d3]">Share</h3>

                    <div className=" flex flex-col gap-3 pt-2">
                      <div className="">
                        <a className="flex gap-2 items-center" href="/">
                          <span>
                            <PiLinkSimpleLight />
                          </span>
                          <span className="text-[14px]">Copy link</span>
                        </a>
                      </div>

                        <div>
                          <a className="flex gap-2 items-center" href="/">
                            <span>
                              <FaFacebook />
                            </span>
                            <span className="text-[14px]">Facebook</span>
                          </a>
                        </div>

                        <div>
                          <a className="flex gap-2 items-center" href="/">
                            <span>
                              <FaTwitter />
                            </span>
                            <span className="text-[14px]">Twitter</span>
                          </a>
                        </div>

                        <div>
                          <a className="flex gap-2 items-center" href="/">
                            <span>
                              <FaReddit />
                            </span>
                            <span className="text-[14px]">Reddit</span>
                          </a>
                        </div>

                        <div>
                          <a className="flex gap-2 items-center" href="/">
                            <span>
                              <FaLinkedin />
                            </span>
                            <span className="text-[14px]">LinkedIn</span>
                          </a>
                        </div>

                      <div>
                        <a className="flex gap-2 items-center" href="/">
                          <span>
                            <FaPinterest />
                          </span>
                          <span className="text-[14px]">Pinterest</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-[70%] flex flex-col sm:w-[93%]">
                <div className="rounded-xl bg-white shadow-md p-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Title
                        </label>
                      </div>
                      <input
                        className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={product.title}
                        placeholder="Short sleeve t-shirt"
                      />
                    </div>
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Description
                        </label>
                      </div>
                      <Editor
                        description={product.description}
                        updateDescription={updateDescription}
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-5 pt-5">Media</div>
                  <div className="p-4">
                    <input type="file" className="w-full" name="" id="" />
                  </div>
                </div>
                <div className="rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-4 pt-4">
                    <h2>Pricing</h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-3 px-2 py-4 gap-3 sm:flex sm:flex-col">
                      <div>
                        <div className="text-heading">Price</div>
                        <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                          <span className="p-1 text-[#616161]">&#8377;</span>
                          <input
                            onChange={handleChange}
                            type="number"
                            placeholder="0.00"
                            name="price"
                            value={product.price}
                            className="w-[90%] px-1 outline-none focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="text-heading">Compare-at price</div>
                        <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                          <span className="p-1 text-[#616161]">&#8377;</span>
                          <input
                            onChange={handleChange}
                            type="number"
                            placeholder="0.00"
                            name="comparePrice"
                            value={product.comparePrice}
                            className="w-[90%] px-1 outline-none focus:outline-none"
                          />
                          <div className="group relative">
                            <CiCircleQuestion size={20} />
                            <div className="hidden group-hover:block p-[0.75rem] absolute shadow-md text-[12px] bg-white rounded-lg w-[16.75rem]">
                              To display a markdown, enter a value higher than
                              your price.
                              <br /> Often shown with a strikethrough.
                            </div>
                          </div>
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
                          checked={product.tax || false}
                          onChange={handleCheckboxChange}
                        />
                        Charge tax on this product
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
                <div className="sm:mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div className="px-4 pt-4">
                      <h2 className="text-heading text-heading-color font-[650]">
                        Status
                      </h2>
                    </div>
                    <div className="p-4 pt-2">
                      <select
                        value={product.status}
                        onChange={handleChange}
                        className="w-full text-heading border-[#8a8a8a] border rounded-[0.5rem] py-[6px] pl-[12px] pr-[8px]"
                        name="status"
                        id=""
                      >
                        <option value="" disabled>
                          --Select--
                        </option>
                        <option value="Active">Active</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Product Category
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          placeholder="Search"
                          name="productCategory"
                          onChange={handleChange}
                          value={product.productCategory}
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Product Type
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          value={product.productType}
                          name="productType"
                          onChange={handleChange}
                          placeholder="Add Custom Category"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Vendor
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          name="vendor"
                          value={product.vendor}
                          onChange={handleChange}
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Collections
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          name="collections"
                          value={product.collections}
                          onChange={handleChange}
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Tags
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          name="tags"
                          value={product.tags}
                          onChange={handleChange}
                          type="text"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl flex items-center justify-center  p-4">
                <button
                  type="submit"
                  className="bg-[#1A1A1A] text-[#E3E3E3] text-heading p-3 rounded-lg"
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
