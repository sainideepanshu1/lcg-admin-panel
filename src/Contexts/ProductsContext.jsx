/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [search, setSearch] = useState(false);
  const [sort, setSort] = useState(false);
  const [perPage, setPerPage] = useState(50);
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        selectAll,
        setSelectAll,
        selectedProducts,
        setSelectedProducts,
        search,
        setSearch,
        sort,
        setSort,
        perPage,
        setPerPage,
        toggle,
        setToggle,
        products,
        setProducts,
        page,
        setPage,
        isLoading,
        setIsLoading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
