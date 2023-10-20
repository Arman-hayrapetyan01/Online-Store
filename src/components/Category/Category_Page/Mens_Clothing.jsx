import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../../../redux/actions";
import { NavLink } from "react-router-dom";
const MansPage = () => {
  const mensInfo = useSelector((state) => state.allProducts.products);
  const mensData = [];
  document.title = "Midle Store - Mens Clothing Products";
  const dispatch = useDispatch();
  for (let i = 0; i < mensInfo.length; i++) {
    if (mensInfo[i].category === "men's clothing") {
      mensData.push(mensInfo[i]);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative top-16">
        <div className="flex justify-around flex-wrap gap-2">
          {mensData.map((e, i) => {
            return (
              <div key={i}>
                <div
                  key={i}
                  className="w-80 rounded-xl pb-12 mt-5 bg-[#ffffff72]"
                >
                  <img
                    className="w-full rounded-xl h-[80%]"
                    src={e.image}
                    alt={e.title}
                  />
                  <h1>{e.title}</h1>
                  <NavLink
                    to={`/products/${e.id}`}
                    className="inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={() => dispatch(selectedProducts(e))}
                  >
                    Go to item
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
};
export default MansPage;
