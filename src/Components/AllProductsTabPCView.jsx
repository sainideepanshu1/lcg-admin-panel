/* eslint-disable react/prop-types */
import { useContext } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { ProductsContext } from "../Contexts/ProductsContext";
import { Link } from "react-router-dom";

const AllProductsTabPCView = ({ products }) => {
  const { selectAll, setSelectAll, selectedProducts, setSelectedProducts } =
    useContext(ProductsContext);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    if (!selectAll) {
      const allProductIds = products.map((product) => product._id);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId) => {
    const updatedSelection = selectedProducts.includes(productId)
      ? selectedProducts.filter((id) => id !== productId)
      : [...selectedProducts, productId];

    setSelectedProducts(updatedSelection);
  };

  return (
    <>
      <div className="w-full px-2 grid xm:hidden  items-center  border border-y-gray-300 text-[#666161] bg-[#f1f1f1] pt-2 pb-2">
        <div className="destop_type flex gap-8 items-center table-heading ">
          <div className=" flex gap-8  sticky left-0 border-y-gray-300 text-[#666161] bg-[#f1f1f1] w-[100px] ">
            <div className="text-center  flex items-center">
              <input
                className="h-4 w-4"
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </div>
            <div className="h-[45px] w-[45px] "></div>
          </div>
          <div className="flex sm:overflow-x-hidden gap-4">
            <div className="flex font-[600] gap-2 w-[200px] items-center text-[12px]  group ">
              Product
              <div className="flex-col hidden  text-[8px] group-hover:flex cursor-pointer  ">
                <SlArrowUp /> <SlArrowDown />
              </div>
            </div>
            <div className="text-[12px] w-[100px] text-center font-[600] ">
              Status{" "}
            </div>
            <div className="text-[12px] font-[600] w-[200px] flex gap-2 items-center group cursor-pointer  ">
              Inventory
              <div className="flex-col hidden  text-[8px] group-hover:flex">
                <SlArrowUp /> <SlArrowDown />
              </div>
            </div>
            <div className="text-[12px] w-[100px]  font-[600] ">
              Sales channels
            </div>
            <div className="text-[12px] w-[100px] text-center font-[600] ">
              Markets
            </div>
            <div className="text-[12px] w-[100px] font-[600] flex gap-2 items-center group  cursor-pointer ">
              Category
              <div className="flex-col text-[8px] hidden group-hover:flex">
                <SlArrowUp /> <SlArrowDown />
              </div>
            </div>
            <div className="text-[12px] font-[600] w-[100px] flex gap-2 group items-center cursor-pointer ">
              Vendor
              <div className="flex-col hidden  text-[8px] group-hover:flex">
                <SlArrowUp /> <SlArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="w-full px-2 border-l-0 grid border border-y-gray-100 xm:hidden items-center text-[14px] pt-2 pb-2"
          >
            <div
              className="flex gap-8 items-center "
              style={{
                gridTemplateColumns: " 1.5fr 1.5fr ",
              }}
            >
              <div className=" flex gap-6 sticky left-0 bg-white border-y-gray-300 text-[#666161]  w-[100px] ">
                <div className="text-center  flex items-center">
                  <input
                    className="h-4  w-4"
                    type="checkbox"
                    checked={selectedProducts.includes(product._id)}
                    onChange={() => {
                      handleSelectProduct(product._id);
                    }}
                  />
                </div>
                <div className="h-[45px] w-[45px] ">
                  {product.images.length > 0 ? (
                    <img
                      className="w-[45px] rounded-xl"
                      src={product.images[0].src}
                      alt="Pic"
                    />
                  ) : (
                    <div>No Image</div>
                  )}
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <div className="flex font-[450] gap-2 w-[200px] text-[#000] items-center pl-2 pr-2  text-[12px] hover:underline group ">
                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                </div>
                <div className="text-[12px] w-[100px] h-[27px] bg-[#B4FED2]  capitalize text-[#0c5132] text-center  border rounded-xl  p-1 ">
                  {product.status}
                </div>
                <div className="text-[12px] w-[200px] font-[450] text-[#666161] flex gap-2 items-center group ">
                  {`${product.variants.reduce((total, variant) => {
                    return total + variant.inventory_quantity;
                  }, 0)} in stock for ${product.variants.length} variants`}
                </div>
                <div className="text-[12px] w-[100px] text-[#666161] font-[450] ">
                  Sales channels
                </div>
                <div className="text-[12px] w-[100px] text-[#666161] text-center font-[450] ">
                  Markets
                </div>
                <div className="text-[12px]  w-[100px] font-[450] text-[#666161] flex gap-2 items-center group  cursor-pointer ">
                  {product.product_type}
                </div>
                <div className="text-[12px] w-[100px] font-[450] text-[#666161] flex gap-2 group items-center cursor-pointer ">
                  {product.vendor}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllProductsTabPCView;
