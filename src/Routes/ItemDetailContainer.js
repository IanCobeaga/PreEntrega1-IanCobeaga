import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    //const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("https://apimocha.com/spideritems/items")
            .then((res) => res.json())
            .then(data => setProductos(data.results));
        setProductos(productos);
    }, [])

    return (
        <>
            <div className="top-space row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                </div>
                <div>
                    {productos.filter((producto) => {
                        if (producto.id === id) {
                            return (
                                <div key={producto.id} className="col">
                                    <Card
                                        id={producto.id}
                                        img={producto.imgUrl}
                                        name={producto.name}
                                        description={producto.description}
                                        price={producto.price}
                                        isDetail={true} />
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="col">
                </div>
            </div>
        </>
    );
};

export default ItemDetailContainer;