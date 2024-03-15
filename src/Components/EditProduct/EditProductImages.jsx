/* eslint-disable react/prop-types */
import { useContext, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { EditProductContext } from "../../Contexts/EditProductContext";

export default function EditProductImages() {
  const { id } = useParams();
  const { updatedProduct, editProduct } = useContext(EditProductContext);
  const [loading, setLoading] = useState(0);
  const [selectedImage, setSelectedImage] = useState([]);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        toast.error(
          "Invalid file types! Only PNG, JPEG, GIF and WebP files are allowed."
        );
        return;
      }

      setLoading(acceptedFiles.length);
      try {
        const formData = new FormData();
        acceptedFiles.forEach((file) => {
          formData.append("media", file);
        });
        const res = await axios.post(
          `http://localhost:8000/api/product/upload/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const newImages = [
          ...updatedProduct.images,
          ...res.data.uploadedImages,
        ];
        editProduct({ ...updatedProduct, images: newImages });
      } catch (error) {
        toast.error("Error uploading images:");
      } finally {
        setLoading(0);
      }
    },
    [id, updatedProduct, editProduct]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
      "image/gif": [".gif"],
    },
  });

  const handleCheckboxChange = (id) => {
    if (selectedImage.includes(id)) {
      setSelectedImage(selectedImage.filter((imageId) => imageId !== id));
    } else {
      setSelectedImage([...selectedImage, id]);
    }
  };

  const deleteFiles = async () => {
    if (updatedProduct.images.length === 1) {
      toast.error(
        "Please Add New Image to delete it. Last image cannot be deleted"
      );
      setSelectedImage([]);
      return;
    }
    if (confirm("Are you sure you want to delete the selected image")) {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/product/delete/${id}`,
          {
            imageIds: selectedImage,
          }
        );

        if (response.data.success) {
          const updatedImages = updatedProduct.images.filter(
            (image) => !selectedImage.includes(image._id)
          );
          editProduct({ ...updatedProduct, images: updatedImages });
          toast.success("Images Deleted Successfully");
          setSelectedImage([]);
        } else {
          toast.error("Error Deleting Images");
        }
      } catch (error) {
        toast.error("Error Deleting Images");
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl my-4 bg-white shadow-md p-4">
      <div className="px-5 pt-5">Media</div>
      <div
        {...getRootProps()}
        className={`p-4 border-dashed border-[3px]  hover:bg-[#ebeaea] transition-all cursor-pointer flex items-center justify-center dropzone ${
          isDragActive ? "border-red-600" : ""
        }`}
      >
        <input {...getInputProps()} />
        <p className="font-sans text-heading font-[450]">
          {isDragActive ? "Drop Here" : "Upload New"}
        </p>
      </div>
      <div className="relative">
        <div className="grid gap-5 grid-cols-4 mt-10">
          {updatedProduct.images &&
            updatedProduct.images.map((image, index) => (
              <div
                className="first:col-span-2 first:row-span-2 relative group rounded-md"
                key={index}
              >
                <label htmlFor={`checkbox${index + 1}`}>
                  <img
                    src={image.src}
                    alt="product media"
                    className="w-full h-full object-contain rounded-md"
                  />
                  <input
                    type="checkbox"
                    className={`absolute top-2 left-2 w-4 h-4 hover:block  ${
                      selectedImage.includes(image._id) ? "block" : "hidden"
                    }`}
                    name=""
                    id={`checkbox${index + 1}`}
                    checked={selectedImage.includes(image._id)}
                    onChange={() => handleCheckboxChange(image._id)}
                  />
                </label>
              </div>
            ))}
          {loading > 0 && (
            <div className="col-span-4 flex items-center justify-center">
              <ClipLoader color={"#000"} loading={true} size={30} />
            </div>
          )}
        </div>
        <div className="absolute top-0 right-0">
          {selectedImage.length > 0 && (
            <button
              onClick={deleteFiles}
              className="text-[#8e1f0b] text-[16px] p-2 hover:underline"
            >
              Delete {selectedImage.length === 1 ? "File" : "Files"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
