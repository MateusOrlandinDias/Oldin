import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import WorkWithUs from "./pages/Work-with-us";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/empresa" exact element={<Company />} />
                <Route path="/produtos" exact element={<Products />} />
                <Route path="/trabalhe-conosco" exact element={<WorkWithUs />} />
                <Route path="/contato" exact element={<Contact />} />
                <Route path="/produto/:id" exact element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}