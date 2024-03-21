/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllProductsMobileView = ({ products }) => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <Link
            to={`/product/${product._id}`}
            key={index}
            className="w-full border-l-0 border-r-0 px-2 pl-[1rem] hidden xm:block lg:hidden items-center border border-y-gray-100 text-[#30304b] text-[0.813rem] pt-3 pb-3"
          >
            <div className="flex gap-4">
              <div>
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
              <div>
                <div className="flex font-[450] gap-2 items-center text-[14px] group ">
                  <h2>{product.title}</h2>
                </div>
                <div className="text-[14px] text-[#666161] font-[450] flex gap-2 items-center group ">
                  {`${product.variants.reduce((total, variant) => {
                    return total + variant.inventory_quantity;
                  }, 0)} in stock for ${product.variants.length} variants`}
                </div>
                <div className="text-[14px] text-[#666161] font-[450] flex gap-2 group items-center cursor-pointer ">
                  {product.vendor}
                </div>
                <div>
                  <div className="text-[14px] bg-[#B4FED2] w-[80px]  px-4 capitalize text-[#0c5132] border rounded-xl font-[450] ">
                    {product.status}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default AllProductsMobileView;
