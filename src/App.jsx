import Sidebar from "../src/Components/Sidebar";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Collectons from './Components/Collectons';


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
        {/* <div className="ml-[13%] w-full"> */}
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
         <Route path="/collections" element={<Collectons />} />
        </Routes>
        {/* </div> */}
       </div>
  
    </>
  );
}

export default App;
