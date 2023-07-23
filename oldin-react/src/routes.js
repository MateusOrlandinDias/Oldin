import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Feedback from "./pages/Feedback";
import WorkWithUs from "./pages/Work-with-us";
import Contact from "./pages/Contact";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/empresa" exact element={<Company />} />
                <Route path="/produtos" exact element={<Products />} />
                <Route path="/feedback" exact element={<Feedback />} />
                <Route path="/trabalhe-conosco" exact element={<WorkWithUs />} />
                <Route path="/contato" exact element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}