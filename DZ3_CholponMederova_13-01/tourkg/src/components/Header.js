import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="App">
						<NavLink to="/">Список туров</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </header>
    );
}

export default Header;