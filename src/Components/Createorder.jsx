import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Createorder = () => {
  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-full">
        <div className="w-[75%] ml-auto mr-auto sm:w-full">
          <div className="flex items-center py-6 text-lg font-sans font-bold sm:px-2">
            <Link className="p-1" to="/Orders">
              <FaArrowLeftLong />
            </Link>
            Create order
          </div>
          <form>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-[70%] flex flex-col sm:w-[93%]">
                <div className="rounded-xl flex flex-col bg-white gap-1 shadow-md p-4">
                  <div className="flex gap-4">
                    <div className='flex justify-between items-center w-full'>
                      <div>
                        <label className="text-heading text-heading-color font-[650]" htmlFor="">
                          Products
                        </label>
                      </div>
                      <label>
                        <Link
                          to="/"
                          className="text-[12px] text-[#0068d9]" htmlFor=""
                        >
                          Add custom item
                        </Link>
                      </label>

                    </div>

                  </div>
                  <div className="flex flex-col gap-4">
                    <div className='flex justify-between w-full gap-1'>
                      <div className='flex w-[100%] gap-1'>
                        <div className="hover:bg-[#FAFAFA]  gap-1 flex items-center text-[0.8125rem] text-[#303030] w-[100%] border-[0.04125rem] border-[#8a8a8a] font-sans  pl-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]">

                          <div className='text-[16px]'><CiSearch /></div>

                          <input
                            className='outline-none hover:bg-[#FAFAFA] py-1 w-[100%]'
                            type="text"
                            name="Products"
                            placeholder="Search products"
                          />
                        </div>
                        <button className='hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-[80px] border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]'>
                          browse

                        </button>
                      </div>


                    </div>

                  </div>
                </div>

                <div className="rounded-xl my-4 bg-white shadow-md border ">
                  <div className=" my-4 bg-white pt-4 px-4 ">
                    <div>
                      <h2 className="text-heading text-heading-color font-[650]">
                        Payment
                      </h2>
                    </div>
                    <div className="rounded-md my-4 bg-white border gap-4 flex flex-col p-4">
                      <div className='flex justify-between'>
                        <div className="text-heading w-[180px]">Subtotal</div>
                        <div className='text-[#616161]  w-[100px]  text-heading'>---</div>
                        <div></div>
                        <span className="text-[#616161] text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between text-[#bcbab7] '>
                        <div className="text-heading w-[180px] text-[#bcbab7] ">Add discount</div>
                        <div className='  w-[100px]  text-heading'>---</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between text-[#bcbab7] '>
                        <div className="text-heading w-[180px] items-start">Add Shipping and delivery</div>
                        <div className=' items-start w-[100px] text-heading'>---</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between text-[#bcbab7] '>
                        <div className="text-heading flex items-center gap-1 w-[180px]">Estimated tax <div className='text-[#616161] text-[16px]'><AiOutlineInfoCircle /></div> </div>
                        <div className=' w-[100px]  text-heading'>Not calculated</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className='flex justify-between'>
                        <div className="text-heading text-heading-color w-[180px] font-[650]">Total </div>
                        <div className='text-[#616161]  w-[100px]  text-heading'>---</div>
                        <div></div>
                        <span className="text-[#616161] text-heading font-[650]">&#8377;0.00 </span>
                      </div>
                    </div>
                  
                  </div>
                  <div className=' w-full py-4  border-t bg-[#f7f7f7] rounded-b-xl  px-4 '>
                      <h3
                        className="text-sm text-heading flex items-center gap-2"
                        htmlFor="tax"
                      >

                        Add a product to calculate total and view payment options.
                      </h3>
                    </div>
                </div>
              </div>
              <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
                <div className="sm:mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div className="px-4 flex justify-between items-center pt-4">
                      <div>
                        <h2 className="text-heading text-heading-color font-[650]">
                          Notes
                        </h2>
                      </div>
                      <div>
                        <GoPencil />
                      </div>
                    </div>
                    <div className="p-4 text-heading pt-2">

                      No notes


                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">


                    <div>
                      <div className="px-4 pt-4">
                        <h1 className="text-heading text-heading-color font-[650]">
                          Customer
                        </h1>
                      </div>
                      <div className="p-4 pt-2">
                        <div className="py-[6px] px-3 w-full gap-1 flex items-center rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading">
                          <div className='text-[16px]'><CiSearch /></div>
                          <input
                            className='outline-none line-clamp-1 '
                            type="text"
                            name=" Customer"
                            placeholder="Search or Create a Customer "


                          />
                        </div>
                      </div>
                    </div>


                  </div>
                </div>





              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Createorder
























// import { Link } from "react-router-dom";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { CiCircleQuestion } from "react-icons/ci";
// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Editor from "./Editor";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     title: "",
//     description: "",
//     price: "",
//     comparePrice: "",
//     status: "",
//     productCategory: "",
//     productType: "",
//     tags: "",
//     collections: "",
//     vendor: "",
//     tax: false,
//   });

//   const updateDescription = (newDescription) => {
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       description: newDescription,
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       const res = await axios.post(
//         "http://localhost:8000/api/product/add-product",
//         product
//       );
//       toast.success(res.data.message);
//       console.log("Form submitted with data:", product);
//       setProduct({
//         title: "",
//         description: "",
//         price: "",
//         comparePrice: "",
//         status: "",
//         productCategory: "",
//         productType: "",
//         tags: "",
//         collections: "",
//         vendor: "",
//         tax: false,
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message, { duration: 2000 });
//     }
//   };

//   return (
//     <>
//       <div className="bg-[#F1F1F1] w-full h-full">
//         <div className="w-[75%] ml-auto mr-auto sm:w-full">
//           <div className="flex items-center py-6 text-lg font-sans font-bold sm:px-2">
//             <Link className="p-1" to="/products">
//               <FaArrowLeftLong />
//             </Link>
//             Create order

//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="flex gap-3 sm:flex-col sm:items-center">
//               <div className="w-[70%] flex flex-col sm:w-[93%]">
//                 <div className="rounded-xl bg-white shadow-md p-4">
//                   <div className="flex flex-col gap-4">
//                     <div>
//                       <div>
//                         <label className="text-sm" htmlFor="">
//                           Products
//                         </label>
//                       </div>
//                       <input
//                         className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]"
//                         type="text"
//                         name="Products"
//                         onChange={handleChange}
//                         value={product.Products}
//                         placeholder="Search products"
//                       />
//                     </div>

//                   </div>
//                 </div>

//                 <div className="rounded-xl my-4 bg-white shadow-md p-4">
//                   <div className="px-4 pt-4">
//                     <h2>Payment</h2>
//                   </div>
//                   <div className="flex flex-col gap-3">
//                     <div className="grid grid-cols-3 px-2 py-4 gap-3 sm:flex sm:flex-col">
//                       <div>


//                       </div>
//                       <div>


//                       </div>
//                     </div>
//                     <div>
//                       <label
//                         className="text-sm flex items-center gap-2"
//                         htmlFor="tax"
//                       >

//                         Add a product to calculate total and view payment options.
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* right */}
//               <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
//                 <div className="sm:mt-3 sm:w-full">
//                   <div className="bg-white rounded-[0.75rem] shadow-md">
//                     <div className="px-4 pt-4">
//                       <h2 className="text-heading text-heading-color font-[650]">
//                         Notes
//                       </h2>
//                     </div>
//                     <div className="p-4 pt-2">




//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-3 sm:w-full">
//                   <div className="bg-white rounded-[0.75rem] shadow-md">


//                     <div>
//                       <div className="px-4 pt-4">
//                         <h2 className="text-heading text-heading-color font-[450]">
//                           Customer
//                         </h2>
//                       </div>
//                       <div className="p-4 pt-2">
//                         <input
//                           type="text"
//                           name="vendor"
//                           value={product.Customer}
//                           onChange={handleChange}
//                           className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
//                         />
//                       </div>
//                     </div>


//                   </div>
//                 </div>
//               </div>
//             </div>

//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddProduct;
