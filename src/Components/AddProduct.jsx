import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Editor from "./Editor";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    media: [],
    price: "",
    comparePrice: "",
    status: "",
    productCategory: "",
    productType: "",
    tags: "",
    collections: "",
    vendor: "",
    tax: false,
  });

  const updateDescription = (newDescription) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      description: newDescription,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const mieldsWithoutId = mields.map(({ id, fields, ...rest }) => ({
        name: `Choose ${rest.optionName}`,
        values: fields.map(({ id, ...fieldRest }) => fieldRest.value),
      }));

      const res = await axios.post(
        "http://localhost:8000/api/product/add-product",
        {
          title: product.title,
          body_html: product.description,
          product_type: product.productType,
          vendor: product.vendor,
          status: product.status,
          variants: combinations,
          options: mieldsWithoutId,
        }
      );
      toast.success(res.data.message);
      console.log("Form submitted with data:", product);
      // setProduct({
      //   title: "",
      //   description: "",
      //   price: "",
      //   comparePrice: "",
      //   status: "",
      //   productCategory: "",
      //   productType: "",
      //   tags: "",
      //   collections: "",
      //   vendor: "",
      //   tax: false,
      // });
      // setMields([]);
    } catch (error) {
      console.log(error);
      toast.error(error.message, { duration: 2000 });
    }
  };

  const [mields, setMields] = useState([]);
  const [hiddenFields, setHiddenFields] = useState([]);
  const [combinations, setCombinations] = useState([]);

  const hideMield = (mieldId) => {
    const isFieldsValid = mields
      .find((mield) => mield.id === mieldId)
      .fields.every((field) => field.value.trim() !== "");

    if (isFieldsValid) {
      setHiddenFields((prevHiddenFields) => [...prevHiddenFields, mieldId]);
      generateCombinations();
    } else {
      toast.error("Please delete or fill all empty input fields");
    }
  };

  const showMield = (mieldId) => {
    setHiddenFields((prevHiddenFields) =>
      prevHiddenFields.filter((id) => id !== mieldId)
    );
  };

  const addNewField = () => {
    const newMield = {
      id: new Date().getTime(),
      optionName: "",
      fields: [
        {
          id: new Date().getTime(),
          value: "",
        },
      ],
    };
    setMields([...mields, newMield]);
  };

  const deleteMield = (mieldId) => {
    setMields((prevMields) => {
      const updatedMields = prevMields.filter((mield) => mield.id !== mieldId);
      setHiddenFields((prevHiddenFields) =>
        prevHiddenFields.filter((id) => id !== mieldId)
      );

      return updatedMields;
    });
  };

  useEffect(() => {
    generateCombinations();
  }, [mields]);

  const deleteField = (mieldId, fieldId) => {
    const updatedMields = mields.map((mield) => {
      if (mield.id === mieldId) {
        if (mield.fields.length > 1) {
          const updatedFields = mield.fields.filter(
            (field) => field.id !== fieldId
          );
          return { ...mield, fields: updatedFields };
        }
      }
      return mield;
    });
    setMields(updatedMields);
  };

  const addNewFieldToMield = (mieldId) => {
    const mieldIndex = mields.findIndex((mield) => mield.id === mieldId);

    if (mieldIndex !== -1) {
      const mieldToUpdate = mields[mieldIndex];

      const newField = {
        id: new Date().getTime(),
        value: "",
      };

      const updatedMields = [
        ...mields.slice(0, mieldIndex),
        {
          ...mieldToUpdate,
          fields: [...mieldToUpdate.fields, newField],
        },
        ...mields.slice(mieldIndex + 1),
      ];

      setMields(updatedMields);
    }
  };

  const handleInputChange = (mieldId, fieldId, value) => {
    const updatedMields = mields.map((mield) => {
      if (mield.id === mieldId) {
        const updatedFields = mield.fields.map((field) =>
          field.id === fieldId ? { ...field, value } : field
        );

        return { ...mield, fields: updatedFields };
      }
      return mield;
    });

    setMields(updatedMields);
  };

  const handleOptionChange = (mieldId, optionName) => {
    const updatedMields = mields.map((mield) =>
      mield.id === mieldId ? { ...mield, optionName } : mield
    );
    setMields(updatedMields);
  };

  const generateCombinations = () => {
    const allVariants = [];

    // Helper function to get all combinations
    const getCombinations = (options, index, currentCombination) => {
      if (index === options.length) {
        const combinationObject = {
          title: currentCombination.map((option) => option.value).join(" / "),
          ...currentCombination.reduce((acc, option, optionIndex) => {
            const optionKey = `option${optionIndex + 1}`;
            acc[optionKey] = option.value;
            return acc;
          }, {}),
          price: 0,
          inventory_quantity: 0,
        };
        allVariants.push(combinationObject);
        return;
      }

      options[index].values.forEach((value) => {
        getCombinations(options, index + 1, [
          ...currentCombination,
          { name: options[index].name, value },
        ]);
      });
    };

    const optionNames = mields.map((mield) => mield.optionName.toLowerCase());

    // Create an array of options for each unique option name
    const uniqueOptions = Array.from(new Set(optionNames)).map((name) => ({
      name,
      values: [],
    }));

    mields.forEach((mield) => {
      const optionIndex = uniqueOptions.findIndex(
        (option) => option.name === mield.optionName.toLowerCase()
      );

      if (optionIndex !== -1) {
        const fieldValues = mield.fields
          .map((field) => field.value.trim())
          .filter(Boolean);

        uniqueOptions[optionIndex].values.push(...fieldValues);
      }
    });

    // Only add combinations if there are mields
    if (uniqueOptions.length > 0) {
      getCombinations(uniqueOptions, 0, []);

      // Preserve existing price and stock values
      const updatedVariants = allVariants.map((newVariant) => {
        const existingVariant = combinations.find(
          (existing) => existing.title === newVariant.title
        );
        return existingVariant ? existingVariant : newVariant;
      });

      setCombinations(updatedVariants);
    } else {
      setCombinations([]);
    }
  };

  const updateCombinationValues = (index, newPrice, newStock) => {
    if (index >= 0 && index < combinations.length) {
      setCombinations((prevCombinations) => {
        const updatedCombinations = [...prevCombinations];
        updatedCombinations[index] = {
          ...updatedCombinations[index],
          price: newPrice,
          inventory_quantity: newStock,
        };
        return updatedCombinations;
      });
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isPopupOpen) {
      // Add the class to disable overflow
      body.classList.add('overflow-hidden');
    } else {
      // Remove the class to enable overflow
      body.classList.remove('overflow-hidden');
    }

    // Cleanup by removing the class on component unmount
    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, [isPopupOpen]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  //image upload
  const imageUploader = useRef(null);

  const handleMediaChange = (e) => {
    const files = e.target.files;

    if (files) {
      const validMedia = Array.from(files).filter((file) => {
        return file.type.startsWith("image/") || file.type.startsWith("video/");
      });

      if (validMedia.length === files.length) {
        setProduct((prevProduct) => ({
          ...prevProduct,
          media: [...prevProduct.media, ...validMedia],
        }));
      } else {
        alert("Please select image and video files only.");
      }
    }
  };

  const isImage = (file) => file.type.startsWith("image");
  const isVideo = (file) => file.type.startsWith("video");

  const removeMedia = (index) => {
    setProduct((prevProduct) => {
      const updatedMedia = [...prevProduct.media];
      updatedMedia.splice(index, 1);
      return { ...prevProduct, media: updatedMedia };
    });
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-full">
        <div className="w-[75%] ml-auto mr-auto sm:w-full">
          <div className="flex items-center py-6 text-lg font-sans font-bold sm:px-2">
            <Link className="p-1" to="/products">
              <FaArrowLeftLong />
            </Link>
            Add product
          </div>
          <div>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-[70%] flex flex-col sm:w-[93%]">
                <div className="rounded-xl bg-white shadow-md p-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Title
                        </label>
                      </div>
                      <input
                        className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={product.title}
                        placeholder="Short sleeve t-shirt"
                      />
                    </div>
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Description
                        </label>
                      </div>
                      <Editor
                        description={product.description}
                        updateDescription={updateDescription}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-5 pt-5">Media</div>
                  <div className="p-4 border-dashed border-[3px] hover:bg-[#ebeaea] transition-all cursor-pointer flex items-center justify-center">
                    <label
                      className="flex gap-2 items-center"
                      htmlFor="image-input"
                    >
                      <button
                        onClick={() => {
                          imageUploader.current.click();
                        }}
                        className="shadow-xl text-heading border border-[#e2e2e2] p-2 rounded-lg bg-white hover:bg-[#f1f1f1]"
                      >
                        Upload New
                      </button>
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleMediaChange}
                        className="hidden"
                        ref={imageUploader}
                      />
                    </label>
                  </div>
                  <div className="grid gap-5 grid-cols-4">
                    {product.media &&
                      product.media.map((media, index) => (
                        <div
                          className="first:col-span-2 first:row-span-2 relative group"
                          key={index}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          {typeof media === "string" ? (
                            <img
                              src={media}
                              alt="product media"
                              className="w-full h-full object-cover"
                            />
                          ) : isImage(media) ? (
                            <img
                              src={URL.createObjectURL(media)}
                              alt="product media"
                              className="w-full h-full object-cover"
                            />
                          ) : isVideo(media) ? (
                            <video
                              src={URL.createObjectURL(media)}
                              alt="product media"
                              controls
                              className="w-full h-full object-cover"
                            ></video>
                          ) : (
                            <div>No Preview Available</div>
                          )}

                          {hoveredIndex === index && (
                            <button
                              onClick={() => removeMedia(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            >
                              &#x2716;
                            </button>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-4 pt-4">
                    <h2>Pricing</h2>
                  </div>
                  <div className="flex flex-col gap-3">
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
                            value={product.price}
                            className="w-[90%] px-1 outline-none focus:outline-none"
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
                            value={product.comparePrice}
                            className="w-[90%] px-1 outline-none focus:outline-none"
                          />
                          <div className="group relative">
                            <CiCircleQuestion size={20} />
                            <div className="hidden group-hover:block p-[0.75rem] absolute shadow-md text-[12px] bg-white rounded-lg w-[16.75rem]">
                              To display a markdown, enter a value higher than
                              your price.
                              <br /> Often shown with a strikethrough.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-sm flex items-center gap-2"
                        htmlFor="tax"
                      >
                        <input
                          type="checkbox"
                          id="tax"
                          name="tax"
                          checked={product.tax || false}
                          onChange={handleCheckboxChange}
                        />
                        Charge tax on this product
                      </label>
                    </div>
                  </div>
                </div>

                {/* -----------------Variants Section-------------------------- */}

                <div className="rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-4 py-4">
                    <h2>Variants</h2>
                  </div>
                  <div>
                    {mields.map((mield) => (
                      <div key={mield.id} className="mb-4">
                        <div className="flex items-center mb-2">
                          <select
                            id={`optionsName_${mield.id}`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={mield.optionName}
                            onChange={(e) =>
                              handleOptionChange(mield.id, e.target.value)
                            }
                          >
                            <option value="" disabled>
                              --Choose Option--
                            </option>
                            <option value="Size">Size</option>
                            <option value="Color">Color</option>
                            <option value="Material">Material</option>
                            <option value="Style">Style</option>
                          </select>
                          <button
                            onClick={() => deleteMield(mield.id)}
                            className="ml-2"
                          >
                            <MdDelete size={25} color="#303030" />
                          </button>
                        </div>
                        <div
                          className={`${
                            hiddenFields.includes(mield.id) ? "hidden" : ""
                          }`}
                        >
                          {mield.fields.map((field) => (
                            <div
                              key={field.id}
                              className="flex items-center mb-1"
                            >
                              <input
                                type="text"
                                placeholder="Option Value"
                                className="my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5"
                                value={field.value}
                                onChange={(e) =>
                                  handleInputChange(
                                    mield.id,
                                    field.id,
                                    e.target.value
                                  )
                                }
                                id={`field${field.id}`}
                                name={`field${field.id}`}
                              />
                              <button
                                onClick={() => deleteField(mield.id, field.id)}
                                className="ml-2"
                              >
                                <MdDelete size={20} color="#303030" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 flex gap-2">
                          {hiddenFields.includes(mield.id) ? (
                            <button
                              onClick={() => showMield(mield.id)}
                              className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-2 rounded-lg"
                            >
                              Edit
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() => addNewFieldToMield(mield.id)}
                                className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-2 rounded-lg"
                              >
                                Add New Field
                              </button>
                              <button
                                onClick={() => hideMield(mield.id)}
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
                      onClick={addNewField}
                      className="bg-[#1A1A1A] text-[#E3E3E3] text-heading px-3 py-2 mt-2 rounded-lg"
                    >
                      Add New Option
                    </button>
                  </div>
                </div>

                <div className=" rounded-xl my-4 bg-white shadow-md">
                  <div className="flex p-3 ">
                    <div className="w-1/2 text-[13px] font-bold">Variant</div>
                    <div className="flex w-1/2">
                      <p className="w-1/2 text-[13px] font-bold">Price</p>
                      <p className="w-1/2 text-[13px] font-bold">Available</p>
                    </div>
                  </div>
                  {combinations.map((item, index) => (
                    <div key={index} className="flex p-3">
                      <div className="text-left w-1/2 text-[13px]">
                        <button className="hover:underline">
                          {item.title}
                        </button>
                      </div>
                      <div className="flex w-1/2 gap-3">
                        <div className="w-1/2 text-[13px]">
                          <div className="h-[30px] group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                            <span className="p-1 text-[#616161]">&#8377;</span>
                            <input
                              type="number"
                              placeholder="0.00"
                              name="price"
                              value={item.price}
                              onChange={(e) =>
                                updateCombinationValues(
                                  index,
                                  parseFloat(e.target.value),
                                  item.inventory_quantity
                                )
                              }
                              className="w-[90%] px-1 outline-none focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="w-1/2 text-[13px]">
                          <div className="h-[30px] group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                            <input
                              type="number"
                              placeholder="0"
                              name="inventory_quantity"
                              value={item.inventory_quantity}
                              onChange={(e) =>
                                updateCombinationValues(
                                  index,
                                  item.price,
                                  parseFloat(e.target.value)
                                )
                              }
                              className="w-[90%] px-2 outline-none focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <hr />
                </div>
              </div>

              {/* right */}
              <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
                <div className="sm:mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div className="px-4 pt-4">
                      <h2 className="text-heading text-heading-color font-[650]">
                        Status
                      </h2>
                    </div>
                    <div className="p-4 pt-2">
                      <select
                        value={product.status}
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
                          value={product.productType}
                          name="productType"
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
                        <h2 className="text-heading text-heading-color font-[450]">
                          Tags
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          name="tags"
                          value={product.tags}
                          onChange={handleChange}
                          type="text"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------Edit variants------------------ */}

            <button onClick={openPopup}>Open Popup</button>
            {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full border-2 rounded-[15px] bg-white">
              <div className="flex justify-between p-5 ">
                <p className="font-[650]">Edit ____</p>
                <button className="m-1" onClick={closePopup}>
                  <MdCancel />
                </button>
              </div>
              <hr className="border-2" />
                    <div className="px-8 pt-6 pb-5 grid grid-cols-3 gap-3 items-center bg-[white]">
                      <div>
                        <h2 className="text-heading text-heading-color font-[450]">
                          Price
                        </h2>
                        <input
                          type="text"
                          className="py-[6px] px-3 w-[200px] rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                      <div>
                        <h2 className="text-heading text-heading-color font-[450]">
                          Compare at Price
                        </h2>
                        <input
                          type="text"
                          className="py-[6px] px-3 w-[200px] rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>

                    </div>


                    <hr className="border-[1px]" />


                    <div className="px-8 py-4 bg-[white]">
                      <h2 className=" text-heading-color font-[550] p-2 pb-4 text-[16px]">
                        Inventory
                      </h2>

                      <div className="grid grid-cols-3 gap-3 items-center">

                        <div>

                          <h2 className="text-heading text-heading-color font-[450]">
                            SKU(Stock Keeping Unit)
                          </h2>
                          <input
                            type="text"
                            className="py-[6px] px-3 w-[200px] rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                          />
                        </div>

                        <div className="col-span-2">
                          <h2 className="text-heading text-heading-color font-[450]">
                            Barcode (ISBN, UPC, GTIN, etc.)
                          </h2>
                          <input
                            type="text"
                            className="py-[6px] px-3 w-[200px] rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                          />
                        </div>

                      </div>




                    </div>
                    <hr className="border-[1px]" />

                    <div className="px-8 pt-8 pb-5 bg-[white] ">
                      <h2 className="text-heading text-heading-color font-[450]">
                        Weight(In kg  )
                      </h2>
                      <input
                        type="text"
                        className="py-[6px] px-3 w-[200px] rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                      />
                    </div>
                    <hr className="border-[1px]" />


                    <div className="bg-[white] rounded-b-[15px] flex justify-end pr-7 py-3">
                      <button className="text-[#1A1A1A] bg-[#E3E3E3] text-heading px-2 py-1 m-2 rounded-lg"
                        onClick={closePopup}
                      >Cancel</button>
                      <button className=" text-[#E3E3E3] bg-[#1A1A1A] text-heading px-2 py-1 m-2 rounded-lg"
                        onClick={closePopup}
                      >Save</button>
                    </div>

                  </div>


              </div>
            </div>
                )}





            <div>
              <div className="rounded-xl flex items-center justify-center  p-4">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#1A1A1A] text-[#E3E3E3] text-heading p-3 rounded-lg"
                >
                  Add Product
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
