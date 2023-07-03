import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Outlet, Link } from "react-router-dom";
import { ROUTERS } from "./ROUTER";

const PageLayout = () => {
    return (
        <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
            <Sidebar>
                <Menu>
                    {ROUTERS.map((ROUTE) => {
                        return (
                            <MenuItem
                                key={ROUTE.key}
                                routerlink={<Link to={ROUTE.path} />}
                            >
                                {ROUTE.value}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </Sidebar>
            <Outlet />
        </div>
    );
};

export default PageLayout;
