import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/how">How</NavLink>
                <NavLink to="/partner">Partner</NavLink>
            </ul>
        </div>
    );
};

export default Navigation;