import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ROUTERS } from "./ROUTER";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import { useSelector } from "react-redux";

function App() {
    const { user } = useSelector((state) => state.auth);
    console.log(user);

    return (
        <div className="App">
            <Routes>
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
            </Routes>
        </div>
    );
}

export default App;
