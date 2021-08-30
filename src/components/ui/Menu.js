import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./menu.css";
import CloseIcon from "@material-ui/icons/Close";

const Menu = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    return (
        <div>
            <nav>
                <ul className="menu">
                    <li>
                        <NavLink activeClassName="active" to="/" exact>
                            Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/episodes">
                            Episodes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/locations">
                            Location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/watchList">
                            Watch Episode
                        </NavLink>
                    </li>
                </ul>
                <div
                    className="hamburger-block"
                    onClick={() => {
                        setDisplayMenu(!displayMenu);
                    }}
                >
                    {displayMenu ? (
                        <CloseIcon className="menu-icon" />
                    ) : (
                        <MenuIcon className="menu-icon" />
                    )}
                </div>
            </nav>
            {displayMenu && (
                <ul className="hamburger-menu">
                    <li>
                        <NavLink activeClassName="active" to="/" exact>
                            Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/episodes">
                            Episodes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/locations">
                            Location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/watchList">
                            Watch Episode
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
