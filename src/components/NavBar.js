import React from "react";
import Buscador from "./Buscador"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark gradient-style spiderPrimaryFont sticky-top">
            <div className="container-fluid">
                <Link to="/" type="button" className="navbar-brand nav-btn">
                    <img alt="logo" src="https://i.ibb.co/BtJthmd/spider-logo.png"
                        height={42} width={42} />
                </Link>
                <ul className="nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown mx-2">
                        <Link className="btn btn-outline-light" to={"/items"}>
                            Modelos
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="btn btn-outline-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu categoryStyle" aria-labelledby="navbarDropdown">
                            <li>
                                <Link className="dropdown-item text-light" to={`/items/Rio`}>
                                    <p>Rio</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item text-light" to={`/items/Mar`}>
                                    <p>Mar</p>
                                </Link>
                            </li>
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