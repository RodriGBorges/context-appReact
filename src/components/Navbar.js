import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeclassname="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                    <NavLink activeclassname="active" className="nav-link" to="/login">Login</NavLink>
                    <NavLink activeclassname="active" className="nav-link" to="/logout">Logout</NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
};
