import Sidebar from '../src/Components/Sidebar'
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import Collectons from './Components/Collectons';


function App() {
  return (
    <>
      <Navbar />
      
      <AddProduct />
    <div className='flex'> <Sidebar/>
    <Collectons/>
     </div>
  
    </>
  )
}

export default App
