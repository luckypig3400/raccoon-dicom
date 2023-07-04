import React from "react";
import { Outlet } from "react-router-dom";

const SideBarFooter = (props) => {
    const SidBarFooterStyle = {
        position: "absolute",
        bottom: 10,
        width: "100%"
    };
    return <div style={SidBarFooterStyle}>{props.children}</div>;
};

export default SideBarFooter;
