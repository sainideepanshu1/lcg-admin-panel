import { useCallback, useContext, useEffect, useState } from "react";
import { EditProductContext } from "../../Contexts/EditProductContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { RxCross1 } from "react-icons/rx";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function EditGallery() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageSrc, setSelectedImageSrc] = useState("");
  const [images, setImages] = useState([]);
  const {
    setShowGallery,
    setUpdatedProduct,
    selectedOption,
    setSelectedOption,
    selectVariant,
    setSelectVariant,
  } = useContext(EditProductContext);

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);
    try {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("media", file);
      });

      await axios.post("http://localhost:8000/api/product/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Try Uploading by clicking on Upload Now");
    } finally {
      fetchImages();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
    },
  });

  const handleCheckboxChange = (imageId, imageSrc) => {
    setSelectedImage((prevImageId) =>
      prevImageId === imageId ? null : imageId
    );
    setSelectedImageSrc(imageSrc);
  };

  const saveImageID = () => {
    if (selectedOption && selectedImage !== null) {
      updateVariantImageId(selectedOption, selectedImage, selectedImageSrc);
      setSelectedOption(null);
      setSelectedImage("");
      setSelectedImageSrc("");
    }
    setShowGallery(false);
  };

  const saveVariantImageChange = () => {
    if (selectVariant && selectedImage !== null) {
      handleGallerySelection(selectVariant, selectedImageSrc);
      setSelectVariant(null);
      setSelectedImage("");
      setSelectedImageSrc("");
    }
    setShowGallery(false);
  };

  const updateVariantImageId = (option1Value, newImageId, newImageSrc) => {
    setUpdatedProduct((prevProduct) => {
      const updatedVariants = prevProduct.variants.map((variant) => {
        if (variant.option1 === option1Value) {
          return { ...variant, imageId: newImageId, imageSrc: newImageSrc };
        }
        return variant;
      });
      return { ...prevProduct, variants: updatedVariants };
    });
  };

  const handleGallerySelection = (variantTitle, newImageSrc) => {
    setUpdatedProduct((prevProduct) => {
      const updatedVariants = prevProduct.variants.map((variant) => {
        if (variant.title === variantTitle) {
          return { ...variant, imageId: selectedImage, imageSrc: newImageSrc };
        }
        return variant;
      });
      return { ...prevProduct, variants: updatedVariants };
    });
  };

  async function fetchImages() {
    const res = await axios.get("http://localhost:8000/api/product/images");
    setImages(res.data.images);
  }
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="sm:w-[80%] w-[60%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full border-2 rounded-[15px] bg-white">
          <div className="flex justify-between py-2 px-5 rounded-t-[15px] bg-[#f3f3f3]">
            <h2 className="font-[650] text-heading text-[#303030]">
              Select Image
            </h2>
            <button
              onClick={() => {
                setShowGallery(false);
                setSelectedOption(null);
                setSelectVariant(null);
              }}
              className="p-1 rounded-md hover:bg-[#e7e7e7]"
            >
              <RxCross1 />
            </button>
          </div>
          <hr className="border-2" />
          <div className="h-[70vh] w-full overflow-y-auto">
            <div className="p-5 flex items-center justify-between">
              <div className="border border-[#E5E7EB] rounded-md flex gap-1 p-1 items-center">
                <FaMagnifyingGlass color="#303030" />
                <input
                  type="text"
                  className="rounded-md outline-none text-heading text-[#303030]"
                  placeholder="Search files"
                />
              </div>
            </div>
            <div className="my-5 px-5">
              <div
                {...getRootProps()}
                className={`p-4 border-dashed border-[3px]  hover:bg-[#f3f3f3]  cursor-pointer flex items-center justify-center dropzone ${
                  isDragActive ? "border-red-600" : ""
                }`}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col gap-1 items-center font-sans text-heading font-[450]">
                  <span>{isDragActive ? "Drop Here" : "Upload New"}</span>
                  <span>or drag and drop</span>
                </div>
              </div>
            </div>
            <div className="px-5">
              <ul className="grid grid-cols-6 gap-3">
                {images.map((image, index) => (
                  <li key={index}>
                    <label
                      className="cursor-pointer"
                      htmlFor={`image${index + 1}`}
                    >
                      <div
                        className={`pt-5 px-3 pb-3 flex flex-col items-center hover:bg-[#e3e3e3] ${
                          selectedImage === index + 1 ? "bg-[#e3e3e3]" : ""
                        } rounded-md transition-all `}
                      >
                        <div className="relative h-28 w-28 flex items-center">
                          <img
                            src={image.src}
                            alt={`${image.originalname} | Love Craft Gifts`}
                          />
                          <div className="absolute left-2 top-2">
                            <input
                              id={`image${index + 1}`}
                              className="w-4 h-4"
                              type="checkbox"
                              checked={selectedImage === image._id}
                              onChange={() =>
                                handleCheckboxChange(image._id, image.src)
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-[12px] text-[#303030] font-[450] text-center line-clamp-1">
                            {image.originalname}
                          </div>
                          <div className="text-[12px] text-[#303030] font-[450]">
                            PNG
                          </div>
                        </div>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="border-[1px]" />
          <div className="bg-[white] rounded-b-[15px] flex justify-end pr-7 py-3">
            <button
              onClick={() => {
                setShowGallery(false);
                setSelectedOption(null);
                setSelectVariant(null);
              }}
              className="text-[#1A1A1A] bg-[#E3E3E3] text-heading px-2 py-1 m-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                selectedOption ? saveImageID() : saveVariantImageChange();
              }}
              className="text-[#E3E3E3] bg-[#1A1A1A] text-heading px-2 py-1 m-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
