import React, {useState} from "react";

const CartWidget = () => {

    const [itemsQuantity, setItemsQuantity] = useState(110);

    const addItemListener = () => {
        setItemsQuantity(itemsQuantity + 1);
    }

    const clearChart = () => {
        setItemsQuantity(0);
    }

    return (
        <>
        <button className="navbar-toggler cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-cart3" viewBox="0 2 16 10">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div className="notification"><p>{itemsQuantity}</p></div>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Carrito</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <h1>Contenido del carrito</h1>
                <div>
                <h5>Articulo</h5> <button onClick={addItemListener}>add</button>
                </div>
            </div>
            <button onClick={clearChart}>Clear</button>
        </div>
        </>
    );
};

export default CartWidget;


