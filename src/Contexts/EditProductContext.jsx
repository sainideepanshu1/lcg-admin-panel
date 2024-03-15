/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const EditProductContext = createContext(null);

export const EditProductContextProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
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

  const [updatedProduct, setUpdatedProduct] = useState({
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

  const editProduct = (newProduct) => {
    setUpdatedProduct(newProduct);
  };

  return (
    <EditProductContext.Provider
      value={{
        updatedProduct,
        setUpdatedProduct,
        editProduct,
        isPopupOpen,
        setIsPopupOpen,
        showGallery,
        setShowGallery,
        disableHandle,
        setDisableHandle,
        hiddenFields,
        setHiddenFields,
        selectedVariant,
        setSelectedVariant,
        editedVariant,
        setEditedVariant,
        selectedOption,
        setSelectedOption,
        selectVariant,
        setSelectVariant,
      }}
    >
      {children}
    </EditProductContext.Provider>
  );
};
