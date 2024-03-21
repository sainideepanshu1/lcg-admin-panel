/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AllCustomersContext = createContext(null);

export const AllCustomersContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [customerPage, setCustomerPage] = useState(1);
  const [customerPerPage, setCustomerPerPage] = useState(50);
  const [sort, setSort] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [customers, setCustomers] = useState([]);

  return (
    <AllCustomersContext.Provider
      value={{
        toggle,
        setToggle,
        filter,
        setFilter,
        isLoading,
        setIsLoading,
        customerPage,
        setCustomerPage,
        customerPerPage,
        setCustomerPerPage,
        sort,
        setSort,
        selectedCustomers,
        setSelectedCustomers,
        customers,
        setCustomers,
        selectAll,
        setSelectAll,
      }}
    >
      {children}
    </AllCustomersContext.Provider>
  );
};
