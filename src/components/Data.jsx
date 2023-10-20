import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts, categoryInfo } from "../redux/actions/index";
const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((axoisError) => {
        console.log(axoisError);
      });
    setTimeout(() => {
      dispatch(setProducts(response.data));
    }, 1500);
  };
  const fetchCategory = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => console.log(err));
    dispatch(categoryInfo(response.data));
  };
  useEffect(() => {
    fetchProducts();
    fetchCategory();
  });
};
export default ProductListing;
