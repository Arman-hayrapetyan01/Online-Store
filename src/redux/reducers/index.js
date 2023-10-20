import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productsSlice";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  categoryInfo: categoryReducer,
  auth: userReducer,
});
export default rootReducers;
