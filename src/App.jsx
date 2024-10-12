import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar, Footer } from "./components/layout";
import {
  HomePage,
  ContactPage,
  AboutPage,
  CategoryPage,
  ProductPage,
  NotFoundPage,
  CategoriesPage,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* categorias */}
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        {/* productos */}
        <Route path="/products/:productId" element={<ProductPage />} />

        {/* error */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
