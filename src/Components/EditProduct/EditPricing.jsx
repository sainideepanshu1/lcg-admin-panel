import { useContext } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { EditProductContext } from "../../Contexts/EditProductContext";

export default function EditPricing() {
  const { updatedProduct, setUpdatedProduct } = useContext(EditProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: checked });
  };

  return (
    <div className="rounded-xl my-4 bg-white shadow-md p-4">
      <div className="px-4 pt-4">
        <h2>Pricing</h2>
      </div>
      <div className="flex flex-col gap-3 sm:gap-0">
        {updatedProduct.options.length === 0 && (
          <>
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
                    value={updatedProduct.price}
                    className="w-[90%] px-1 text-heading outline-none focus:outline-none"
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
                    value={updatedProduct.comparePrice}
                    className="w-[90%] px-1 text-heading outline-none focus:outline-none"
                  />
                  <div className="group relative">
                    <CiCircleQuestion size={20} />
                    <div className="hidden group-hover:block p-[0.75rem] absolute shadow-md text-[12px] bg-white rounded-lg w-[16.75rem]">
                      To display a markdown, enter a value higher than your
                      price.
                      <br /> Often shown with a strikethrough.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-heading">Available</div>
                <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                  <span className="p-1 text-[#616161]">&nbsp;</span>
                  <input
                    onChange={handleChange}
                    type="number"
                    placeholder="00"
                    name="available"
                    value={updatedProduct.available}
                    className="w-[90%] px-1 text-heading outline-none focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-col px-2 py-4">
                <div>
                  <div className="text-heading">SKU ID</div>
                  <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500 px-1">
                    <span className="p-1 text-[#616161]">&nbsp;</span>
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="SKU ID"
                      name="sku"
                      value={updatedProduct.sku}
                      className="w-[90%] px-1 text-heading outline-none focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-heading">Barcode</div>
                  <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                    <span className="p-1 text-[#616161]">&nbsp;</span>
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="Barcode"
                      name="barcode"
                      value={updatedProduct.barcode}
                      className="w-[90%] px-1 text-heading outline-none focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-heading">Weight (in kg)</div>
                  <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                    <span className="p-1 text-[#616161]">&nbsp;</span>
                    <input
                      onChange={handleChange}
                      type="number"
                      min="0"
                      placeholder="0.00"
                      name="weight"
                      value={updatedProduct.weight}
                      className="w-[90%] px-1 text-heading outline-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="px-2 py-4">
          <label className="text-sm flex items-center gap-2" htmlFor="tax">
            <input
              type="checkbox"
              id="tax"
              name="tax"
              checked={updatedProduct.tax || false}
              onChange={handleCheckboxChange}
            />
            Charge tax on this product
          </label>
        </div>
      </div>
    </div>
  );
}
