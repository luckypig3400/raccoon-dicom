import React from "react";
import SettingPage from "./pages/SettingPage/SettingPage.jsx";

export const ROUTERS = [
    { path: "/", component: <div>Home</div>, value: "Home", key: "Home" },
    {
        path: "/setting",
        component: <SettingPage />,
        value: "Setting",
        key: "Setting"
    }
];
