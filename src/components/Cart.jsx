import React, { useEffect } from "react";
import { PiSmileySad } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQunatity,
} from "../redux/actions/index";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.auth.items);
  const dispatch = useDispatch();
  const totalPriceArr = [];
  const ItemQuantityPrice = () => {
    Object.values(cartItems).map((e) => {
      totalPriceArr.push(e.quantity * e.price);
      return cartItems;
    });
  };
  ItemQuantityPrice();
  let totalPrice = 0;
  for (let i = 0; i < totalPriceArr.length; i++) {
    totalPrice += totalPriceArr[i];
  }
  document.title = "Midle Store - Cart";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const EmptyCart = () => {
    return (
      <div className="h-[80.4vh] flex justify-center items-center text-[30px]">
        <div className="flex">
          <h1>Your cart is empty!</h1>
          <div className="text-5xl">
            <PiSmileySad />
          </div>
        </div>
      </div>
    );
  };
  const CartCheckoutBtn = () => {
    return (
      <div className="relative top-20">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
          focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          <Link to={"/checkout"}>Checkout</Link>
        </button>
      </div>
    );
  };
  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity));
    if (quantity === 0) {
      dispatch(removeFromCart(itemId));
    } else if (quantity === null) {
      dispatch(removeFromCart(itemId));
    }
  };
  const CartItems = () => {
    return (
      <div className="w-full relative top-16">
        <h1 className="text-center text-3xl text-shadow-xuy">Shopping Cart</h1>
        <ul className="flex justify-between pl-4 text-shadow-xuy max-sm:hidden">
          <li>Item</li>
          <li className="flex justify-around w-[50%]">
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </li>
        </ul>
        <ul className="mt-10">
          {Object.values(cartItems).map((item) => (
            <li
              key={item.id}
              className="flex justify-between max-sm:flex-wrap mt-8 bg-slate-400"
            >
              <div className="flex max-sm:w-full max-sm:flex-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  width={"150px"}
                  height={"150px"}
                  className="rounded-lg max-sm:w-full max-sm:h-96"
                />
              </div>
              <div className="max-sm:w-full">
                <h1>{item.title}</h1>
              </div>
              <div className="flex w-[45%] justify-around flex-wrap">
                <div>
                  <h1>Item Price {Math.round(item.price)}$</h1>
                </div>
                <div className="flex items-center border space-x-2 h-10 mr-16 max-sm:mr-1">
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="px-3 py-2 rounded-sm bg-gray-200 hover:bg-gray-300 transition-all duration-200"
                  >
                    +
                  </button>
                  <input
                    type="number"
                    disabled
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="flex-1 w-16 text-center outline-none"
                  />
                  <button
                    onClick={() => dispatch(decrementQunatity(item.id))}
                    className="px-3 py-2 bg-gray-200 rounded-sm hover:bg-gray-300 transition-all duration-200"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1>
                    Total Item Price {Math.round(item.quantity * item.price)}$
                  </h1>
                </div>
                <button
                  className="text-3xl h-8 rounded-full max-sm:text-6xl"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <CiCircleRemove />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="max-sm:bg-gray-400">
          <h1>Total Items Price {Math.round(totalPrice)}</h1>
        </div>
      </div>
    );
  };
  return (
    <>
      {Object.values(cartItems).length === 0 && <EmptyCart />}
      {Object.values(cartItems).length !== 0 && <CartItems />}
      {Object.values(cartItems).length !== 0 && <CartCheckoutBtn />}
      <div className="h-32"></div>
    </>
  );
};
export default Cart;