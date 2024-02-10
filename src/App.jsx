import Sidebar from "../src/Components/Sidebar";
import Inventory from "./Components/Inventory";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
