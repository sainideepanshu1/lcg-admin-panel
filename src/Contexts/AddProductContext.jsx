/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AddProductContext = createContext(null);

export const AddProductContextProvider = ({ children }) => {
  const [disableHandle, setDisableHandle] = useState(true);
  const [hiddenFields, setHiddenFields] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [editedVariant, setEditedVariant] = useState({
    title: "",
    price: "",
    compare_at_price: "",
    sku: "",
    barcode: "",
    weight: "",
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectVariant, setSelectVariant] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    handle: "",
    body_html: "",
    images: [],
    options: [],
    variants: [],
    price: "",
    comparePrice: "",
    available: "",
    sku: "",
    barcode: "",
    weight: "",
    status: "",
    productCategory: "",
    product_type: "",
    tags: "",
    collections: "",
    vendor: "",
    tax: false,
  });

  const updateProduct = (newProduct) => {
    setProduct(newProduct);
  };

  return (
    <AddProductContext.Provider
      value={{
        product,
        setProduct,
        updateProduct,
        disableHandle,
        setDisableHandle,
        hiddenFields,
        setHiddenFields,
        selectedVariant,
        setSelectedVariant,
        editedVariant,
        setEditedVariant,
        isPopupOpen,
        setIsPopupOpen,
        showGallery,
        setShowGallery,
        selectedOption,
        setSelectedOption,
        selectVariant,
        setSelectVariant,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
};
