import Sidebar from "../src/Components/Sidebar";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CreateCollection from "./Components/CreateCollection";
import Collections from "./Components/Collections";
import Customers from "./Components/Customers";
import AddCustomers from "./Components/AddCustomers";
import CustomerDetails from "./Components/CustomerDetails";
import Orders from "./Components/Orders";
import Createorder from "./Components/Createorder";
import OrderDetails from "./Components/OrderDetails";
import Draftorders from "./Components/Draftorders";
import Restock from "./Components/Restock";
import EditOrder from "./Components/EditOrder";
import AllProducts from "./Components/AllProducts";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/product/:id" element={<EditProduct />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/add-product" element={<AddProduct />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/create-collection" element={<CreateCollection />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add-customers" element={<AddCustomers />} />
          <Route
            path="/customers/customer-details/:customerID"
            element={<CustomerDetails />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/create-order" element={<Createorder />} />
          <Route path="/orders/order-details" element={<OrderDetails />} />
          <Route path="/orders/order-details/restock" element={<Restock />} />
          <Route
            path="/orders/order-details/edit-order"
            element={<EditOrder />}
          />
          <Route path="/draftorders" element={<Draftorders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
