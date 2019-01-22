import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/how">How</NavLink>
            <NavLink to="/partner">Partner</NavLink>
        </div>
    );
};

export default Navigation;