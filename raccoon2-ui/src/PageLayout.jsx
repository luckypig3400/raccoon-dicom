import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Outlet, Link } from "react-router-dom";
import { ROUTERS } from "./ROUTER";

const PageLayout = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh"
            }}
        >
            <Sidebar>
                <Menu>
                    {ROUTERS.map((ROUTE) => {
                        return (
                            <MenuItem
                                key={ROUTE.key}
                                component={<Link to={ROUTE.path} />}
                            >
                                {ROUTE.value}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </Sidebar>
            <main
                style={{
                    height: "100vh",
                    width: "100%"
                }}
            >
                <div style={{ padding: "1rem" }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default PageLayout;
