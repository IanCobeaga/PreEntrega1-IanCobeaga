import React, { useState } from "react";
import Buscador from "./Buscador"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link to="/" type="button" className="navbar-brand nav-btn">
                    <img alt="logo" src="https://i.ibb.co/BtJthmd/spider-logo.png"
                        height={42} width={42} />
                </Link>
                <ul className="nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to={`/category/Rio`}>Rio</Link></li>
                            <li><Link className="dropdown-item" to={`/category/Mar`}>Mar</Link></li>
                        </ul>
                    </li>
                </ul>
                <Buscador />
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;