import { useContext } from "react";
import { EditProductContext } from "../../Contexts/EditProductContext";

export default function EditDetails() {
  const { updatedProduct, editProduct } = useContext(EditProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    editProduct({ ...updatedProduct, [name]: value });
  };

  return (
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
              value={updatedProduct.productCategory}
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
              value={updatedProduct.product_type}
              name="product_type"
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
              value={updatedProduct.vendor}
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
              value={updatedProduct.collections}
              onChange={handleChange}
              className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
            />
          </div>
        </div>
        <div>
          <div className="px-4 pt-4">
            <h2 className="text-heading text-heading-color font-[450]">Tags</h2>
          </div>
          <div className="p-4 pt-2">
            <div className="relative">
              <div className="rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] p-1">
                <input
                  name="tags"
                  placeholder="Input Tags"
                  autoComplete="off"
                  value={updatedProduct.tags}
                  onChange={handleChange}
                  type="text"
                  className="py-[6px] px-3 w-3/4 outline-none text-heading"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
