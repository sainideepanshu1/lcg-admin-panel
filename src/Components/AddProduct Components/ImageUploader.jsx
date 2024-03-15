import { useContext, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AddProductContext } from "../../Contexts/AddProductContext";
import toast from "react-hot-toast";

export default function ImageUploader() {
  const { product, updateProduct } = useContext(AddProductContext);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        toast.error(
          "Invalid file types! Only PNG, JPEG, GIF and WebP files are allowed."
        );
        return;
      }
      console.log(acceptedFiles);
      const newImages = [...product.images, ...acceptedFiles];
      updateProduct({ ...product, images: newImages });
    },
    [product, updateProduct]
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

  const removeImage = (index) => {
    const updatedImages = [...product.images];
    updatedImages.splice(index, 1);
    updateProduct({ ...product, images: updatedImages });
  };

  const isImage = (media) => {
    return media.type.startsWith("image/");
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
      <div className="grid gap-5 grid-cols-4">
        {product.images &&
          product.images.map((image, index) => (
            <div
              className="first:col-span-2 first:row-span-2 relative group rounded-md"
              key={index}
            >
              {isImage(image) && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="product media"
                  className="w-full h-full object-contain rounded-md"
                />
              )}

              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              >
                &#x2716;
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
