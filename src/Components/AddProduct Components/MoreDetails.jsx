import { useContext } from "react";
import { AddProductContext } from "../../Contexts/AddProductContext";

export default function MoreDetails() {
  const { product, updateProduct } = useContext(AddProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateProduct({ ...product, [name]: value });
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
              value={product.product_type}
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
            <h2 className="text-heading text-heading-color font-[450]">Tags</h2>
          </div>
          <div className="p-4 pt-2">
            <div className="relative">
              <div className="rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] p-1">
                <input
                  name="tags"
                  placeholder="Input Tags"
                  autoComplete="off"
                  value={product.tags}
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
