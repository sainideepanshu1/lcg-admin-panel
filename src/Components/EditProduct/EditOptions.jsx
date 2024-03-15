import { useContext } from "react";
import { EditProductContext } from "../../Contexts/EditProductContext";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

export default function EditOptions() {
  const { updatedProduct, editProduct, hiddenFields, setHiddenFields } =
    useContext(EditProductContext);

  const addNewOption = () => {
    const newOption = {
      id: Date.now(),
      name: "",
      values: [
        {
          id: Date.now(),
          value: "",
        },
      ],
    };
    editProduct({
      ...updatedProduct,
      price: "",
      comparePrice: "",
      available: "",
      sku: "",
      barcode: "",
      weight: "",
      options: [...updatedProduct.options, newOption],
    });
  };

  const deleteOption = (id) => {
    const updatedOptions = updatedProduct.options.filter(
      (option) => option.id !== id
    );

    const result =
      updatedOptions.length > 0
        ? generateVariants(updatedProduct.variants, updatedOptions)
        : [];

    editProduct((prevProduct) => ({
      ...prevProduct,
      options: updatedOptions,
      variants: result,
    }));
  };

  const handleOptionNameChange = (index, newName) => {
    const updatedOptions = [...updatedProduct.options];
    updatedOptions[index] = { ...updatedOptions[index], name: newName };
    editProduct({ ...updatedProduct, options: updatedOptions });
  };

  const handleOptionValueChange = (optionID, valueID, value) => {
    const updatedOptions = updatedProduct.options.map((option) => {
      if (option.id === optionID) {
        const updatedValues = option.values.map((optionValue) =>
          optionValue.id === valueID ? { ...optionValue, value } : optionValue
        );
        return { ...option, values: updatedValues };
      }
      return option;
    });
    editProduct({ ...updatedProduct, options: updatedOptions });
  };

  const deleteOptionValue = (optionID, valueID) => {
    const updatedOptions = updatedProduct.options
      .map((option) => {
        if (option.id === optionID) {
          const updatedValues = option.values.filter(
            (optionValue) => optionValue.id !== valueID
          );

          if (updatedValues.length === 0) {
            return null;
          }

          return { ...option, values: updatedValues };
        }
        return option;
      })
      .filter(Boolean);

    editProduct({ ...updatedProduct, options: updatedOptions });
  };

  const addNewValueToOption = (optionID) => {
    const updatedOptions = updatedProduct.options.map((option) => {
      if (option.id === optionID) {
        const newValue = {
          id: new Date().getTime(),
          value: "",
        };
        return { ...option, values: [...option.values, newValue] };
      }
      return option;
    });

    editProduct({ ...updatedProduct, options: updatedOptions });
  };

  const hideOption = (optionID) => {
    const isFieldsValid = updatedProduct.options
      .find((option) => option.id === optionID)
      .values.every((value) => value.value.trim() !== "");

    if (isFieldsValid) {
      setHiddenFields((prevHiddenFields) => [...prevHiddenFields, optionID]);
      saveVariants(updatedProduct.options);
    } else {
      toast.error("Please delete or fill all empty input fields");
    }
  };

  const showOption = (mieldId) => {
    setHiddenFields((prevHiddenFields) =>
      prevHiddenFields.filter((id) => id !== mieldId)
    );
  };

  const saveVariants = (options) => {
    const result = generateVariants(updatedProduct.variants, options);
    editProduct({ ...updatedProduct, variants: result });
  };

  const generateVariants = (
    currentProductVariants,
    optionsArray,
    currentVariant = {},
    currentIndex = 0,
    generatedVariants = []
  ) => {
    if (currentIndex === optionsArray.length) {
      const hasOptionValuesOnly = Object.values(currentVariant).every(
        (value) => value === ""
      );

      if (!hasOptionValuesOnly) {
        const existingVariantIndex = currentProductVariants.findIndex(
          (existingVariant) =>
            optionsArray.every(
              (option, index) =>
                existingVariant[`option${index + 1}`] ===
                currentVariant[`option${index + 1}`]
            )
        );

        if (existingVariantIndex !== -1) {
          const existingVariant = currentProductVariants[existingVariantIndex];
          const updatedVariant = {
            ...existingVariant,
            ...currentVariant,
            title: Object.keys(currentVariant)
              .filter((key) => key.includes("option"))
              .map((key) => currentVariant[key])
              .filter((value) => value !== "")
              .join("/"),
          };
          generatedVariants.push(updatedVariant);
        } else {
          const newVariant = {
            title: Object.keys(currentVariant)
              .filter((key) => key.includes("option"))
              .map((key) => currentVariant[key])
              .filter((value) => value !== "")
              .join("/"),
            price: "",
            compare_at_price: "",
            inventory_quantity: "",
            sku: "",
            barcode: "",
            weight: "",
            ...currentVariant,
          };
          generatedVariants.push(newVariant);
        }
      }

      return generatedVariants;
    }

    const currentOption = optionsArray[currentIndex];

    currentOption.values.forEach((value) => {
      const newVariant = {
        ...currentVariant,
        [`option${currentIndex + 1}`]: value.value,
      };
      generateVariants(
        currentProductVariants,
        optionsArray,
        newVariant,
        currentIndex + 1,
        generatedVariants
      );
    });

    return generatedVariants;
  };

  return (
    <div className="rounded-xl my-4 bg-white shadow-md p-4">
      <div className="px-4 py-4">
        <h2>Variants</h2>
      </div>
      <div>
        {updatedProduct.options.map((option, index) => (
          <div key={option.id} className="mb-4">
            <div className="flex items-center mb-2">
              <input
                type="text"
                list="options"
                placeholder="Option Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) => handleOptionNameChange(index, e.target.value)}
                value={option.name}
              />
              <datalist id="options">
                <option value="Size">Size</option>
                <option value="Color">Color</option>
                <option value="Material">Material</option>
                <option value="Style">Style</option>
              </datalist>

              <button onClick={() => deleteOption(option.id)} className="ml-2">
                <MdDelete size={25} color="#303030" />
              </button>
            </div>

            <div
              className={`${hiddenFields.includes(option.id) ? "hidden" : ""}`}
            >
              {option.values.map((value) => (
                <div key={value.id} className="flex items-center mb-1">
                  <input
                    type="text"
                    placeholder="Option Value"
                    className="my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5"
                    value={value.value}
                    onChange={(e) =>
                      handleOptionValueChange(
                        option.id,
                        value.id,
                        e.target.value
                      )
                    }
                    id={`value${value.id}`}
                    name={`value${value.id}`}
                  />
                  <button
                    onClick={() => deleteOptionValue(option.id, value.id)}
                    className="ml-2"
                  >
                    <MdDelete size={20} color="#303030" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              {hiddenFields.includes(option.id) ? (
                <button
                  onClick={() => showOption(option.id)}
                  className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-2 rounded-lg"
                >
                  Edit
                </button>
              ) : (
                <>
                  <button
                    onClick={() => addNewValueToOption(option.id)}
                    className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-2 rounded-lg"
                  >
                    Add New Field
                  </button>
                  <button
                    onClick={() => hideOption(option.id)}
                    className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-2 rounded-lg"
                  >
                    Save
                  </button>
                </>
              )}
            </div>

            <hr className="border-[2px] my-2" />
          </div>
        ))}

        <button
          onClick={addNewOption}
          className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-2 mt-2 rounded-lg"
        >
          Add New Option
        </button>
      </div>
    </div>
  );
}
