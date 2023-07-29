import React from "react";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg/512px-Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg.png"
                        height={50} width={50} />
                </a>
                <ul class="nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-light me-2">Boton 1</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-light me-2">Boton 2</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-light me-2">Boton 3</button>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;