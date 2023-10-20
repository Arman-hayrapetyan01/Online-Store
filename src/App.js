import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Login from "./components/Register/Login";
import Registation from "./components/Register/Registation";
import Product from "./components/Product";
import ElectonicPage from "./components/Category/Category_Page/ElectronicsPage";
import MansPage from "./components/Category/Category_Page/Mens_Clothing";
import JweleryPage from "./components/Category/Category_Page/JaweleryPage";
import WoomensPage from "./components/Category/Category_Page/Womens_Clothing";
import Card from "./components/Card";
import NoPage from "./components/NoPage";
import UserAcount from "./components/UserAcount/Acount";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment/method/card" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<Registation />} />
        <Route
          path={`/user/:${"FirstName" || "googleFirstName"}/:${"LastName" || "googleLastName"}/:${"id" || "googleId"}`}
          element={<UserAcount />}
        />
        <Route path="/category/electronics" element={<ElectonicPage />} />
        <Route path="/category/jewelery" element={<JweleryPage />} />
        <Route path="/category/men'sclothing" element={<MansPage />} />
        <Route path="/category/women'sclothing" element={<WoomensPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
