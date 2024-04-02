import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { CiSearch, CiAt } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { CgAdd } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";
import Product2 from "../assets/Product2.jpg";
import { FiHash } from "react-icons/fi";
import { GrSquare } from "react-icons/gr";
import { MdCancel, MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";
import IndiaFlag from "./IndiaFlag";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

const Createorder = () => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
  });
  const [editAddress, setEditAddress] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const [browse, setbrowse] = useState(false);
  const [notes, setnotes] = useState(false);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(false);
  const [customerModal, setCustomerModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);

  const [customerDetails, setCustomerDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    addresses: {
      first_name: "",
      last_name: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      province: "Andhra Pradesh",
      zip: "",
      phone: "",
    },
  });
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(false);

  const [editingAddress, setEditingAddress] = useState(null);
  const location = useLocation();
  let customer = new URLSearchParams(location.search).get("customer");

  async function fetchCustomers() {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/customers/getCustomers?page=1&perPage=20"
      );
      setCustomers(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error Fetching Customers");
    }
  }
  async function fetchCustomer() {
    if (customer) {
      const { data } = await axios.get(
        "http://localhost:8000/api/customers/getCustomer/" + customer
      );
      console.log(data.customer);
      fetchCustomers();
      setSelectedCustomer(data.customer);
    } else {
      fetchCustomers();
    }
  }

  useEffect(() => {
    fetchCustomer();
  }, []);

  useEffect(() => {
    const body = document.body;

    if (customerModal) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [customerModal]);

  // ------------------Get All Products--------------------
  // const fetchAllProducts = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8000/api/product/getProducts`
  //     );
  //     const newProducts = response.data;

  //     setProducts(newProducts);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // useEffect(() => fetchAllProducts, []);

  // -----------------Search products---------------------

  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchSearched();
    }
  };

  const fetchSearched = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/product/searchProduct?search=${searchTerm}`
      );

      if (data.length > 0) {
        setProducts(data);
      } else {
        toast.error("No Results found!!!");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products. Please try again later.");
    }
  };
  useEffect(() => {
    return () => {
      setSearchTerm("");
    };
  }, []);

  useEffect(() => {
    const body = document.body;

    if (browse) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [browse]);

  const toggleProductSelection = (product) => {
    const isChecked = checkedProducts.some(
      (checkedProduct) => checkedProduct.id === product.id
    );

    if (isChecked) {
      const updatedSelectedProducts = selectedProducts.filter(
        (selectedProduct) => selectedProduct.id !== product.id
      );
      setSelectedProducts(updatedSelectedProducts);
    } else {
      setSelectedProducts([...selectedProducts, product]);
      console.log(selectedProducts);
    }

    setCheckedProducts((prevCheckedProducts) => [
      ...prevCheckedProducts,
      product,
    ]);
  };

  const toggleVariantSelection = (variant) => {
    const isChecked = checkedProducts.some(
      (checkedVariant) => checkedVariant.id === variant.id
    );

    if (isChecked) {
      const updatedSelectedVariants = selectedProducts.filter(
        (selectedVariant) => selectedVariant.id !== variant.id
      );
      setSelectedProducts(updatedSelectedVariants);
    } else {
      setSelectedProducts([...selectedProducts, variant]);
    }

    setCheckedProducts((prevCheckedProducts) => [
      ...prevCheckedProducts,
      variant,
    ]);
  };

  console.log(selectedProducts);
  console.log(checkedProducts);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevData) => ({
      ...prevData,
      addresses: {
        ...prevData.addresses,
        [name]: value,
      },
    }));
  };

  const saveContactInfo = async () => {
    try {
      if (
        (contact.email && selectedCustomer.email !== contact.email) ||
        (contact.phone && selectedCustomer.phone !== contact.phone)
      ) {
        const { data } = await axios.put(
          `http://localhost:8000/api/customers/update-customer/${selectedCustomer._id}`,
          contact
        );
        if (data.success) {
          fetchCustomers();
          customer = selectedCustomer._id;
          fetchCustomer();
          toast.success(data.message);
          setContactInfo(false);
        }
      } else if (
        selectedCustomer.phone === contact.phone &&
        selectedCustomer.email === contact.email
      ) {
        setContactInfo(false);
      } else {
        toast.error("Please Fill Out the Details");
      }
    } catch (error) {
      if (error?.response?.data?.message)
        toast.error(error.response.data.message);
      else toast.error("Internal Server Error");
    }
  };

  const saveCustomer = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/customers/addCustomer`,
        customerDetails
      );
      if (data.success) {
        toast.success("Customer Added Successfully");
        setCustomerModal(false);
        setSelectedCustomer(data.customer);
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error Adding Customer");
      }
    }
  };

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
          <div>
            <div className="flex  gap-3 sm:flex-col sm:items-center md:flex-wrap">
              <div className="w-[70%] md:w-[100%] flex flex-col sm:w-[93%]">
                <div className="rounded-xl flex flex-col bg-white gap-1 shadow-md p-4">
                  <div className="flex gap-4">
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <label
                          className="text-heading text-heading-color font-[650]"
                          htmlFor=""
                        >
                          Products
                        </label>
                      </div>
                      <label
                        onClick={() => setItem(!item)}
                        className="text-[12px] text-[#0068d9]  cursor-pointer hover:underline  "
                      >
                        Add custom item
                      </label>
                    </div>
                    {item && (
                      <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                        <div className="rounded-xl my-4 bg-white   w-[45%] shadow-md ">
                          <div className="flex items-center  px-3 py-2 bg-[#f3f3f3] rounded-t-xl justify-between">
                            <div>
                              <h2 className="cursor-pointer text-[#303030] text-[14px] font-semibold ">
                                Add custom item
                              </h2>
                            </div>
                            <div>
                              <div
                                onClick={() => setItem(!item)}
                                className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[20px] cursor-pointer"
                              >
                                <IoIosClose />
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="flex flex-col  px-4 pb-4 gap-3">
                            <div className="flex  w-[100%] px-2 py-4 gap-3 sm:flex sm:flex-col">
                              <div className="">
                                <div className="pr-4 ">
                                  <h2 className="text-heading  text-heading-color py-1 font-[450]">
                                    Item name
                                  </h2>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    className="py-[6px] px-3  rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading focus-within:outline "
                                  />
                                </div>
                              </div>
                              <div className="">
                                <div className="text-heading py-1  ">Price</div>
                                <div className=" border-[#8a8a8a]  flex items-center px-2 rounded-[0.5rem]  border-[1px] focus-within:outline ">
                                  <span className="p-1 text-[#616161]">
                                    &#8377;
                                  </span>
                                  <input
                                    type="text"
                                    placeholder="0.00"
                                    name="price"
                                    className="w-[90%] text-[13px] px-[2px] outline-none "
                                  />
                                </div>
                              </div>
                              <div className="">
                                <div className="text-heading py-1">
                                  Quantity
                                </div>
                                <div className="group border-[#8a8a8a] border w-full flex items-center rounded-[0.5rem] focus-within:outline">
                                  <input
                                    type="number"
                                    placeholder="1"
                                    className="w-[95%] text-[13px] px-2 py-[6px] rounded-[0.5rem] outline-none focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm flex  items-center text-[13px] gap-2">
                                <input type="checkbox" id="tax" />
                                Item is taxable
                              </label>
                            </div>
                            <div>
                              <label className="text-sm flex  text-[13px] items-center gap-2">
                                <input type="checkbox" id="tax" />
                                Item is a physical product
                              </label>
                            </div>

                            <div>
                              <div className="pt-2 ">
                                <h3 className="text-[13px]">
                                  Item weight (optional)
                                </h3>
                                <div className="flex items-center gap-2 py-2 ">
                                  <input
                                    step="0.1"
                                    className="py-[6px] px-3  rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading outline-none"
                                    type="Number"
                                  />
                                  <div className="">
                                    <select className="px-1 py-2 rounded-lg">
                                      <option>kg</option>
                                    </select>
                                  </div>
                                </div>
                                <h3 className="text-[13px]">
                                  Used to calculate shipping rates accurately
                                </h3>
                              </div>
                            </div>
                          </div>

                          <hr />

                          <div className="flex  justify-end  px-3 py-4 gap-2 rounded-b-xl ">
                            <button
                              onClick={() => setItem(!item)}
                              className=" text-[black] rounded-lg border  px-3 py-1  text-[12px]"
                            >
                              Cancel
                            </button>

                            <button
                              className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                              type="Submit"
                            >
                              Add item
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between w-full gap-1">
                      <div className="flex w-[100%] gap-1">
                        <div className="hover:bg-[#FAFAFA]  gap-1 flex items-center text-[0.8125rem] text-[#303030] w-[100%] border-[0.04125rem] border-[#8a8a8a] font-sans  pl-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]">
                          <div className="text-[16px]">
                            <CiSearch />
                          </div>

                          <input
                            className="outline-none hover:bg-[#FAFAFA] py-1 w-[95%]"
                            type="text"
                            name="Products"
                            placeholder="Search products"
                            onKeyUp={() => setbrowse(!browse)}
                            value={searchTerm}
                            onChange={(e) => {
                              setSearchTerm(e.target.value);
                            }}
                          />
                        </div>
                        <button
                          // onClick={() => setbrowse(!browse)}
                          // ref={browseref}
                          className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-[80px] border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450] shadow-common active:shadow-active"
                        >
                          browse
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex w-[100%] xm:hidden pt-4 justify-between">
                    <div className="flex w-[70%] gap-8">
                      <div className="w-[10%]"></div>
                      <div>
                        <h1 className="text-heading">Product</h1>
                      </div>
                    </div>
                    <div className="flex w-[30%] gap-8">
                      <div>
                        <h1 className="text-heading">Quantity</h1>
                      </div>
                      <div>
                        <h1 className="text-heading">Total</h1>
                      </div>
                      <div className=""></div>
                    </div>
                  </div>

                  {checkedProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex w-100% xm:hidden pt-2 justify-between"
                    >
                      <div className="flex gap-2 w-[70%] ">
                        <div className="w-[45px] h-[45px]">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div>
                          <h1 className="text-[13px] text-[#4260da]">
                            {product.title}
                          </h1>
                          <h1 className="text-[13px]">SKU: {product.sku}</h1>
                          <span className=" text-[#4260da] text-heading">
                            &#8377;{product.price}
                          </span>
                        </div>
                      </div>
                      <div className="flex w-[30%] gap-5 items-center">
                        <div>
                          <div className="group border-[#8a8a8a]  border w-full flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                            <input
                              type="number"
                              placeholder="1"
                              className=" px-1 w-[60px] rounded-[0.5rem] outline-none focus:outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <span className=" text-[#4260da] text-heading">
                            &#8377;{product.price}
                          </span>
                        </div>
                        <div>
                          <MdDelete />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className=" pt-2 hidden xm:block ">
                    <div className="flex justify-between">
                      <div className="flex gap-2 w-[70%] ">
                        <div className="w-[45px] h-[45px]">
                          {" "}
                          <img src={Product2} alt="pic" />
                        </div>
                        <div>
                          <h1 className="text-[13px] text-[#4260da]">
                            1st Birthday Sublimation Baby Frame
                          </h1>
                          <h1 className="text-[13px]">Without Gift Wrap</h1>
                          <h1 className="text-[13px]">SKU: LCG-BF-BSBF-0001</h1>
                          <span className=" text-[#4260da] text-heading">
                            &#8377;899.00{" "}
                          </span>
                        </div>
                      </div>
                      <div>
                        <MdDelete />
                      </div>
                    </div>
                    <div className="flex items-center pt-2 justify-around">
                      <div>
                        <div>
                          <h1>Quantity</h1>
                        </div>
                        <div className="group border-[#8a8a8a]  border w-full flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                          <input
                            type="number"
                            placeholder="1"
                            className=" px-1 w-[200px] rounded-[0.5rem] outline-none focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <h1>Total</h1>
                        </div>
                        <div>
                          <span className=" text-[#4260da] text-heading">
                            &#8377;899.00{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                {browse && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                    <div className="rounded-xl my-4 bg-white  w-[40%] shadow-md ">
                      <div className="flex items-center p-3 bg-[#f3f3f3] rounded-t-xl justify-between">
                        <div className="">
                          <h2 className="text-heading">Select products</h2>
                        </div>
                        <div>
                          <div
                            onClick={() => setbrowse(!browse)}
                            className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px] cursor-pointer"
                          >
                            <IoIosClose />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="p-2 w-full">
                        <div className="hover:bg-[#FAFAFA] gap-1 flex items-center text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans pl-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]">
                          <div className="text-[16px]">
                            <CiSearch />
                          </div>

                          <input
                            className="outline-none hover:bg-[#FAFAFA] py-1 w-[95%]"
                            type="text"
                            name="Products"
                            placeholder="Search products"
                            value={searchTerm}
                            onChange={(e) => {
                              setSearchTerm(e.target.value);
                            }}
                            onKeyDown={onEnterKeyDown}
                            autoFocus={browse}
                          />
                          <button
                            onClick={fetchSearched}
                            className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                      <hr />

                      <div className="justify-between flex flex-col overflow-y-auto">
                        {products.map((product, index) => (
                          <div
                            key={index}
                            className="border rounded-md shadow-md mb-4"
                          >
                            {/* Product details */}
                            <div className="p-3 border-b">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    onChange={() =>
                                      toggleProductSelection(product)
                                    }
                                  />
                                  {product.images.length > 0 && (
                                    <img
                                      src={product.images[0].src}
                                      alt={product.images[0].alt}
                                      className="w-12 h-12 object-cover rounded-md"
                                    />
                                  )}

                                  <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                      {product.title}
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                      SKU: {product.sku}
                                    </p>
                                  </div>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">
                                  &#8377;{product.price}
                                </span>
                              </div>
                            </div>

                            {/* Variants */}
                            <div>
                              {product.variants.map((variant, variantIndex) => (
                                <div
                                  key={variantIndex}
                                  className="p-3 border-b flex items-center justify-between"
                                >
                                  <div className="flex items-start gap-4">
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                      onChange={() =>
                                        toggleVariantSelection(variant)
                                      }
                                    />
                                    <div>
                                      <h3 className="text-xs font-semibold text-gray-800">
                                        {variant.title}
                                      </h3>
                                      <p className="text-xs text-gray-600">
                                        SKU: {variant.sku}
                                      </p>
                                    </div>
                                  </div>

                                  <span className="text-sm font-semibold text-gray-800">
                                    &#8377;{variant.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <hr />
                      <div className="flex justify-between p-3 rounded-b-xl">
                        <div></div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setbrowse(!browse)}
                            className="text-[black] rounded-lg border px-3 py-1 text-[12px]"
                          >
                            Cancel
                          </button>

                          <button
                            onClick={() => {
                              setnotes(false);
                            }}
                            className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-1 text-[12px]"
                            type="Submit"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {customerModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                    <div className="z-40 xm:w-full sm:w-[55%] w-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-full border-2 rounded-2xl bg-white">
                        <div className="flex justify-between p-5 rounded-t-2xl items-center bg-[#f3f3f3]">
                          <p className="text-heading text-heading-color font-[600]">
                            Create a new customer
                          </p>
                          <button
                            onClick={() => setCustomerModal(false)}
                            className="m-1"
                          >
                            <MdCancel />
                          </button>
                        </div>
                        <hr className="border-2" />
                        <div className="h-[70vh] overflow-y-auto">
                          <div className=" px-4 pt-3 pb-5 flex gap-3 items-center bg-[white] sm:flex sm:flex-col">
                            <div className="sm:w-full w-1/2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                First Name
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                                <input
                                  name="first_name"
                                  onChange={handleInputChange}
                                  type="text"
                                  className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="sm:w-full w-1/2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Last Name
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                                <input
                                  name="last_name"
                                  onChange={handleInputChange}
                                  type="text"
                                  className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" px-4 pt-3 pb-5 bg-[white] sm:flex sm:flex-col">
                            <div className="w-full">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Email
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                <input
                                  name="email"
                                  onChange={handleInputChange}
                                  type="email"
                                  className="text-heading w-[90%] p-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" px-4 flex gap-3 items-center bg-[white] sm:flex sm:flex-col">
                            <div className="w-full py-2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Phone
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                <div className="w-[7%] py-2 flex border rounded-lg justify-center">
                                  <span className="w-6">
                                    <IndiaFlag />
                                  </span>
                                  <span className="text-heading">+91</span>
                                </div>
                                <input
                                  onChange={handleInputChange}
                                  name="phone"
                                  value={customerDetails.phone}
                                  type="tel"
                                  pattern="\d*"
                                  maxLength={10}
                                  className="text-heading w-[90%] p-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" px-4 pt-3 pb-5 bg-[white] flex flex-col gap-3">
                            <div className="w-full">
                              <label
                                htmlFor="email"
                                className="text-heading text-heading-color flex items-center cursor-pointer gap-2"
                              >
                                <input type="checkbox" id="email" />
                                Customer accepts email marketing
                              </label>
                            </div>
                            <div className="w-full">
                              <label
                                htmlFor="tax"
                                className="text-heading text-heading-color flex items-center cursor-pointer gap-2"
                              >
                                <input type="checkbox" id="tax" />
                                Customer is tax exempt
                              </label>
                            </div>
                          </div>
                          <hr className="border" />
                          <div className="px-4 text-heading font-medium">
                            Shipping Address
                          </div>
                          <div className=" px-4 pt-3 pb-5 bg-[white] sm:flex sm:flex-col">
                            <div className="flex gap-3 items-center bg-[white] sm:flex sm:flex-col">
                              <div className="sm:w-full w-1/2">
                                <h2 className="text-heading text-heading-color font-[450]">
                                  First Name
                                </h2>
                                <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                                  <input
                                    name="first_name"
                                    onChange={handleAddressChange}
                                    type="text"
                                    className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="sm:w-full w-1/2">
                                <h2 className="text-heading text-heading-color font-[450]">
                                  Last Name
                                </h2>
                                <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                                  <input
                                    name="last_name"
                                    onChange={handleAddressChange}
                                    type="text"
                                    className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-full py-2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Country/Region
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                <input
                                  type="text"
                                  value={"India"}
                                  readOnly
                                  className="text-heading w-[90%] p-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="w-full py-2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Company
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                <input
                                  value={customerDetails.addresses.company}
                                  name="company"
                                  onChange={handleAddressChange}
                                  type="text"
                                  className="text-heading w-[90%] p-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="w-full py-2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Address
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                <input
                                  value={customerDetails.addresses.address1}
                                  name="address1"
                                  onChange={handleAddressChange}
                                  type="text"
                                  className="text-heading w-[90%] p-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="flex gap-3 items-center bg-[white] sm:flex sm:flex-col">
                              <div className="sm:w-full w-1/2">
                                <h2 className="text-heading text-heading-color font-[450]">
                                  City
                                </h2>
                                <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                                  <input
                                    value={customerDetails.addresses.city}
                                    name="city"
                                    onChange={handleAddressChange}
                                    type="text"
                                    className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="sm:w-full w-1/2">
                                <h2 className="text-heading text-heading-color font-[450]">
                                  State
                                </h2>
                                <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                                  <select
                                    value={customerDetails.addresses.province}
                                    onChange={handleAddressChange}
                                    name="province"
                                    id="state"
                                    className="text-heading w-full px-1 outline-none focus:outline-none"
                                  >
                                    <option value="Andhra Pradesh">
                                      Andhra Pradesh
                                    </option>
                                    <option value="Andaman and Nicobar Islands">
                                      Andaman and Nicobar Islands
                                    </option>
                                    <option value="Arunachal Pradesh">
                                      Arunachal Pradesh
                                    </option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">
                                      Chandigarh
                                    </option>
                                    <option value="Chhattisgarh">
                                      Chhattisgarh
                                    </option>
                                    <option value="Dadar and Nagar Haveli">
                                      Dadar and Nagar Haveli
                                    </option>
                                    <option value="Daman and Diu">
                                      Daman and Diu
                                    </option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">
                                      Lakshadweep
                                    </option>
                                    <option value="Puducherry">
                                      Puducherry
                                    </option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">
                                      Himachal Pradesh
                                    </option>
                                    <option value="Jammu and Kashmir">
                                      Jammu and Kashmir
                                    </option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">
                                      Madhya Pradesh
                                    </option>
                                    <option value="Maharashtra">
                                      Maharashtra
                                    </option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">
                                      Tamil Nadu
                                    </option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">
                                      Uttar Pradesh
                                    </option>
                                    <option value="Uttarakhand">
                                      Uttarakhand
                                    </option>
                                    <option value="West Bengal">
                                      West Bengal
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="w-full py-2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                PIN Code
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                <input
                                  value={customerDetails.addresses.zip}
                                  name="zip"
                                  onChange={handleAddressChange}
                                  type="text"
                                  className="text-heading w-[90%] p-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="w-full py-2">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Phone
                              </h2>
                              <div className="group p-1 border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                                <div className="w-[7%] py-2 flex border rounded-lg justify-center">
                                  <span className="w-6">
                                    <IndiaFlag />
                                  </span>
                                  <span className="text-heading">+91</span>
                                </div>
                                <input
                                  onChange={handleAddressChange}
                                  name="phone"
                                  value={customerDetails.addresses.phone}
                                  type="tel"
                                  pattern="\d*"
                                  maxLength={10}
                                  className="text-heading w-[90%] p-1 outline-none focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[white] rounded-b-[15px] flex justify-end pr-7 py-3">
                          <button
                            className="text-[#1A1A1A] active:bg-[#E3E3E3] text-heading px-2 py-1 m-2 rounded-lg shadow-common active:shadow-active"
                            onClick={() => {
                              setCustomerModal(false);
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            className=" text-[#E3E3E3] bg-[#1A1A1A] text-heading px-2 py-1 m-2 rounded-lg active:shadow-active"
                            onClick={saveCustomer}
                          >
                            Save Customer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {contactInfo && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
                    <div className="z-40 xm:w-full sm:w-[55%] w-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-full border-2 rounded-2xl bg-white">
                        <div className="flex justify-between p-5 rounded-t-2xl items-center bg-[#f3f3f3]">
                          <p className="text-heading text-heading-color font-[600]">
                            Edit contact information
                          </p>
                          <button
                            onClick={() => {
                              setContactInfo(false);
                              setContact({ email: "", phone: "" });
                            }}
                            className="m-1"
                          >
                            <MdCancel />
                          </button>
                        </div>
                        <hr className="border-2" />
                        <div className=" px-4 pt-3 pb-5 flex gap-3 items-center bg-[white] flex-col">
                          <div className="w-full">
                            <h2 className="text-heading text-heading-color font-[450]">
                              Email
                            </h2>
                            <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                              <input
                                name="email"
                                onChange={(e) =>
                                  setContact({
                                    ...contact,
                                    email: e.target.value,
                                  })
                                }
                                value={contact.email}
                                type="text"
                                className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <h2 className="text-heading text-heading-color font-[450]">
                              Phone Number
                            </h2>
                            <div className="group p-1 border-[#8a8a8a] border rounded-[0.5rem] focus-within:border-blue-500">
                              <input
                                name="phone"
                                onChange={(e) =>
                                  setContact({
                                    ...contact,
                                    phone: e.target.value,
                                  })
                                }
                                value={contact.phone}
                                type="text"
                                className="text-heading w-[90%] px-1 outline-none focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="flex justify-end px-4 pt-3 pb-3">
                          <div className="flex gap-3">
                            <button
                              onClick={() => {
                                setContactInfo(false);
                                setContact({ email: "", phone: "" });
                              }}
                              className="shadow-common active:shadow-active text-heading py-1 px-2 rounded-lg"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={saveContactInfo}
                              className="bg-gray-900 text-white shadow-blackCommon active:shadow-blackActive text-heading py-1 px-2 rounded-lg"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {editAddress && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen  flex  items-center justify-center backdrop-blur-sm ">
                    <div className=" h-[80%] rounded-xl overflow-y-auto my-4 bg-white   w-[45%] shadow-md   sm:w-[80%]">
                      <div className="flex items-center h-[400] px-3 py-2 bg-[#f3f3f3] rounded-t-xl justify-between">
                        <div>
                          <h2 className="cursor-pointer text-[#303030] text-[14px] font-semibold ">
                            Edit address
                          </h2>
                        </div>
                        <div>
                          <button
                            className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[20px] cursor-pointer"
                            onClick={() => {
                              setEditAddress(false);
                            }}
                          >
                            <IoIosClose />
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <div className="flex gap-2">
                          <div>
                            <div className="px-4 pt-4">
                              <h2 className="text-heading text-heading-color font-[450]">
                                First name
                              </h2>
                            </div>
                            <div className="p-4 pt-2 ">
                              <input
                                placeholder="First Name"
                                type="text"
                                value={editingAddress.first_name}
                                onChange={(e) =>
                                  setEditingAddress({
                                    ...editingAddress,
                                    first_name: e.target.value,
                                  })
                                }
                                name="first_name"
                                className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="px-4 pt-4">
                              <h2 className="text-heading text-heading-color font-[450]">
                                Last Name
                              </h2>
                            </div>
                            <div className="p-4 pt-2 ">
                              <input
                                placeholder="Last Name"
                                type="text"
                                value={editingAddress.last_name}
                                onChange={(e) =>
                                  setEditingAddress({
                                    ...editingAddress,
                                    last_name: e.target.value,
                                  })
                                }
                                name="Last_name"
                                className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="px-4 ">
                            <h2 className="text-heading text-heading-color font-[450]">
                              Company
                            </h2>
                          </div>
                          <div className="p-4 pt-2">
                            <input
                              placeholder="Company"
                              onChange={(e) =>
                                setEditingAddress({
                                  ...editingAddress,
                                  company: e.target.value,
                                })
                              }
                              type="text"
                              value={editingAddress.company || ""}
                              name="company"
                              className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="px-4 ">
                            <h2 className="text-heading text-heading-color font-semibold">
                              Address
                            </h2>
                          </div>
                          <div className="p-4 pt-2">
                            <div className="flex items-center rounded-[0.5rem]  border-[#8a8a8a] border-[0.04125rem] ">
                              <span className=" text-[#8a8a8a] pl-[8px]">
                                {/* You can replace this with your desired icon */}
                                <IoSearch />
                              </span>
                              <input
                                placeholder="Address"
                                type="text"
                                name="address1"
                                className="py-[6px]   mx-3 w-full text-heading outline-none"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="px-4 ">
                            <h2 className="text-heading text-heading-color font-[450]">
                              Apartment, suite, etc.
                            </h2>
                          </div>
                          <div className="p-4 pt-2">
                            <input
                              placeholder="Apartment, suite, etc."
                              type="text"
                              name="address2"
                              className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                            />
                          </div>
                        </div>

                        <div className="flex items-center sm:block ">
                          <div className="w-1/2">
                            <div className="px-4 pt-3">
                              <h2 className="text-heading text-heading-color font-[450]">
                                City
                              </h2>
                            </div>
                            <div className="p-4 pt-2">
                              <input
                                placeholder="City"
                                type="text"
                                name="city"
                                className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                              />
                            </div>
                          </div>
                          <div className="w-1/2">
                            <div className="px-4 pt-3">
                              <h2 className="text-heading text-heading-color font-[450]">
                                State
                              </h2>
                            </div>
                            <div className="p-4 pt-2">
                              <select
                                className="py-[6px] px-2 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                                name="province"
                              >
                                <option value="Andaman and Nicobar Islands">
                                  Andaman and Nicobar Islands
                                </option>
                                <option value="Andhra Pradesh">
                                  Andhra Pradesh
                                </option>
                                <option value="Arunachal Pradesh">
                                  Arunachal Pradesh{" "}
                                </option>
                                <option value="Assam ">Assam </option>
                                <option value="Bihar">Bihar </option>
                                <option value="Chandigarh">Chandigarh </option>
                                <option value="Chhattisgarh ">
                                  Chhattisgarh{" "}
                                </option>
                                <option value="Dadra and Nagar Haveli">
                                  Dadra and Nagar Haveli
                                </option>
                                <option value="Daman and Diu">
                                  Daman and Diu{" "}
                                </option>
                                <option value="Delhi">Delhi </option>
                                <option value="Goa">Goa </option>
                                <option value="Gujarat">Gujarat </option>
                                <option value="Haryana">Haryana </option>
                                <option value="Himachal Pradesh ">
                                  Himachal Pradesh{" "}
                                </option>
                                <option value="Jammu and Kashmir">
                                  Jammu and Kashmir{" "}
                                </option>
                                <option value="Jharkhand">Jharkhand </option>
                                <option value="Karnataka">Karnataka </option>
                                <option value="Kerala ">Kerala </option>
                                <option value="Ladakh ">Ladakh </option>
                                <option value="Lakshadweep">
                                  Lakshadweep{" "}
                                </option>
                                <option value="Madhya Pradesh ">
                                  Madhya Pradesh{" "}
                                </option>
                                <option value="Maharashtra">
                                  Maharashtra{" "}
                                </option>
                                <option value="Manipur">Manipur </option>
                                <option value="Meghalaya">Meghalaya </option>
                                <option value="Mizoram">Mizoram </option>
                                <option value="Mizoram">Mizoram </option>
                                <option value="Odisha">Odisha </option>
                                <option value="Puducherry">Puducherry </option>
                                <option value="Punjab">Punjab </option>
                                <option value="Rajasthan">Rajasthan </option>
                                <option value="Sikkim">Sikkim </option>
                                <option value="Tamil Nadu">Tamil Nadu </option>
                                <option value="Telangana">Telangana </option>
                                <option value="Tripura">Tripura </option>
                                <option value="Uttar Pradesh">
                                  Uttar Pradesh{" "}
                                </option>
                                <option value="Uttarakhand">
                                  Uttarakhand{" "}
                                </option>
                                <option value="West Bengal ">
                                  West Bengal{" "}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="px-4 ">
                            <h2 className="text-heading text-heading-color font-[450]">
                              PIN code
                            </h2>
                          </div>
                          <div className="p-4 pt-2">
                            <input
                              placeholder="PIN code"
                              type="number"
                              name="zip"
                              className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="px-4 ">
                            <h2 className="text-heading text-heading-color font-[450]">
                              Phone number
                            </h2>
                          </div>
                          <div className="p-4 pt-2">
                            <input
                              placeholder="Phone Number"
                              type="text"
                              name="phone"
                              className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                            />
                          </div>
                        </div>

                        <hr />

                        <div className="flex  justify-end  px-3 py-4 gap-2 rounded-b-xl ">
                          <button
                            onClick={() => {
                              setEditAddress(false);
                            }}
                            className="shadow-common active:shadow-active text-heading py-1 px-2 rounded-lg"
                          >
                            Cancel
                          </button>
                          <button className="bg-gray-900 text-white shadow-blackCommon active:shadow-blackActive text-heading py-1 px-2 rounded-lg">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="rounded-xl my-4 bg-white shadow-md border ">
                  <div className=" my-4 bg-white pt-4 px-4 ">
                    <div>
                      <h2 className="text-heading text-heading-color font-[650]">
                        Payment
                      </h2>
                    </div>
                    <div className="rounded-md my-4 bg-white border gap-4 flex flex-col p-4">
                      <div className="flex justify-between">
                        <div className="text-heading w-[180px]">Subtotal</div>
                        <div className="text-[#616161]  w-[100px]  text-heading">
                          ---
                        </div>
                        <div></div>
                        {checkedProducts.map((product, index)=>{
                          <span key={index} className="text-[#616161] text-heading">
                          &#8377;{product.price}{" "}
                        </span>
                        })}
                        
                      </div>
                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading w-[180px] text-[#bcbab7] ">
                          Add discount
                        </div>
                        <div className="  w-[100px]  text-heading">---</div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading w-[180px] items-start">
                          Add Shipping and delivery
                        </div>
                        <div className=" items-start w-[100px] text-heading">
                          ---
                        </div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>

                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading w-[180px] items-start">
                          Partial Payment
                        </div>
                        <div className=" items-start w-[100px] text-heading">
                          ---
                        </div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className="flex justify-between text-[#bcbab7] ">
                        <div className="text-heading flex items-center gap-1 w-[180px]">
                          Estimated tax{" "}
                          <div className="text-[#616161] text-[16px]">
                            <AiOutlineInfoCircle />
                          </div>{" "}
                        </div>
                        <div className=" w-[100px]  text-heading">
                          Not calculated
                        </div>
                        <div></div>
                        <span className="text-heading">&#8377;0.00 </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-heading text-heading-color w-[180px] font-[650]">
                          Total{" "}
                        </div>
                        <div className="text-[#616161]  w-[100px]  text-heading">
                          ---
                        </div>
                        <div></div>
                        <span className="text-[#616161] text-heading font-[650]">
                          &#8377;0.00{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full py-4  border-t bg-[#f7f7f7] rounded-b-xl  px-4 ">
                    <h3
                      className="text-sm text-heading flex items-center gap-2"
                      htmlFor="tax"
                    >
                      Add a product to calculate total and view payment options.
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#303030] py-1">
                    Timeline
                  </h3>
                  <div className=" border-[1px]  bg-white pt-[15px]	 shadow-md rounded-[8px]">
                    <div className=" flex items-center px-[10px]  ">
                      <div className="w-[45px] h-[45px] ">
                        <img className="rounded-lg" src={Product2} />
                      </div>

                      <div className="w-full outline-none mx-[8px]">
                        <input
                          className="w-full outline-none text-[14px] "
                          // type="text"
                          placeholder="Leave a comment...."
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between bg-[#f7f7f7] px-4 py-5  rounded-b-[8px]">
                      <div className="flex items-center gap-3 text-[16px] text-[#303030]">
                        <div className="">
                          <button className="text-[#696666]">
                            <BsEmojiSmile />
                          </button>
                        </div>
                        <div>
                          <button className="text-[#696666]">
                            <CiAt />
                          </button>
                        </div>
                        <div>
                          <button className="text-[#696666]">
                            <FiHash />
                          </button>
                        </div>
                        <div className="pb-[6px]">
                          <input className="text-[14px]" type="file"></input>
                        </div>
                      </div>
                      <div>
                        <button className="text-[13px] border-[1px] px-[10px] py-1 rounded-lg text-[#303030] font-semibold">
                          Post
                        </button>
                      </div>
                    </div>
                    <h2 className="text-[#616161] text-[13px] float-right p-[2px] font-medium">
                      Only you and other staff can see comments
                    </h2>
                  </div>

                  <div
                    className={`border-l-[2.5px] relative  max-h-[800px] ml-10  border-[#a5a4a4] top-0 ${
                      editAddress ? "-z-10" : ""
                    }`}
                  >
                    <div className=" flex flex-col gap-6 py-[40px] ">
                      <div className="flex flex-col">
                        <h3 className="px-[20px] text-[#616161] text-[13px]">
                          Yesterday
                        </h3>
                        <div className="flex items-center px-[20px] py-[10px]   ">
                          <span className="absolute left-[-10px] text-[#747373]">
                            <GrSquare />
                          </span>
                          <div className="flex gap-[30px]">
                            <h3 className="text-[#303030] text-[13px]">
                              Order Confirmation email for order{" "}
                              {/* <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "} */}
                              sent to this customer (Aroramonica4@gmail.com).
                            </h3>
                            <span className="flex  text-[#303030] text-[14px]">
                              5.00pm
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="px-[20px] text-[#616161] text-[13px]">
                          Yesterday
                        </h3>
                        <div className="flex items-center px-[20px] py-[10px]   ">
                          <span className="absolute left-[-10px] text-[#747373]">
                            <GrSquare />
                          </span>
                          <div className="flex gap-[30px]">
                            <h3 className="text-[#303030] text-[13px]">
                              Order Confirmation email for order{" "}
                              {/* <Link>
                          <button className=" bg-[#e3e3e3] font-semibold rounded-lg py-[2px] px-[4px] text-[#303030] ">
                            #42544
                          </button>
                        </Link>{" "} */}
                              sent to this customer (Aroramonica4@gmail.com).
                            </h3>
                            <span className="flex  text-[#303030] text-[14px]">
                              5.00pm
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="px-[20px] text-[#616161] text-[13px]">
                          Yesterday
                        </h3>
                        <div className="flex items-center px-[20px] py-[10px]   ">
                          <span className="absolute left-[-10px] text-[#747373]">
                            <GrSquare />
                          </span>
                          <div className="flex gap-[30px]">
                            <h3 className="text-[#303030] text-[13px]">
                              Order Confirmation email for order sent to this
                              customer (Aroramonica4@gmail.com).
                            </h3>
                            <span className="flex  text-[#303030] text-[14px]">
                              5.00pm
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="px-[20px] text-[#616161] text-[13px]">
                          Yesterday
                        </h3>
                        <div className="flex items-center px-[20px] py-[10px]   ">
                          <span className="absolute left-[-10px] text-[#747373]">
                            <GrSquare />
                          </span>
                          <div className="flex gap-[30px]">
                            <h3 className="text-[#303030] text-[13px]">
                              Order Confirmation email for order sent to this
                              customer (Aroramonica4@gmail.com).
                            </h3>
                            <span className="flex  text-[#303030] text-[14px]">
                              5.00pm
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] sm:w-[93%] xl:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
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
                      <textarea
                        className="outline-none py-1 w-[95%]"
                        type="text"
                        name="notes"
                        placeholder="No Notes"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    {selectedCustomer ? (
                      <div className="px-4 pt-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <h1 className="text-heading text-heading-color font-[650]">
                              Customer
                            </h1>
                            <button
                              onClick={() => setSelectedCustomer(null)}
                              className="cursor-pointer hover:bg-[#e3e3e3] p-2 rounded-lg transition-all duration-100"
                            >
                              <RxCross1 />
                            </button>
                          </div>
                          <p className="text-heading text-blue-500 hover:underline">
                            <Link
                              to={`/customers/customer-details/${selectedCustomer._id}`}
                            >
                              {`${selectedCustomer.first_name} ${
                                selectedCustomer.last_name &&
                                selectedCustomer.last_name
                              }`}
                            </Link>
                          </p>
                          <p className="text-heading text-heading-color">{`${selectedCustomer.orders_count} orders`}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <h1 className="text-heading text-heading-color font-[650]">
                              Customer Information
                            </h1>
                            <button
                              onClick={() => {
                                setContact({
                                  ...contact,
                                  email: selectedCustomer.email,
                                  phone: selectedCustomer.phone,
                                });
                                setContactInfo(true);
                              }}
                              className="cursor-pointer hover:bg-[#e3e3e3] p-2 rounded-lg transition-all duration-100"
                            >
                              <GoPencil />
                            </button>
                          </div>
                          <p className="text-heading text-heading-color">
                            {selectedCustomer.email
                              ? selectedCustomer.email
                              : "No email provided"}
                          </p>
                          <p className="text-heading text-heading-color">
                            {selectedCustomer.phone
                              ? selectedCustomer.phone
                              : "No phone number"}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <h1 className="text-heading text-heading-color font-[650]">
                              Shipping address
                            </h1>
                            <button
                              onClick={() => {
                                setEditAddress(true);
                                setEditingAddress(
                                  selectedCustomer.default_address
                                );
                              }}
                              className="cursor-pointer hover:bg-[#e3e3e3] p-2 rounded-lg transition-all duration-100"
                            >
                              <GoPencil />
                            </button>
                          </div>
                          <p className="text-heading cursor-default">
                            {selectedCustomer.default_address ? (
                              <>
                                <h2>{`${selectedCustomer.default_address.first_name} ${selectedCustomer?.default_address?.last_name}`}</h2>
                                <h2>{`${
                                  selectedCustomer.default_address.address1
                                    ? `${selectedCustomer.default_address.address1}, `
                                    : ""
                                }${
                                  selectedCustomer.default_address.address2 ??
                                  ""
                                }`}</h2>
                                <h2>{`${
                                  selectedCustomer.default_address.city ?? ""
                                } ${
                                  selectedCustomer.default_address.province ??
                                  ""
                                } ${
                                  selectedCustomer.default_address.zip ?? ""
                                }`}</h2>
                                {selectedCustomer.default_address.country && (
                                  <h2>
                                    {selectedCustomer.default_address.country}
                                  </h2>
                                )}
                              </>
                            ) : (
                              <h2>No address provided</h2>
                            )}
                          </p>
                          <p className="text-heading cursor-default">{`${selectedCustomer.orders_count} orders`}</p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="px-4 pt-4">
                          <h1 className="text-heading text-heading-color font-[650]">
                            Customer
                          </h1>
                        </div>
                        <div
                          className={`p-4 pt-2 relative ${
                            item ? "-z-10" : ""
                          } ${
                            notes ||
                            browse ||
                            customerModal ||
                            allProducts ||
                            editAddress
                              ? "-z-10"
                              : ""
                          }  ${browse ? "-z-10" : ""}`}
                        >
                          <OutsideClickHandler
                            onOutsideClick={() => setShow(false)}
                          >
                            <div className="py-[6px] hover:bg-[#FAFAFA]  px-3 w-full gap-1 flex items-center rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading">
                              <div className="text-[16px]">
                                <CiSearch />
                              </div>
                              <input
                                onClick={() => setShow(true)}
                                className="outline-none hover:bg-[#FAFAFA] py-1 line-clamp-1 "
                                type="text"
                                name=" Customer"
                                placeholder="Search or Create a Customer "
                              />
                            </div>
                            {show && (
                              <div className="rounded-xl h-60 my-4 p-1 bg-white shadow-md border absolute z-10  b  overflow-y-auto overflow-x-auto w-[90%]  mt-1">
                                <div className="border-b-2 pb-2">
                                  <button
                                    onClick={() => {
                                      setShow(false);
                                      setCustomerModal(true);
                                    }}
                                    className="text-[12px] flex items-center gap-2 text-[#303030]  w-full py-1 hover:bg-[#f7f7f7] rounded-md pl-2  selection:  cursor-pointer"
                                  >
                                    <div className="text-[16px] text-[#303030]  ">
                                      <CgAdd />
                                    </div>
                                    <h3 className="text-heading flex  items-center gap-2">
                                      Create a new customer
                                    </h3>
                                  </button>
                                </div>
                                <div className="pt-2">
                                  {customers.map((customer, index) => {
                                    return (
                                      <button
                                        onClick={() => {
                                          setSelectedCustomer(customer);
                                          setShow(false);
                                        }}
                                        key={index}
                                        className="text-[12px] text-left flex flex-col text-[#303030] w-full py-1  hover:bg-[#f7f7f7] rounded pl-2  "
                                      >
                                        <span className="w-full">
                                          <h1>{`${customer.first_name} ${
                                            customer.last_name &&
                                            customer.last_name
                                          }`}</h1>
                                          {customer.email && (
                                            <h1>{customer.email}</h1>
                                          )}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </OutsideClickHandler>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-center  p-4">
          <button
            type="submit"
            className="bg-[#1A1A1A] text-[#E3E3E3] text-[16px] py-1 px-6 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Createorder;
