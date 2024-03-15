import { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { EditProductContext } from "../../Contexts/EditProductContext";

export default function EditCombinations() {
  const {
    updatedProduct,
    setUpdatedProduct,
    setSelectedVariant,
    setEditedVariant,
    setIsPopupOpen,
    setShowGallery,
    setSelectedOption,
    setSelectVariant,
  } = useContext(EditProductContext);

  const [expanded, setExpanded] = useState([]);

  const variantImageChange = (title) => {
    setShowGallery(true);
    setSelectVariant(title);
  };

  const handleToggleVariant = (value) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(value)
        ? prevExpanded.filter((v) => v !== value)
        : [...prevExpanded, value]
    );
  };

  const openGallery = (option1Value) => {
    setShowGallery(true);
    setSelectedOption(option1Value);
  };

  const openPopup = (variant) => {
    setSelectedVariant(variant);
    setEditedVariant({
      title: variant.title,
      price: variant.price.toString(),
      compare_at_price: variant.compare_at_price.toString(),
      sku: variant.sku || "",
      barcode: variant.barcode || "",
      weight: variant.weight || "",
    });
    setIsPopupOpen(true);
  };

  const filterVariants = (option1Value) =>
    updatedProduct.variants.filter(
      (variant) => variant.option1 === option1Value
    );

  const updateVariantPrice = (option1Value, variantIndex, newPrice) => {
    setUpdatedProduct((prevProduct) => {
      const updatedVariants = [...prevProduct.variants];
      const matchingVariantIndex = updatedVariants.findIndex(
        (variant) =>
          variant.option1 === option1Value &&
          variant === filterVariants(option1Value)[variantIndex]
      );

      if (matchingVariantIndex !== -1) {
        updatedVariants[matchingVariantIndex] = {
          ...updatedVariants[matchingVariantIndex],
          price: newPrice,
        };
      }

      return { ...prevProduct, variants: updatedVariants };
    });
  };

  const updateVariantInventory = (option1Value, variantIndex, newInventory) => {
    setUpdatedProduct((prevProduct) => {
      const updatedVariants = [...prevProduct.variants];
      const matchingVariantIndex = updatedVariants.findIndex(
        (variant) =>
          variant.option1 === option1Value &&
          variant === filterVariants(option1Value)[variantIndex]
      );

      if (matchingVariantIndex !== -1) {
        updatedVariants[matchingVariantIndex] = {
          ...updatedVariants[matchingVariantIndex],
          inventory_quantity: newInventory,
        };
      }

      return { ...prevProduct, variants: updatedVariants };
    });
  };

  return (
    <>
      <div className="rounded-xl my-4 bg-white shadow-md">
        <div className="flex p-3">
          <div className="pl-3 w-1/2 text-[13px] font-bold">Variant</div>
          <div className="flex w-1/2">
            <p className="pl-3 w-1/2 text-[13px] font-bold">Price</p>
            <p className="pl-3 w-1/2 text-[13px] font-bold">Available</p>
          </div>
        </div>

        {updatedProduct.options.length > 1 ? (
          <>
            {Array.from(
              new Set(updatedProduct.variants.map((variant) => variant.option1))
            ).map((value) => (
              <div key={value} className="w-full">
                <div className="flex border-y-[1px] p-1 cursor-pointer group hover:bg-[#f7f7f7]">
                  <div className="flex items-center gap-3 w-full">
                    <div>
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        name=""
                        id=""
                      />
                    </div>
                    <span
                      onClick={() => {
                        openGallery(value);
                      }}
                      className={`w-14 h-14 border-dashed border rounded-lg`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="text-[#005bd3] w-full fill-current"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.39l1.013-1.013a1.75 1.75 0 0 1 2.474 0l2.763 2.762 1.47-1.47a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-3.293-3.293a.25.25 0 0 0-.354 0l-2.054 2.055c.005.113.011.218.02.317.036.454.106.715.206.912.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h1.2a.75.75 0 0 1 0 1.5h-1.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47a11.671 11.671 0 0 1-.03-.597.754.754 0 0 1-.006-.234c-.007-.348-.007-.736-.007-1.169v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path>
                        <path d="M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                        <path d="M15.75 11.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div
                        onClick={() => handleToggleVariant(value)}
                        className="cursor-pointer text-[13px] text-left flex flex-col flex-1 w-full"
                      >
                        {value}
                        <div className="flex gap-1 items-center">
                          {`${filterVariants(value).length} ${
                            filterVariants(value).length > 1
                              ? "variants"
                              : "variant"
                          }`}
                          {expanded.includes(value) ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {expanded.includes(value) && (
                  <div>
                    {filterVariants(value).map((variant, index) => (
                      <div key={index} className="p-1">
                        <div className="flex">
                          <div className="w-1/2 flex items-center gap-3">
                            <div className="w-10 h-4"></div>
                            <div>
                              <input
                                type="checkbox"
                                className="h-4 w-4"
                                name=""
                                id=""
                              />
                            </div>
                            <span
                              onClick={() => {
                                variantImageChange(variant.title);
                              }}
                              className="w-10 h-10 border-dashed border rounded-lg cursor-pointer"
                            >
                              {variant.imageSrc ? (
                                <img
                                  src={variant.imageSrc}
                                  alt={`Variant - ${variant.title}`}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              ) : variant.imageId && variant.imageId.src ? (
                                <img
                                  src={variant.imageId.src}
                                  alt={`Variant - ${variant.title}`}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              ) : (
                                <svg
                                  viewBox="0 0 20 20"
                                  className="text-[#005bd3] w-full fill-current"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.39l1.013-1.013a1.75 1.75 0 0 1 2.474 0l2.763 2.762 1.47-1.47a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-3.293-3.293a.25.25 0 0 0-.354 0l-2.054 2.055c.005.113.011.218.02.317.036.454.106.715.206.912.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h1.2a.75.75 0 0 1 0 1.5h-1.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47a11.671 11.671 0 0 1-.03-.597.754.754 0 0 1-.006-.234c-.007-.348-.007-.736-.007-1.169v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path>
                                  <path d="M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                  <path d="M15.75 11.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 .75-.75Z"></path>
                                </svg>
                              )}

                              {/* {variant.imageId ? (
                                <img
                                  src={variant.imageSrc}
                                  alt={`Variant - ${variant.title}`}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              ) : (
                                <svg
                                  viewBox="0 0 20 20"
                                  className="text-[#005bd3] w-full fill-current"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.39l1.013-1.013a1.75 1.75 0 0 1 2.474 0l2.763 2.762 1.47-1.47a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-3.293-3.293a.25.25 0 0 0-.354 0l-2.054 2.055c.005.113.011.218.02.317.036.454.106.715.206.912.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h1.2a.75.75 0 0 1 0 1.5h-1.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47a11.671 11.671 0 0 1-.03-.597.754.754 0 0 1-.006-.234c-.007-.348-.007-.736-.007-1.169v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path>
                                  <path d="M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                  <path d="M15.75 11.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 .75-.75Z"></path>
                                </svg>
                              )} */}
                            </span>
                            <button
                              className="flex-1 text-[13px] text-left"
                              onClick={() => {
                                openPopup(variant);
                              }}
                            >
                              {Object.keys(variant)
                                .filter(
                                  (key) =>
                                    key.includes("option") &&
                                    key !== "option1" &&
                                    variant[key] !== null
                                )
                                .map((key, index, array) => (
                                  <span key={index}>
                                    {variant[key]}
                                    {index < array.length - 1 && " · "}
                                  </span>
                                ))}
                            </button>
                          </div>
                          <div className="flex w-1/2 gap-3 items-center">
                            <div className="h-7 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                              <span className="p-1 text-[#616161]">
                                &#8377;
                              </span>
                              <input
                                type="number"
                                className="w-[85%] px-1 text-heading group-hover:bg-[#f7f7f7] outline-none focus:outline-none"
                                placeholder="0.00"
                                value={variant.price}
                                onChange={(e) =>
                                  updateVariantPrice(
                                    value,
                                    index,
                                    Number(e.target.value) || 0
                                  )
                                }
                              />
                            </div>
                            <div className="flex h-7 items-center border-[#8a8a8a] border rounded-[0.5rem]">
                              <input
                                type="number"
                                className="pl-3 rounded-lg w-full border-black text-[13px] outline-none"
                                placeholder="0"
                                value={variant.inventory_quantity}
                                onChange={(e) =>
                                  updateVariantInventory(
                                    value,
                                    index,
                                    Number(e.target.value) || 0
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <>
            {updatedProduct.variants.map((variant, index) => (
              <div key={index} className="w-full">
                <div className="flex border-y-[1px] p-1 cursor-pointer group hover:bg-[#f7f7f7]">
                  <div className="flex items-center gap-3 w-full">
                    <div>
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        name=""
                        id=""
                      />
                    </div>
                    <span
                      onClick={() => {
                        variantImageChange(variant.title);
                      }}
                      className="w-14 h-14 border-dashed border rounded-lg"
                    >
                      {variant.imageId ? (
                        <img
                          src={variant.imageSrc}
                          alt={`Variant - ${variant.title}`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <svg
                          viewBox="0 0 20 20"
                          className="text-[#005bd3] w-full fill-current"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.39l1.013-1.013a1.75 1.75 0 0 1 2.474 0l2.763 2.762 1.47-1.47a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-3.293-3.293a.25.25 0 0 0-.354 0l-2.054 2.055c.005.113.011.218.02.317.036.454.106.715.206.912.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h1.2a.75.75 0 0 1 0 1.5h-1.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47a11.671 11.671 0 0 1-.03-.597.754.754 0 0 1-.006-.234c-.007-.348-.007-.736-.007-1.169v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path>
                          <path d="M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                          <path d="M15.75 11.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 .75-.75Z"></path>
                        </svg>
                      )}
                    </span>
                    <div className="flex-1 h-full flex items-center">
                      <button
                        onClick={() => {
                          openPopup(variant);
                        }}
                        className="cursor-pointer text-left w-full h-full hover:underline text-sm"
                      >
                        {variant.title}
                      </button>
                    </div>
                    <div className="flex w-1/2 gap-3 items-center">
                      <div className="h-7 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                        <span className="p-1 text-[#616161]">&#8377;</span>
                        <input
                          type="number"
                          className="w-[85%] px-1 text-heading group-hover:bg-[#f7f7f7] outline-none focus:outline-none"
                          placeholder="0.00"
                          value={variant.price}
                          onChange={(e) =>
                            updateVariantPrice(
                              variant.option1,
                              index,
                              Number(e.target.value) || 0
                            )
                          }
                        />
                      </div>
                      <div className="flex h-7 items-center border-[#8a8a8a] border rounded-[0.5rem]">
                        <input
                          type="number"
                          className="pl-3 rounded-lg w-full border-black text-[13px] outline-none"
                          placeholder="0"
                          value={variant.inventory_quantity}
                          onChange={(e) =>
                            updateVariantInventory(
                              variant.option1,
                              index,
                              Number(e.target.value) || 0
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
