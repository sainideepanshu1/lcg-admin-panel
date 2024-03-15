import { useContext } from "react";
import { EditProductContext } from "../../Contexts/EditProductContext";

export default function EditStatus() {
  const { editProduct, updatedProduct } = useContext(EditProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    editProduct({ ...updatedProduct, [name]: value });
  };

  return (
    <div className="sm:mt-3 sm:w-full">
      <div className="bg-white rounded-[0.75rem] shadow-md">
        <div className="px-4 pt-4">
          <h2 className="text-heading text-heading-color font-[650]">Status</h2>
        </div>
        <div className="p-4 pt-2">
          <select
            value={updatedProduct.status}
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
  );
}
