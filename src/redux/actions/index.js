export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const registerSuccess = (user) => ({
  type: "REGISTER_SUCCESS",
  payload: { user },
});

export const googleRegistrSuccess = (user) => ({
  type: "GOOGLE_REGISTR_SUCCESS",
  payload: { user },
});










export const checkOutProduct = (check) => {
  return {
    type: "CHECKOUT_PRODUCTS",
    payload: check,
  };
};
export const checkoutCencel = (check) => {
  return {
    type: "CHECKOUT_CENCEL",
    payload: check,
  };
};

export const updateQuantity = (itemId, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: {
      itemId,
      quantity,
    },
  };
};

export const updateCreditCard = (info) => {
  return {
    type: "UPDATE_CREDIT_CARD",
    payload: { info },
  };
};

export const incrementQuantity = (itemId) => ({
  type: "INCREMENT_QUANTITY",
  payload: itemId,
});

export const decrementQunatity = (itemId) => ({
  type: "DECREMENT_QUANTITY",
  payload: itemId,
});



export const contactUsLogic = (info) => {
  return {
    type: "CONTCT_US_LOGIC",
    payload: info,
  };
};

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: "REMOVER_SELECTED_PRODUCT",
  };
};

export const categoryInfo = (info) => {
  return {
    type: "CATEGORY_INFO",
    payload: info,
  };
};
