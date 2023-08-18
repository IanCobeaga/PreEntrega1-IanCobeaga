import React from "react";
import CartWidget from "./CartWidget"

const NavBar = ({ greeting }) => {

    const changeGreeting = (text) => {
        greeting(text)
    }
    
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a type="button" className="navbar-brand nav-btn" onClick={() => changeGreeting("HOLA MUNDO!")}>
                    <img src="https://i.ibb.co/BtJthmd/spider-logo.png"
                        height={42} width={42} />
                </a>
                <ul className="nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a type="button" className="btn btn-outline-light me-2" onClick={() => changeGreeting("Productos 1")}>Productos 1</a>
                    </li>
                    <li className="nav-item">
                        <a type="button" className="btn btn-outline-light me-2" onClick={() => changeGreeting("Productos 2")}>Productos 2</a>
                    </li>
                    <li className="nav-item">
                        <a type="button" className="btn btn-outline-light me-2" onClick={() => changeGreeting("Productos 3")}>Productos 3</a>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;