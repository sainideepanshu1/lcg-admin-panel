import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";

const AddProduct = () => {
  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-full">
        <div className="w-[62.375rem] ml-auto mr-auto sm:w-full">
          <div className="flex items-center py-6 text-lg font-sans font-bold sm:px-2">
            <Link className="p-1" to="/">
              <FaArrowLeftLong />
            </Link>
            Add product
          </div>
          <form>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-[70%] flex flex-col sm:w-[93%]">
                <div className="rounded-xl bg-white shadow-md p-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Title
                        </label>
                      </div>
                      <input
                        className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]"
                        type="text"
                        placeholder="Short sleeve t-shirt"
                      />
                    </div>
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Description
                        </label>
                      </div>
                      <input
                        className="text-[0.8125rem] w-full border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030] text-[#303030] font-[450]"
                        type="text"
                        placeholder="Short sleeve t-shirt"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-5 pt-5">Media</div>
                  <div className="p-4">
                    <input type="file" className="w-full" name="" id="" />
                  </div>
                </div>
                <div className="rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-4 pt-4">
                    <h2>Pricing</h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-3 px-2 py-4 gap-3 sm:flex sm:flex-col">
                      <div>
                        <div>Price</div>
                        <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                          <span className="p-1 text-[#616161]">&#8377;</span>
                          <input
                            type="number"
                            placeholder="0.00"
                            className="w-[90%] px-1 outline-none focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <div>Compare-at price</div>
                        <div className="group border-[#8a8a8a] border flex items-center rounded-[0.5rem] focus-within:border-blue-500">
                          <span className="p-1 text-[#616161]">&#8377;</span>
                          <input
                            type="number"
                            placeholder="0.00"
                            className="w-[90%] px-1 outline-none focus:outline-none"
                          />
                          <div className="group relative">
                            <CiCircleQuestion size={20} />
                            <div className="hidden group-hover:block p-[0.75rem] absolute shadow-md text-[12px] bg-white rounded-lg w-[16.75rem]">
                              To display a markdown, enter a value higher than
                              your price.
                              <br /> Often shown with a strikethrough.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-sm flex items-center gap-2"
                        htmlFor="tax"
                      >
                        <input type="checkbox" id="tax" className="" />
                        Charge tax on this product
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="w-[30%] sm:w-[93%] sm:flex sm:flex-col-reverse sm:items-center">
                <div className="sm:mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div className="px-4 pt-4">
                      <h2 className="text-heading text-heading-color font-[650]">
                        Status
                      </h2>
                    </div>
                    <div className="p-4 pt-2">
                      <select
                        className="w-full text-heading border-[#8a8a8a] border rounded-[0.5rem] py-[6px] pl-[12px] pr-[8px]"
                        name=""
                        id=""
                      >
                        <option value="">Active</option>
                        <option value="">Draft</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:w-full">
                  <div className="bg-white rounded-[0.75rem] shadow-md">
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Product Category
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          placeholder="Search"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Product Type
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          placeholder="Add Custom Category"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Vendor
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Collections
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="px-4 pt-4">
                        <h2 className="text-heading text-heading-color font-[450]">
                          Tags
                        </h2>
                      </div>
                      <div className="p-4 pt-2">
                        <input
                          type="text"
                          className="py-[6px] px-3 w-full rounded-[0.5rem] border-[#8a8a8a] border-[0.04125rem] text-heading"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl flex items-center justify-center  p-4">
                <button className="bg-[#1A1A1A] text-[#E3E3E3] text-heading p-3 rounded-lg">
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
