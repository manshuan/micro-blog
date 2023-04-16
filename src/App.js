import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import AboutUs from "./pages/aboutUs";
import Article from "./pages/article";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";

export default function App() {
  return (
    <>
      <Layout
        children={
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article" element={<Article />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </BrowserRouter>
        }
      />
    </>
  )
}