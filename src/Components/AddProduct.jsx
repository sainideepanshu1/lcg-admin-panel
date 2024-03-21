/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import TitleHandleDescription from "./AddProduct Components/TitleHandleDescription";
import MediaUploader from "./AddProduct Components/ImageUploader";
import Pricing from "./AddProduct Components/Pricing";
import Variants from "./AddProduct Components/Variants";
import Combinations from "./AddProduct Components/Combinations";
import Popup from "./AddProduct Components/Popup";
import { AddProductContext } from "../Contexts/AddProductContext";
import Status from "./AddProduct Components/Status";
import MoreDetails from "./AddProduct Components/MoreDetails";
import Gallery from "./AddProduct Components/Gallery";

const AddProduct = () => {
  const { isPopupOpen, showGallery, product, setProduct } =
    useContext(AddProductContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (!product) {
      toast.error("Product data is undefined.");
      return;
    }
    const requiredFields = ["title", "handle", "body_html"];

    const isAnyFieldEmpty = requiredFields.some(
      (field) => !product[field].trim()
    );
    if (isAnyFieldEmpty || product.body_html === "<p><br></p>") {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("handle", product.handle);
      formData.append("body_html", product.body_html);
      formData.append("price", product.price);
      formData.append("comparePrice", product.comparePrice);
      formData.append("product_type", product.product_type);
      formData.append("available", product.available);
      formData.append("sku", product.sku);
      formData.append("barcode", product.barcode);
      formData.append("weight", product.weight);
      formData.append("vendor", product.vendor);
      formData.append("status", product.status);
      formData.append("variants", JSON.stringify(product.variants));
      formData.append("options", JSON.stringify(product.options));

      for (let index = 0; index < product.images.length; index++) {
        formData.append("media", product.images[index]);
      }

      const res = await axios.post(
        "http://localhost:8000/api/product/add-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error || error.message, {
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    const body = document.body;

    if (isPopupOpen || showGallery) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isPopupOpen, showGallery]);

  useEffect(() => {
    return () => {
      setProduct({
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
        product_type: "",
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
        <div className="w-[75%] ml-auto mr-auto sm:w-full justify-between">
          <div className="flex items-center py-6 text-lg font-sans font-bold sm:px-2 justify-between">
            <div className="flex items-center">
              <Link className="p-1" to="/products">
                <FaArrowLeftLong />
              </Link>
              Add product
            </div>
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-1 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-[70%] flex flex-col sm:w-[93%]">
                <TitleHandleDescription />
                <MediaUploader />
                <Pricing />
                <Variants />
                <Combinations />
              </div>
              {/* right */}
              <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
                <Status />
                <MoreDetails />
              </div>
            </div>

            {isPopupOpen && <Popup />}
            {showGallery && <Gallery />}
            <div>
              <div className="rounded-xl flex items-center justify-center  p-4">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-1 rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
