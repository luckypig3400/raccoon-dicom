import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Outlet, Link } from "react-router-dom";
import { ROUTERS } from "./ROUTER";

import SidebarFooter from "./components/SideBarFooter";
import LogoutIcon from "@mui/icons-material/Logout";

const PageLayout = () => {
    const handleLogout = () => {
        console.log("handleLogout");
    };

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
                    <SidebarFooter>
                        <MenuItem icon={<LogoutIcon />} onClick={handleLogout}>
                            LogOut
                        </MenuItem>
                    </SidebarFooter>
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
