import Sidebar from "../src/Components/Sidebar";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import CreateCollection from "./Components/CreateCollection";
import Collectons from "./Components/Collectons";
import Dublicate from "./Components/Dublicate";
import Products from "./Components/Products";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
  };
  return (
    <>
      <Toaster />
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/duplicate" element={<Dublicate />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/collections" element={<Collectons />} />
          <Route path="/create-collection" element={<CreateCollection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
