import Sidebar from '../src/Components/Sidebar'
import Inventory from './Components/Inventory'    
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <>
      <Navbar />
      <AddProduct />
    <div className='flex'> <Sidebar/>
     <Inventory/>
    </div>
    </>
  )
}

export default App
