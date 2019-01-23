import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <React.Fragment>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/how">How</NavLink>
                <NavLink to="/partner">Partner</NavLink>
            </ul>
        </React.Fragment>
    );
};

export default Navigation;