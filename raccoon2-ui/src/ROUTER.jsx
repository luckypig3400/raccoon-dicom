import React from "react";
import SettingPage from "./pages/SettingPage/SettingPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

export const ROUTERS = [
    { path: "/", component: <HomePage />, value: "Home", key: "Home" },
    {
        path: "/setting",
        component: <SettingPage />,
        value: "Setting",
        key: "Setting"
    }
];
