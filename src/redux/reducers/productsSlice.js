const intialState = {
  products: [],
};
export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      return { ...state, ...action.payload };
    case "REMOVER_SELECTED_PRODUCT":
      return {};
    default:
      return state;
  }
};
