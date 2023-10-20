import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { checkOutProduct, checkoutCencel } from "../redux/actions/index";
const Chekout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.auth.items);
  const tool = useSelector((state) => state.auth.creditCardInfo);
  const itemSend = useSelector((state) => state.auth.checkProducts);
  const totalPriceArr = [];
  const ItemQuantityPrice = () => {
    Object.values(cartItems).map((e) => {
      return totalPriceArr.push(e.quantity * e.price);
    });
  };
  document.title = "Midle Store - Checkout";
  ItemQuantityPrice();
  let totalPrice = 0;
  for (let i = 0; i < totalPriceArr.length; i++) {
    totalPrice += totalPriceArr[i];
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleCheckout = () => {
    dispatch(checkOutProduct(cartItems));
  };
  const handleCheckOutCencel = () => {
    dispatch(checkoutCencel(cartItems));
  };
  const orderCheck = () => {
    return (
      <div>
        <div className={itemSend.checkEd ? "hidden" : "block"}>
          <button
            onClick={handleCheckout}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
        <div className={itemSend.checkEd ? "block bg-slate-400" : "hidden"}>
          <p>The product will arrive in 10 - 15 days</p>
          <button onClick={handleCheckOutCencel}>Cancel this order?</button>
        </div>
      </div>
    );
  };
  const orderDontChek = () => {
    return (
      <div className="border w-1/2 text-center">
        <p>You have not identified your bank card</p>
        <NavLink
          to={`/user/${tool.FirstName || tool.googleFirstName}/${
            tool.LastName || tool.googleLastName
          }/${tool.id || tool.googleId}`}
        >
          Linked Card
        </NavLink>
      </div>
    );
  };
  return (
    <>
      <div className="pt-20">
        <div className="flex justify-around gap-16 flex-wrap">
          {Object.values(cartItems).map((item) => (
            <div className="w-60 bg-slate-300" key={item.id}>
              <img src={item.image} className="rounded-lg" alt={item.title} />
              <div>
                <div>
                  <h1>Name {item.title}</h1>
                </div>
                <h4>Price {Math.round(item.price)}</h4>
                <h3>Item Count {item.quantity}</h3>
              </div>
            </div>
          ))}
          {Object.values(cartItems).length === 0 && (
            <div className="h-screen flex text-6xl justify-center pt-20">
              <h1>Your cart is empty.</h1>
            </div>
          )}
        </div>
        <div className="flex  max-sm:bg-slate-800 max-sm:text-white mt-8 justify-between border">
          <div className="text-lg">
            <h1>Total Price: {Math.round(totalPrice)}$</h1>
          </div>
          {tool.length === 0 && orderDontChek()}
          {tool.length !== 0 && orderCheck()}
        </div>
      </div>
    </>
  );
};
export default Chekout;