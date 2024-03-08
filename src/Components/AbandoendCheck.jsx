import { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { CgSortAz } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { TbArrowsSort } from 'react-icons/tb';
import { IoIosSearch } from 'react-icons/io';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';
import 'react-loading-skeleton/dist/skeleton.css';
import { IoIosClose } from 'react-icons/io';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { useRef } from 'react';
import { ImCancelCircle } from 'react-icons/im';

const Abandoendcheck = () => {
  const [Export, setExport] = useState(false);
  const Exportref = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState();
  const sortref = useRef(null);
  const [Search, setSearch] = useState();

  const handleClearSearch = () => {
    setSearchTerm('');
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function handleSearch() {
    setSearch(!Search);
  }

  const handleSortClick = (event) => {
    if (sortref.current && !sortref.current.contains(event.target)) {
      setSort(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleSortClick);

    return () => {
      document.removeEventListener('click', handleSortClick);
    };
  }, []);

  const Exportclick = (event) => {
    if (Exportref.current && !Exportref.current.contains(event.target)) {
      setExport(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', Exportclick, true);
    return () => {
      document.removeEventListener('click', Exportclick);
    };
  });

  return (
    <>
      <div className="bg-[#f1f1f1] w-full  px-12 xm:px-0  sm:px-2 ">
        {/* <-------heding-----> */}
        <div className="justify-between items-center flex px-2 py-8">
          <div>
            <h1 className="text-[20px] font-[600] text-[#000000]">
              Abandoned Checkouts
            </h1>
          </div>

          <button
            onClick={() => setExport(!Export)}
            className="hover:bg-[#303030] bg-[#000000] text-[#F9FFFF] rounded-lg px-3 py-2 text-[12px]"
          >
            Export
          </button>
        </div>
        {Export && (
          <div className="fixed inset-0 bg-black bg-opacity-30 w-screen h-screen flex  items-center justify-center backdrop-blur-sm">
            <div className="rounded-xl my-4 bg-white  w-[40%] sm:w-[80%] xm:w-[100%] shadow-md ">
              <div className="flex   p-3 bg-[#f3f3f3] rounded-t-xl justify-between">
                <div className="">
                  <h2>Export abandoned checkouts</h2>
                </div>
                <div>
                  <div
                    onClick={() => setExport(!Export)}
                    className="hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px]"
                  >
                    <IoIosClose />
                  </div>
                </div>
              </div>
              <hr />
              <div className="p-6 flex flex-col gap-2">
                <div className=" flex flex-col bg-white text-[13px] gap-2 ">
                  <h1>Export</h1>
                  <div className="flex flex-col gap-4 xm:text-[12px] items-start">
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort_option"
                        value="Current page"
                      />
                      Current page
                    </label>
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort_option"
                        value="All abandoned checkouts"
                      />
                      All abandoned checkouts
                    </label>
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort_option"
                        value="Selected: 0 abandoned checkouts"
                      />
                      Selected: 0 abandoned checkouts
                    </label>
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort_option"
                        value="50+ abandoned checkouts search"
                      />
                      50+ abandoned checkouts matching your search
                    </label>
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort_option"
                        value="
                          Abandoned checkouts by date"
                      />
                      Abandoned checkouts by date
                    </label>
                  </div>
                </div>
                <div className=" flex flex-col bg-white text-[13px]  gap-2 ">
                  <h1>Export as</h1>
                  <div className="flex flex-col gap-4 xm:text-[12px] items-start">
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort_option"
                        value=" CSV for Excel, Numbers,"
                      />
                      CSV for Excel, Numbers, or other spreadsheet programs
                    </label>
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort_option"
                        value="Plain CSV file"
                      />
                      Plain CSV file
                    </label>
                  </div>
                </div>
              </div>
              <hr />

              <div className="flex  justify-between  p-3 rounded-b-xl ">
                <div className=""></div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setExport(!Export)}
                    className=" text-[black] rounded-lg border  px-3 py-1 text-[12px]"
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
                    Export abandoned checkouts
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <-------table heding-------> */}
        <div className="rounded-lg mt-[24px]  xm:p-0 bg-[#ffffff] h-[80vh] overflow-x-hidden  w-full  flex flex-col border border-stone-200">
          <div className="flex justify-between overflow-x-hidden w-full text-[#585858] px-2 py-2 xm:px-4 ">
            <div
              className={`${
                Search ? 'hidden' : 'block'
              } flex  gap-2 sm:overflow-y-auto text-center items-center`}
            >
              <div>
                <button className="w-max hover:bg-[#E3E3E3] rounded-lg p-2 text-[14px]  xm:text-[16px] sm:text-[16px] font-[600] ">
                  All
                </button>
              </div>

              <div>
                <button>
                  <Link
                    to=""
                    className="w-max hover:bg-[#E3E3E3] rounded-lg p-2 text-[16px] xm:text-[18px] font-[600] "
                  >
                    +
                  </Link>
                </button>
              </div>
            </div>

            <div
              className={`${Search ? 'block' : 'hidden'} flex w-full gap-3 `}
            >
              <div className=" w-full    py-1 px-[8px] rounded-lg bg-[#faf8f8] focus-within:outline focus-within:bg-[#f1f1f1c2]  flex gap-2 items-center">
                <div className="w-full flex items-center">
                  <span className="text-[#616161]">
                    <IoIosSearch />
                  </span>
                  <input
                    placeholder="Searching all products"
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-full outline-none text-[14px] bg-[#faf8f8] text-[#303030] focus-within:bg-[#f1f1f1c2]"
                  />
                </div>

                <button onClick={handleClearSearch} className=" cursor-pointer">
                  <ImCancelCircle />
                </button>
              </div>
              <div className="flex gap-2 ">
                <button
                  onClick={handleSearch}
                  className={`${
                    Search ? 'block' : 'hidden'
                  } bg-black text-[14px] text-white rounded-lg  px-[7px] py-[5px] `}
                >
                  Cancel
                </button>
                <button
                  // onClick={fetchSearched}
                  className="  bg-black text-[14px] text-white rounded-lg mr-[5px] px-[7px] py-[5px]"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={handleSearch}
                className={`${
                  Search ? 'hidden' : 'block'
                } border shadow-lg hover:bg-[#e3e3e3] transition-all xm:text-[18px] text-[18px] px-2 py-0 rounded-lg flex items-center`}
              >
                <IoSearchOutline /> <CgSortAz />
              </button>

              <span
                ref={sortref}
                onClick={() => {
                  setSort(!sort);
                }}
                className="border shadow-lg cursor-pointer hover:bg-[#e3e3e3] transition-all flex items-center rounded-lg xm:text-[18px] text-[18px] px-2 py-0"
              >
                <TbArrowsSort />
              </span>
              {sort && (
                <div className="">
                  <div className=" flex  p-[20px] flex-col bg-white border-[1px] absolute top-[226px] right-[60px]  rounded-lg  text-heading gap-2  xm:top-[175px]  xm:right-[4px] ">
                    <h1>Sort by</h1>
                    <div className="flex flex-col gap-4 items-start">
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value=" Checkout_number"
                        />
                        Checkout number
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="Date"
                        />
                        Date
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="Customer name"
                        />
                        Customer name
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="Recovery status"
                        />
                        Recovery status
                      </label>
                      <label className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="sort_option"
                          value="Total price"
                        />
                        Total price
                      </label>
                    </div>

                    <div className="flex flex-col">
                      <button className="hover:bg-[#E3E3E3] flex  gap-6 items-center rounded-lg py-1 px-4 text-[15px]">
                        <FaLongArrowAltDown /> Ascending
                      </button>
                      <button className="hover:bg-[#E3E3E3] flex gap-6 items-center rounded-lg py-1 px-4 text-[15px]">
                        <FaLongArrowAltUp /> Descending
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr />
          {/* <-------desktop view ---------> */}
          <div className="sm:hidden xm:hidden">
            <div
              className="grid justify-between gap-4 border-t  bg-[#f5f3f3] text-[#686767] px-[10px] py-[8px] text-[13px] font-medium items-center overflow-x-auto sm:hidden xm:hidden "
              style={{ gridTemplateColumns: '0.5fr 2fr 2fr 4fr 2fr 2fr' }}
            >
              <div className="">
                <input type="checkbox" className="rounded " />
              </div>
              <div className="">
                <h3>Checkout</h3>
              </div>
              <div>
                <h3> Date</h3>
              </div>
              <div>
                <h3> Customer</h3>
              </div>

              <div>
                <h3>Recovery Status</h3>
              </div>

              <div className="text-end">
                <h3> Total</h3>
              </div>
            </div>
            <hr />
            <div
              className="grid justify-between gap-4 border-t  text-[#686767] px-[10px] py-[8px] text-[13px] font-medium items-center overflow-x-auto sm:hidden xm:hidden "
              style={{ gridTemplateColumns: '0.5fr 2fr 2fr 4fr 2fr 2fr' }}
            >
              <div className="">
                <input type="checkbox" className="rounded " />
              </div>
              <div className=" font-[650] text-[#3F3F3F]">
                <h3>#34249405825283</h3>
              </div>
              <div>
                <h3> 28 Oct at 5:44 pm</h3>
              </div>
              <div className="flex group items-center gap-2">
                <h3>Adithhyan S R</h3>
                <div className=" hidden group-hover:block cursor-pointer text-[#686767] text-[16px] ">
                  {' '}
                  <IoChevronForwardCircleOutline />
                </div>
              </div>

              <div className="text-center rounded-lg py-1 bg-[#FFD6A4]  w-[100px]">
                <h3>Recovered</h3>
              </div>

              <div className="text-end">
                <h3> ₹199.00 </h3>
              </div>
            </div>
            <hr />
          </div>
          <div className="sm:block hidden">
            <div
              className="grid justify-between gap-4 border-t  bg-[#f5f3f3] text-[#686767] px-[10px] py-[8px] text-[13px] font-medium items-center  "
              style={{ gridTemplateColumns: '0.1fr 2.5fr 2fr' }}
            >
              <div className="">
                <input type="checkbox" className="rounded " />
              </div>
              <div className=" flex flex-col">
                <div>
                  <h3>Checkout</h3>
                </div>
              </div>

              <div className="text-end ">
                <h3> Total</h3>
              </div>
            </div>
            <hr />
            <div
              className="grid justify-between gap-4 border-t  text-[#686767] px-[10px] py-[8px] text-[13px] font-medium items-center  "
              style={{ gridTemplateColumns: '0.1fr 2.5fr 2fr' }}
            >
              <div className="">
                <input type="checkbox" className="rounded " />
              </div>
              <div className=" flex flex-col">
                <div>
                  <h3>#34249405825283</h3>
                </div>
                <div>
                  <h3> 28 Oct at 5:44 pm</h3>
                </div>
                <div className="flex group items-center gap-2">
                  <h3>Adithhyan S R</h3>
                  <div className=" hidden group-hover:block cursor-pointer text-[16px] ">
                    {' '}
                    <IoChevronForwardCircleOutline />
                  </div>
                </div>
                <div className=" text-center rounded-lg py-1 bg-[#FFD6A4]  w-[100px]">
                  <h3>Recovered</h3>
                </div>
              </div>

              <div className="text-end">
                <h3> ₹199.00</h3>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Abandoendcheck;
