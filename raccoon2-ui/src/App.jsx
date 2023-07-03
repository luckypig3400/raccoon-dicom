import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ROUTERS } from "./ROUTER";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./PageLayout";

function App() {
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
