import { useContext } from "react";
import { AddProductContext } from "../../Contexts/AddProductContext";
import { MdCancel } from "react-icons/md";

export default function Popup() {
  const {
    product,
    editedVariant,
    setEditedVariant,
    selectedVariant,
    setIsPopupOpen,
    updateProduct,
  } = useContext(AddProductContext);

  const saveChanges = (variant) => {
    const updatedVariant = {
      ...variant,
      price: parseFloat(editedVariant.price),
      compare_at_price: parseFloat(editedVariant.compare_at_price),
      sku: editedVariant.sku,
      barcode: editedVariant.barcode,
      weight: parseFloat(editedVariant.weight),
    };

    const updatedProduct = {
      ...product,
      variants: product.variants.map((item) =>
        item === selectedVariant ? updatedVariant : item
      ),
    };

    updateProduct(updatedProduct);

    closePopup();
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setEditedVariant({
      title: "",
      price: "",
      inventory_quantity: "",
      sku: "",
      barcode: "",
      weight: "",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="sm:w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full border-2 rounded-[15px] bg-white">
          <div className="flex justify-between p-5 ">
            <p className="font-[650]">{`Edit ${editedVariant.title}`}</p>
            <button className="m-1" onClick={closePopup}>
              <MdCancel />
            </button>
          </div>
          <hr className="border-2" />
          <div className=" px-8 pt-6 pb-5 grid grid-cols-3 gap-3 items-center bg-[white] sm:flex sm:flex-col">
            <div className="sm:w-full">
              <h2 className="text-heading text-heading-color font-[450]">
                Price
              </h2>
              <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                <span className="p-1 text-[#616161]">&#8377;</span>
                <input
                  onChange={(e) =>
                    setEditedVariant({
                      ...editedVariant,
                      price: e.target.value,
                    })
                  }
                  min={0}
                  type="number"
                  placeholder="0.00"
                  name="price"
                  value={editedVariant.price}
                  className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                />
              </div>
            </div>
            <div className="sm:w-full">
              <h2 className="text-heading text-heading-color font-[450]">
                Compare at Price
              </h2>
              <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                <span className="p-1 text-[#616161]">&#8377;</span>
                <input
                  onChange={(e) =>
                    setEditedVariant({
                      ...editedVariant,
                      compare_at_price: e.target.value,
                    })
                  }
                  type="number"
                  min={0}
                  placeholder="0.00"
                  value={editedVariant.compare_at_price}
                  className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="border-[1px]" />

          <div className="px-8 py-4 bg-[white]">
            <h2 className=" text-heading-color font-[550] p-2 pb-4 text-[16px]">
              Inventory
            </h2>

            <div className="grid items-end grid-cols-3 gap-3 sm:flex sm:flex-col sm:items-center">
              <div className="w-full">
                <h2 className="text-heading text-heading-color font-[450]">
                  SKU(Stock Keeping Unit)
                </h2>
                <input
                  type="text"
                  value={editedVariant.sku}
                  onChange={(e) =>
                    setEditedVariant({
                      ...editedVariant,
                      sku: e.target.value,
                    })
                  }
                  className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>

              <div className="col-span-2 w-full">
                <h2 className="text-heading text-heading-color font-[450]">
                  Barcode (ISBN, UPC, GTIN, etc.)
                </h2>
                <input
                  type="text"
                  value={editedVariant.barcode}
                  onChange={(e) =>
                    setEditedVariant({
                      ...editedVariant,
                      barcode: e.target.value,
                    })
                  }
                  className="w-1/2 sm:w-full py-[6px] px-3 rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>
          </div>
          <hr className="border-[1px]" />

          <div className="px-8 pt-8 pb-5 bg-[white] ">
            <h2 className="text-heading text-heading-color font-[450]">
              Weight(in kg)
            </h2>
            <input
              type="number"
              value={editedVariant.weight}
              min={0}
              onChange={(e) =>
                setEditedVariant({
                  ...editedVariant,
                  weight: e.target.value,
                })
              }
              className="w-[67%] sm:w-full py-[6px] px-3 rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
            />
          </div>
          <hr className="border-[1px]" />

          <div className="bg-[white] rounded-b-[15px] flex justify-end pr-7 py-3">
            <button
              className="text-[#1A1A1A] bg-[#E3E3E3] text-heading px-2 py-1 m-2 rounded-lg"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              className=" text-[#E3E3E3] bg-[#1A1A1A] text-heading px-2 py-1 m-2 rounded-lg"
              onClick={() => {
                saveChanges(selectedVariant);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
