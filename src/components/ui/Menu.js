import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import "./menu.css";

const Menu = () => {
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
            </nav>
        </div>
    );
};

export default Menu;
