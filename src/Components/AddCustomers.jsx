import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function AddCustomers() {
  const [formData, setFormData] = useState({
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
      province: "",
      zip: "",
      phone: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      addresses: {
        ...prevData.addresses,
        [name]: value,
      },
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8000/api/customers/addCustomer`,
        formData
      );

      console.log(response);
      if (response.status !== 201) {
        throw new Error(`Failed to add customer: ${response.status}`);
      }

      // Clear the form after successful submission
      setFormData({
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
          province: "",
          zip: "",
          phone: "",
        },
      });

      toast.success(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div
        className="bg-[#F1F1F1] w-full"
        onSubmit={handleFormSubmit}
      >
        <div className="flex items-center   text-[20px] font-bold px-7 py-6 gap-3">
          <span className="text-[16px]">
            <Link to="/customers">
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
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                  />
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
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                  />
                </div>
              </div>
            </div>

            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-[450]">
                Email
              </h2>
            </div>
            <div className="p-4 pt-2">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
              />
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
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="py-[6px]  px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                />
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
                You should ask your customers for permission before you
                subscribe them to your marketing emails or SMS.
              </p>
            </div>
          </div>
        </div>

        {/* --------------Address start---------- */}
        <hr></hr>

        <div className="flex  px-7 py-5  justify-between md:block  xm:px-[0px] ">
          <div className=" flex flex-col gap-2 text-[14px] font-semibold">
            <h3 className="font-bold">Address</h3>
            <p className="text-[#616161]">
              The primary address of this customer
            </p>
          </div>

          <div className="border-[1px] w-[50%] rounded-lg py-[10px] bg-white md:w-[100%] md:my-[10px]">
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
                    name="first_name"
                    value={formData.addresses.first_name}
                    onChange={handleAddressChange}
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
                    name="last_name"
                    value={formData.addresses.last_name}
                    onChange={handleAddressChange}
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
                    name="company"
                    value={formData.addresses.company}
                    onChange={handleAddressChange}
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
                    {/* You can replace this with your desired icon */}
                    <IoSearch />
                  </span>
                  <input
                    placeholder="Address"
                    type="text"
                    name="address1"
                    value={formData.addresses.address1}
                    onChange={handleAddressChange}
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
                  placeholder="Apartment, suite, etc."
                  type="text"
                  name="address2"
                  value={formData.addresses.address2}
                  onChange={handleAddressChange}
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
                    name="city"
                    value={formData.addresses.city}
                    onChange={handleAddressChange}
                    className="py-[6px] px-5 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                  />
                </div>
              </div>

              <select
                className="w-[48%] mt-[24px] bg-white text-heading border-[#8a8a8a] border rounded-[0.5rem] py-[8px] pl-[12px] mx-4  pr-[8px] sm:w-[95%] xm:w-[92%] "
                name="province"
                value={formData.addresses.province}
                onChange={handleAddressChange}
              >
                <option disabled>Select a state</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh </option>
                <option value="Assam ">Assam </option>
                <option value="Bihar">Bihar </option>
                <option value="Chandigarh">Chandigarh </option>
                <option value="Chhattisgarh ">Chhattisgarh </option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu </option>
                <option value="Delhi">Delhi </option>
                <option value="Goa">Goa </option>
                <option value="Gujarat">Gujarat </option>
                <option value="Haryana">Haryana </option>
                <option value="Himachal Pradesh ">Himachal Pradesh </option>
                <option value="Jammu and Kashmir">Jammu and Kashmir </option>
                <option value="Jharkhand">Jharkhand </option>
                <option value="Karnataka">Karnataka </option>
                <option value="Kerala ">Kerala </option>
                <option value="Ladakh ">Ladakh </option>
                <option value="Lakshadweep">Lakshadweep </option>
                <option value="Madhya Pradesh ">Madhya Pradesh </option>
                <option value="Maharashtra">Maharashtra </option>
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
                <option value="Uttar Pradesh">Uttar Pradesh </option>
                <option value="Uttarakhand">Uttarakhand </option>
                <option value="West Bengal ">West Bengal </option>
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
                  type="number"
                  name="zip"
                  value={formData.addresses.zip}
                  onChange={handleAddressChange}
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
                  type="number"
                  name="phone"
                  value={formData.addresses.phone}
                  onChange={handleAddressChange}
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
              Notes are private and won&apos;t be shared with the customer.
            </p>
          </div>

          <div className="border-[1px] w-[50%] rounded-lg py-[10px] bg-white md:w-[100%] md:my-[10px] ">
            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-[450]">
                Note
              </h2>
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

        <div className="flex  px-7 py-5  justify-between md:block  xm:px-[0px] ">
          <div className=" flex flex-col gap-2 text-[14px] font-semibold">
            <h3 className="font-bold">Tags</h3>
            <p className="text-[#616161]">
              Tags can be used to categorize customers into groups.
            </p>
          </div>

          <div className="border-[1px] w-[50%] rounded-lg py-[10px] bg-white md:w-[100%] md:my-[10px] ">
            <div className="px-4 pt-4">
              <h2 className="text-heading text-heading-color font-[450]">
                Tags
              </h2>
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
              type="submit"
              className="bg-[#303030]  py-[5px] px-[20px] rounded-lg hover:bg-[rgba(74,74,74,1)] text-white"
              onClick={handleFormSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCustomers;
