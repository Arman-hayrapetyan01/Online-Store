import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProducts } from "../redux/actions";
import { FcSearch } from "react-icons/fc";
import AOS from "aos";
import Loader from "./Loader";
import "aos/dist/aos.css";
const Product = () => {
  document.title = "Midle Store";
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 1,
      duration: 200,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);
  const renderList = products.map((productDet) => {
    const { id, title, image, price } = productDet;
    return (
      <div key={id} data-aos="zoom-in-down" data-aos-duration="1000">
        <div
          key={id}
          className="w-80 rounded-lg shadow-[0_0_15px_2px_#000] pb-12 mt-5 bg-[#ffffff72]"
        >
          <img className="w-full rounded-xl h-[80%]" src={image} alt={title} />
          <h1>{title}</h1>
          <h1>${price}</h1>
          <NavLink
            to={`/products/${id}`}
            className="inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            onClick={() => dispatch(selectedProducts(productDet))}
          >
            Go to item
          </NavLink>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="relative w-full top-20 border-none">
        <div>
          <div className="text-center">
            <h1 className="text-4xl max-sm:text-white text-shadow-xuy">
              Product
            </h1>
          </div>
          <div className="flex justify-center border-none w-96 m-auto">
            <input
              type="search"
              className="relative bg-white  rounded border border-solid 
              border-neutral-300  text-base font-norma 
              text-neutral-700 outline-none transition w-96 pl-4 duration-200 ease-in-out focus:z-[3] focus:border-primary
              focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none max-sm:w-full"
              placeholder="Search products..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div>
          {searchTerm !== "" && (
            <div className="flex flex-wrap justify-around text-center">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-80 rounded-[10px] items-shdow bg-[#6c2e4c] overflow-hidden mt-[5%]"
                >
                  <img
                    src={product.image}
                    className="rounded-[10px] transition duration-[200ms] ease-in-out hover:scale-[1.1]"
                    alt={product.title}
                  />
                  <div className="pt-[10px] text-center">
                    <div className="text-white">
                      <h5>{product.title}</h5>
                      <p>${product.price}</p>
                    </div>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="uppercase font-medium rounded-lg bg-[#797585] transition duration-150 ease-in-out hover:bg-black hover:text-white "
                      onClick={() => dispatch(selectedProducts(product))}
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="text-4xl p-14 flex h-80">
                  <h1>There is no such product</h1>
                  <FcSearch />
                </div>
              )}
            </div>
          )}
          <div
            className={`${
              searchTerm !== "" && "hidden"
            } flex flex-wrap justify-around w-full gap-10`}
          >
            {renderList}
          </div>
        </div>

        {products.length === 0 && (
          <div className="h-[800px]">
            <Loader />
          </div>
        )}
      </div>
      <div className="pb-24"></div>
    </>
  );
};

export default Product;
