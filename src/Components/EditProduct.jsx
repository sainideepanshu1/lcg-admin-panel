import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FaReddit,
  FaChevronDown,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { PiLinkSimpleLight } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import EditCombinations from "./EditProduct/EditCombinations";
import { EditProductContext } from "../Contexts/EditProductContext";
import EditTitleHandleDesc from "./EditProduct/EditTitleHandleDesc";
import EditProductImages from "./EditProduct/EditProductImages";
import EditPricing from "./EditProduct/EditPricing";
import EditOptions from "./EditProduct/EditOptions";
import EditGallery from "./EditProduct/EditGallery";
import EditPopup from "./EditProduct/EditPopup";
import EditStatus from "./EditProduct/EditStatus";
import EditDetails from "./EditProduct/EditDetails";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updatedProduct, setUpdatedProduct, isPopupOpen, showGallery } =
    useContext(EditProductContext);
  const [Dot, setDot] = useState(false);
  const [share, setShare] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  const getProductByID = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/product/getProduct/${id}`
      );
      setUpdatedProduct({
        title: data.product.title || "",
        handle: data.product.handle || "",
        body_html: data.product.body_html || "",
        images: data.product.images || [],
        options: data.product.options || [],
        variants: data.product.variants || [],
        price: data.product.price || "",
        comparePrice: data.product.comparePrice || "",
        available: data.product.available || "",
        sku: data.product.sku || "",
        barcode: data.product.barcode || "",
        weight: data.product.weight || "",
        status: data.product.status || "Draft",
        productCategory: data.product.productCategory || "",
        product_type: data.product.product_type || "",
        tags: data.product.tags || "",
        collections: data.product.collections || "",
        vendor: data.product.vendor || "",
        tax: data.product.tax || false,
      });
      const editedProduct = {
        ...data.product,
        combinations: data.product.variants,
      };

      delete editedProduct.variants;

      setEditProduct(editedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const body = document.body;

    if (isPopupOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isPopupOpen]);

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

  const handleSubmit = async () => {
    try {
      updatedProduct.variants = updatedProduct.variants.map((variant) =>
        typeof variant.imageId === "object"
          ? { ...variant, imageId: String(variant.imageId._id) }
          : variant
      );
      const res = await axios.put(
        `http://localhost:8000/api/product/updateProduct/${id}`,
        updatedProduct
      );
      if (res.data.success) {
        toast.success("Product Updated Successfully");
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { duration: 2000 });
    }
  };

  useEffect(() => {
    getProductByID();
  }, [id]);

  useEffect(() => {
    return () => {
      setUpdatedProduct({
        title: "",
        handle: "",
        body_html: "",
        images: [],
        options: [],
        variants: [],
        price: "",
        comparePrice: "",
        available: "",
        sku: "",
        barcode: "",
        weight: "",
        status: "",
        productCategory: "",
        productType: "",
        tags: "",
        collections: "",
        vendor: "",
        tax: false,
      });
    };
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
              <div className="break-words">{editProduct.title}</div>
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
                <div
                  ref={DotRef}
                  onClick={() => {
                    setDot(!Dot);
                  }}
                  className="hidden px-[8px] py-[7px] mx-[10px] rounded-lg border-[1px] bg-[#E3E3E3] hover:bg-[rgb(206,204,204)] cursor-pointer sm:block"
                >
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
          <div>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-[70%] flex flex-col sm:w-[93%]">
                <EditTitleHandleDesc />
                <EditProductImages />
                <EditPricing />
                <EditOptions />
                <EditCombinations />
              </div>

              {/* right */}
              <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
                <EditStatus />
                <EditDetails />
              </div>
            </div>

            {isPopupOpen && <EditPopup />}
            {showGallery && <EditGallery />}
            <div>
              <div className="rounded-xl flex items-center justify-center  p-4">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#1A1A1A] text-[#E3E3E3] text-heading p-3 rounded-lg"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
