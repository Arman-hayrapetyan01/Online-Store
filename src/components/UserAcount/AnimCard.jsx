import React, { useState } from "react";
import { useSelector } from "react-redux";

const Card = () => {
  const creditCardInfo = useSelector(
    (state) => state.auth.creditCardInfo
  );
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  const formatCreditCardNumber = (number) => {
    const formattedNumber = number.replace(/(\d{4})(?=\d)/g, `$1 `);
    return formattedNumber;
  };
  const formatCreditExpiry = (number) => {
    const formattedNumber = number.replace(/(\d{2})(?=\d)/g, "$1/");
    return formattedNumber;
  };
  return (
    <div className="reletive mt-5">
      <div
        onClick={flipCard}
        style={
          isFlipped ? { transform: "rotateY(180deg)" } : { transform: "none" }
        }
        className="cardStyle max-sm:w-11/12 max-sm:h-52"
      >
        <div className="cardInnerStyle">
          <div className="cardFrontStyle bg-blue-900 relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/025/127/original/3d-map-illustration-of-armenia-png.png"
              className="w-full h-full top-0 left-0 rounded-2xl absolute z-10 filter opacity-10"
              alt="Map"
            />
            <div className="absolute z-20">
              <div className="text-right max-sm:-mt-5 text-3xl max-sm:text-2xl">
                <h1>My Bank</h1>
              </div>
              <div className="flex mt-16  justify-around flex-col">
                <div className="mt-4 pl-6 font-light text-5xl max-sm:mt-1 text-white max-sm:text-3xl">
                  <p>{formatCreditCardNumber(creditCardInfo.cardNumber)}</p>
                </div>
                <img
                  className="absolute w-28 h-28 top-7 left-3 max-sm:-top-3 max-sm:left-1"
                  src="https://cdn4.iconfinder.com/data/icons/smart-finance-3/567/card_chip-1024.png"
                  alt="Chip"
                />
                <div className="pl-40 mt-4 flex max-sm:mt-0">
                  <span className="text-xs">
                    <p>GOOD</p>
                    <p>THRU</p>
                  </span>
                  <p className="ml-1">
                    {formatCreditExpiry(creditCardInfo.expiry)}
                  </p>
                </div>
                <div className="mt-4 text-2xl max-sm:mt-0">
                  <p>{creditCardInfo.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardBackStyle bg-blue-900">
            <div className="reltive">
              <div className="w-full h-14 bg-black top-6 absolute"></div>
              <div>
                <div
                  style={{ backgroundColor: "#28252596" }}
                  className="flex justify-end w-72 h-11 left-12 top-24 absolute"
                >
                  <div className="text-3xl text-white">
                    <p>{creditCardInfo.cvv}</p>
                  </div>
                </div>
                <div className="absolute text-white bottom-3 w-80 right-0 max-sm:text-[10px]">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse qui voluptas odio omnis ipsa veritatis distinctio dicta
                    error, impedit optio natus ducimus adipisci ut temporibus
                    alias fugiat, eius quos libero!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
