import Sidebar from "../src/Components/Sidebar";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Collectons from "./Components/Collectons";
import CreateCollection from "./Components/CreateCollection";

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
        <Sidebar />
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/collections" element={<Collectons />} />
          <Route path="/create-collection" element={<CreateCollection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
