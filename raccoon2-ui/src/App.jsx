import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import { apiVerify } from "./axios/Auth";
import { fillAuthState } from "./redux/slices/Auth";

import { ROUTERS } from "./ROUTER";
import PageLayout from "./PageLayout";
import LoginPage from "./pages/LoginPage/LoginPage";

const isVerify = (
    <Route path="/" element={<PageLayout />}>
        {ROUTERS.map((ROUTE) => {
            return (
                <Route
                    path={ROUTE.path}
                    element={ROUTE.component}
                    key={ROUTE.key}
                />
            );
        })}
    </Route>
);

const noVerify = <Route path="*" element={<LoginPage />} />;

const App = () => {
    const dispatch = useDispatch();
    const { user, verify } = useSelector((state) => state.auth);

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    useEffect(() => {
        if (isLoggedIn)
            apiVerify().then((res) =>
                dispatch(
                    fillAuthState({
                        user: res.data.user,
                        token: res.data.token
                    })
                )
            );
    }, []);

    return (
        <div className="App">
            <Routes>{verify ? isVerify : noVerify}</Routes>
        </div>
    );
};

export default App;
