import React, { useState } from "react";
import { LuAlertTriangle } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

function AddCustomers() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  
 
// ---------------form vaildition----
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = (e) => {  
    e.preventDefault();


    if (!formData.firstName.trim()) {
      setErrors({ ...errors, firstName: "First name is required" });
    } else {
      setErrors({ ...errors, firstName: "" });
    }

 


    if (!formData.phoneNumber.trim()) {
      setErrors({...errors,phoneNumber:"Phone number is required"})
     
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrors({...errors,phoneNumber:"Invalid phone number format"})
    }
    else{
      setErrors({...errors,phoneNumber:""})
    }
    setErrors(formErrors);
    if (Object.values(formErrors).every(error => !error)) {
      
    }

  };

  return (
    <div onSubmit={handleFormSubmit} className="bg-[#F1F1F1] w-full h-[100%] ">
      <div className="flex justify-between px-7 py-5 bg-[rgba(26,26,26,1)]  ">
        <div className="flex items-center text-[#e3e3e3] gap-2">
          <span>
            <LuAlertTriangle />
          </span>
          <h3>Unsaved changes</h3>
        </div>

        <div className="flex items-center gap-3 text-[14px]">
          <button className="  rounded-lg bg-[#303030]  hover:bg-[rgba(74,74,74,1)] py-[5px] px-[10px] text-[#e3e3e3]">
            Discard
          </button>
          <button
            onClick={handleFormSubmit}
            className="bg-[#303030]  py-[5px] px-[10px] rounded-lg hover:bg-[rgba(74,74,74,1)] text-white"
          >
            Save
          </button>
        </div>
      </div>

      <div className="flex items-center   text-[20px] font-bold px-7 py-6 gap-3">
        <span  
        
        className="text-[16px]">
          <Link  to="/customers" >
           <FaArrowLeftLong />
           </Link>
          
        </span>
        <h3>New customer</h3>
      </div>
      <hr />

      <div className="flex  px-7 py-5  justify-between md:block  xm:px-[0px] ">
        <div className="text-[14px] font-bold">
          <h3>Customer overview</h3>
        </div>

        <div className="border-[1px] w-[50%] rounded-lg bg-white md:w-[100%] md:my-[10px] ">
          <div className="flex xm:block">
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
                {errors.firstName &&  (
                  <p className="text-[#ff0000e5] py-[3px]">
                    {errors.firstName}*
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="px-2 pt-4">
                <h2 className="text-heading text-heading-color font-[450]">
                  Last name
                </h2>
              </div>
              <div className="p-4 pt-2">
                <input
                placeholder="Last name"
                  type="text"
                  name="Last name"
                  className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <div className="px-4 pt-4">
                  <h2 className="text-heading text-heading-color font-[450]">
                    Email
                  </h2>
                </div>
                <div className="p-4 pt-2">
                  <input
                  placeholder="Email"
                    type="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                  />
                     {/* {errors.email && (
                  <p className="text-[#ff0000e5] py-[3px]">
                    {errors.email}*
                  </p> */}
                {/* )} */}
                </div>
                {/* {errors.firstName && (
                  <p className="text-[#ff0000e5] py-[3px]">
                    {errors.firstName}*
                  </p>
                )} */}
              </div>
            </div>
          </div>

          <div>
            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-[450]">
                Phone number
              </h2>
            </div>
            <div className="p-4 pt-2">
              <input
              placeholder="Phone Number"
                type="text"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
                className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
              />
               {errors.phoneNumber && (
                  <p className="text-[#ff0000e5] py-[3px]">
                    {errors.phoneNumber}*
                  </p>
                )}
            </div>
          </div>

          <div className=" flex flex-col gap-3 px-5 py-[5px] text-[14px]">
            <div className="flex  gap-3">
              <input type="checkbox" className="rounded " />
              <p className="">Customer agreed to receive marketing emails.</p>
            </div>

            <div className="flex  gap-3">
              <input type="checkbox" className="rounded " />
              <p className="">
                Customer agreed to receive SMS marketing text messages.
              </p>
            </div>

            <p className="text-[#616161]">
              You should ask your customers for permission before you subscribe
              them to your marketing emails or SMS.
            </p>
          </div>

         
        </div>
      </div>

      {/* --------------Address start---------- */}
      <hr></hr>

      <div className="flex  px-7 py-5  justify-between md:block  xm:px-[0px] ">
        <div className=" flex flex-col gap-2 text-[14px] font-semibold">
          <h3 className="font-bold">Address</h3>
          <p className="text-[#616161]">The primary address of this customer</p>
        </div>

        <div className="border-[1px] w-[50%] rounded-lg py-[10px] bg-white md:w-[100%] md:my-[10px] ">
          <div className="flex xm:block">
            <div>
              <div className="px-4 pt-4">
                <h2 className="text-heading text-heading-color font-[450]">
                  First name
                </h2>
              </div>
              <div className="p-4 pt-2 ">
                <input
                placeholder="First name"
                  type="text"
                  name="First name"
                  className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>

            <div>
              <div className="px-4 pt-4">
                <h2 className="text-heading text-heading-color font-[450]">
                  Last name
                </h2>
              </div>
              <div className="p-4 pt-2">
                <input
                placeholder="Last name"
                  type="text"
                  name="Last name"
                  className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="px-4 pt-4">
                <h2 className="text-heading text-heading-color font-[450]">
                  Company
                </h2>
              </div>
              <div className="p-4 pt-2">
                <input
                placeholder="Company"
                  type="text"
                  name="Company"
                  className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-semibold">
                Address
              </h2>
            </div>
            <div className="p-4 pt-2">
              <div className="flex items-center rounded-[0.5rem]  border-[#8a8a8a] border-[0.04125rem] ">
                <span className=" text-[#8a8a8a] pl-[8px]">
                  <IoSearch />
                </span>
                <input
                placeholder="Address"
                  type="text"
                  name="Address"
                  className="py-[6px]   mx-3 w-full text-heading outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-[450]">
                Apartment, suite, etc.
              </h2>
            </div>
            <div className="p-4 pt-2">
              <input
              placeholder="Apartment,suite,etc."
                type="text"
                name="Apartment, suite, etc."
                className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
              />
            </div>
          </div>

          <div className="flex items-center sm:block ">
            <div>
              <div className="px-4 pt-4">
                <h2 className="text-heading text-heading-color font-[450]">
                  City
                </h2>
              </div>
              <div className="p-4 pt-2">
                <input
                placeholder="City"
                  type="text"
                  name="City"
                  className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
              </div>
            </div>

            <select
              className="w-[48%] mt-[24px] bg-white text-heading border-[#8a8a8a] border rounded-[0.5rem] py-[8px] pl-[12px] mx-4  pr-[8px] sm:w-[95%] xm:w-[92%] "
              name="status"
              id=""
            >
              <option value="" disabled>
                Select a state
              </option>
              <option value="Active">Andaman and Nicobar Islands</option>
              <option value="Draft">Andhra Pradesh</option>
              <option value="Draft">Arunachal Pradesh </option>
              <option value="Draft">Assam </option>
              <option value="Draft">Bihar </option>
              <option value="Draft">Chandigarh </option>
              <option value="Draft">Chhattisgarh </option>
              <option value="Draft">Dadra and Nagar Haveli </option>
              <option value="Draft">Daman and Diu </option>
              <option value="Draft">Delhi </option>
              <option value="Draft">Goa </option>
              <option value="Draft">Gujarat </option>
              <option value="Draft">Haryana </option>
              <option value="Draft">Himachal Pradesh </option>
              <option value="Draft">Jammu and Kashmir </option>
              <option value="Draft">Jharkhand </option>
              <option value="Draft">Karnataka </option>
              <option value="Draft">Kerala </option>
              <option value="Draft">Ladakh </option>
              <option value="Draft">Lakshadweep </option>
              <option value="Draft">Madhya Pradesh </option>
              <option value="Draft">Maharashtra </option>
              <option value="Draft">Manipur </option>
              <option value="Draft">Meghalaya </option>
              <option value="Draft">Mizoram </option>
              <option value="Draft">Mizoram </option>
              <option value="Draft">Odisha </option>
              <option value="Draft">Puducherry </option>
              <option value="Draft">Punjab </option>
              <option value="Draft">Rajasthan </option>
              <option value="Draft">Sikkim </option>
              <option value="Draft">Tamil Nadu </option>
              <option value="Draft">Telangana </option>
              <option value="Draft">Tripura </option>
              <option value="Draft">Uttar Pradesh </option>
              <option value="Draft">Uttarakhand </option>
              <option value="Draft">West Bengal </option>
            </select>
          </div>

          <div>
            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-[450]">
                PIN code
              </h2>
            </div>
            <div className="p-4 pt-2">
              <input
              placeholder="PIN code"
                type="text"
                name="Apartment, suite, etc."
                className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
              />
            </div>
          </div>

          <div>
            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-[450]">
                Phone
              </h2>
            </div>
            <div className="p-4 pt-2">
              <input
              placeholder="Phone"
                type="text"
                name="Phone"
                className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
              />

              
              
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* -----tax---- */}

      <div className="flex  px-7 py-5  justify-between md:block  xm:px-[0px] ">
        <div className="font-semibold	">
          <h3>Tax exemptions</h3>
        </div>

        <div className="border-[1px] w-[50%] rounded-lg py-[10px] bg-white md:w-[100%] md:my-[10px] ">
          <label className="text-heading cursor-pointer	 px-4">
            <input className="mx-3" type="checkbox" />
            Collect tax
          </label>
        </div>
      </div>

      <hr></hr>

      {/* notes--------------- */}

      <div className="flex  px-7 py-5  justify-between md:block  xm:px-[0px] ">
        <div className=" flex flex-col gap-2 text-[14px] font-semibold">
          <h3 className="font-bold">Notes</h3>
          <p className="text-[#616161]">
            Notes are private and won't be shared with the customer.
          </p>
        </div>

        <div className="border-[1px] w-[50%] rounded-lg py-[10px] bg-white md:w-[100%] md:my-[10px] ">
          <div className="px-4 pt-4">
            <h2 className="text-heading text-heading-color font-[450]">Note</h2>
          </div>
          <div className="p-4 pt-2">
            <input
            placeholder="Note"
              type="text"
              name="Note"
              className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
            />
          </div>
        </div>
      </div>
      <hr></hr>
      {/* ------------------ */}

      <div className="flex  px-7 py-5  justify-between md:block  xm:px-[0px] ">
        <div className=" flex flex-col gap-2 text-[14px] font-semibold">
          <h3 className="font-bold">Tags</h3>
          <p className="text-[#616161]">
            Tags can be used to categorize customers into groups.
          </p>
        </div>

        <div className="border-[1px] w-[50%] rounded-lg py-[10px] bg-white md:w-[100%] md:my-[10px] ">
          <div className="px-4 pt-4">
            <h2 className="text-heading text-heading-color font-[450]">Tags</h2>
          </div>
          <div className="p-4 pt-2">
            <input
            placeholder="Tags"
              type="text"
              name="Tags"
              className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
            />

            <h4 className="text-[14px] text-heading-color py-2 font-[450]">
              Add existing tags:
            </h4>
            <div className=" flex flex-wrap gap-2 text-[15px] text-[#050505b7] ">
              <button className="text-[12px] px-[6px] py-[2px] text-[#292626b7] bg-[#d3d4d4] rounded-lg">
                <span>password page</span>
              </button>
              <button className="text-[12px] px-[6px] py-[0px] bg-[#d3d4d4] rounded-lg">
                <span>prospect</span>
              </button>
              <button className="text-[12px] px-[6px] py-[0px] bg-[#d3d4d4] rounded-lg">
                <span>discount</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-7 py-5  ">
        <div className="flex items-center gap-3 text-[14px]">
          
          <button
            onClick={handleFormSubmit}
            className="bg-[#303030]  py-[5px] px-[20px] rounded-lg hover:bg-[rgba(74,74,74,1)] text-white"
          >
            Save
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default AddCustomers;
