import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar, Footer, PageWrapper, ScrollToTop } from "./components/layout";
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
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />

        {/* categorias */}
        <Route
          path="/categories"
          element={
            <PageWrapper>
              <CategoriesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/categories/:categoryId"
          element={
            <PageWrapper>
              <CategoryPage />
            </PageWrapper>
          }
        />
        {/* productos */}
        <Route
          path="/products/:productId"
          element={
            <PageWrapper>
              <ProductPage />
            </PageWrapper>
          }
        />

        {/* error */}
        <Route
          path="/*"
          element={
            <PageWrapper>
              <NotFoundPage />
            </PageWrapper>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
