import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";

import HomePage from "./pages/home/Home.jsx";
import ContactPage from "./pages/contact/Contact.jsx";
import AboutPage from "./pages/about/About.jsx";
import CategoryPage from "./pages/category/Category.jsx";
import ProductPage from "./pages/product/Product.jsx";
import NotFoundPage from "./pages/error404/Error404.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* categorias */}
        {/* <Route path="/categories" element={<h1>Categories</h1>} /> */}
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        {/* productos */}
        <Route path="/product/:productId" element={<ProductPage />} />

        {/* error */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
