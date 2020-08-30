import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container mx-auto">
            <NavLink className="navbar-brand" to="/">NetWebSol</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active"
                        className="nav-link if_hover" to="/" exact >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active"
                        className="nav-link if_hover" to="/service" exact>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/about" exact>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/contact" exact>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    );
}
export default Navbar;