import React from "react";

const Buscador = () => {

    return (
        <form className="d-flex m-form" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-outline-light" /* type="submit" */>Buscar</button>
        </form>
    )

}

export default Buscador;