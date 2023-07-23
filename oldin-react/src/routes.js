import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}