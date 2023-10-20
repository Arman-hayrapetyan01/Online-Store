import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addToCart, selectedProducts } from "../redux/actions/index";
import axios from "axios";
const ProductDetail = () => {
  document.title = "Online Store Project Single Product page";
  const product = useSelector((state) => state.product);
  const userTrue = useSelector((state) => state.auth.user);
  const productId = useParams();
  const { image, price, title, description } = product;
  const dispatch = useDispatch("");
  const useEffectTool = parseInt(productId.id);
  const FetchFunc = async () => {
    const reponse = await axios
    .get(`https://fakestoreapi.com/products/${useEffectTool}`)
    .catch((err) => console.log(err));
    dispatch(selectedProducts(reponse.data));
  };
  FetchFunc();
  const [userBool, setUserBool] = useState(false);
  const handleCart = (product) => {
    if (userTrue.length !== 0) {
      dispatch(addToCart(product));
    }
    if (userTrue.length === 0) {
      setUserBool(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="pt-24 max-[500px]:pt-16">
        <div className="flex border bg-white rounded-lg m-auto w-4/5 justify-around max-sm:flex-wrap shadow-[0_0_20px_2px_#000]">
          <div className="w-[400px] flex  justify-center items-center ">
            <img
              width={"280px"}
              height={"280px"}
              className="shadow-[0_0_10px_1px_#02020293] rounded-lg"
              src={image}
              alt={title}
            />
          </div>
          <div className="rounded-lg w-1/2  max-md:w-[350px] max-sm:mt-10 ">
            <h1 className="text-3xl mt-3 text-center">{title}</h1>
            <p className="text-[17px] mt-5">{description}</p>
            <span className="my-4 mt-5 flex">
              <p className="flex flex-col justify-end text-xl">Price:</p>{" "}
              <p className="text-3xl">
                <b>{price} $</b>
              </p>
            </span>
            <button
              onClick={() => handleCart(product)}
              type="button"
              className="flex justify-around rounded bg-blue-600 px-4 pb-[5px] pt-[6px] 
              text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
              transition duration-150 ease-in-out hover:bg-blue-900 
              focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
              focus:outline-none focus:ring-0 active:bg-blue-700"
            >
              <div className="text-lg mr-4">
                <BsFillCartPlusFill />
              </div>
              Add To Cart
            </button>
            <h1 style={userBool ? { display: "block" } : { display: "none" }}>
              You do not have an account.
            </h1>

            <div className="mt-10">
              <span className="flex">
                <p>Delivery</p>: <p>10 - 15 working days</p>
              </span>
            </div>
            <div className="mt-10">
              <span className="flex">
                <p className="flex flex-col justify-end">
                  {" "}
                  Product returns and exchanges Terms{" "}
                </p>
                <p className="text-xl ml-2">15 Days</p>
              </span>
            </div>
          </div>
        </div>
        <div className="h-[252px]"></div>
      </div>
    </>
  );
};
export default ProductDetail;
