const initialState = {
  loginEd: false,
  user: [],
  items: [],
  contactUsInfo: [],
  checkProducts: [],
  creditCardInfo: [],
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKOUT_PRODUCTS":
      return {
        ...state,
        checkProducts: {
          checkEd: true,
          checkInfo: action.payload,
        },
      };
    case "CHECKOUT_CENCEL":
      return {
        ...state,
        checkProducts: {
          checkEd: false,
          checkInfo: {},
        },
      };
    case "UPDATE_CREDIT_CARD":
      const { name, number, expiry, cvv } = action.payload.info;
      return {
        ...state,
        creditCardInfo: {
          name: name,
          cardNumber: number,
          expiry: expiry,
          cvv: cvv,
        },
      };

    case "REGISTER_SUCCESS":
      const { userId, emailt, FirstName, LastName, Password } =
        action.payload.user;
      return {
        ...state,
        loginEd: true,
        user: {
          ...state.user,
          userInfo: {
            userId,
            FirstName,
            LastName,
            emailt,
            Password,
          },
        },
      };

    // case "GOOGLE_REGISTR_SUCCESS":
    //   const { googleId, googleEmail, googleFirstName, googleLastName } =
    //     action.payload.user;
    //   return {
    //     users: {
    //       userInfo: {
    //         googleId,
    //         googleFirstName,
    //         googleLastName,
    //         googleEmail,
    //       },
    //     },
    //   };

    case "ADD_TO_CART":
      const { id, title, price, image } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            id,
            image,
            title,
            price,
            quantity: state.items[id] ? state.items[id].quantity + 1 : 1,
          },
        },
      };
    case "REMOVE_FROM_CART":
      const newItems = { ...state.items };
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
      };
    case "UPDATE_QUANTITY":
      const { itemId, quantity } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [itemId]: {
            ...state.items[itemId],
            quantity,
          },
        },
      };
    case "INCREMENT_QUANTITY":
      const incrementItemId = action.payload;
      const incrementUpdatedItems = { ...state.items };
      if (incrementUpdatedItems[incrementItemId].quantity >= 1) {
        incrementUpdatedItems[incrementItemId].quantity += 1;
      }
      return {
        ...state,
        items: incrementUpdatedItems,
      };
    case "DECREMENT_QUANTITY":
      const decrementItemId = action.payload;
      const decrementUpdatedItems = { ...state.items };
      if (decrementUpdatedItems[decrementItemId].quantity > 1) {
        decrementUpdatedItems[decrementItemId].quantity -= 1;
      }
      return {
        ...state,
        items: decrementUpdatedItems,
      };

    case "CONTCT_US_LOGIC":
      const { cName, cEmail, cMessage } = action.payload;
      return {
        ...state,
        // contactUsLogined: true,
        contactUsInfo: {
          ...state.contactUsInfo,
          cName,
          cEmail,
          cMessage,
        },
      };

    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
