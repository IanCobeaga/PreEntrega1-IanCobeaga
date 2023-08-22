import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import { enviroment } from "../enviroments/Enviroments";

const ItemListContainer = () => {

    const [titulo, setTitulo] = useState("");
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${enviroment.urlItems}`)
            .then((res) => res.json())
            .then(data => setProductos(data.results));
        setProductosFiltrados(productos);
        setTitulo("Nuestros modelos");
    }, []);

    useEffect(() => {
        changeElementValuesByParam(id);
    });

    const changeElementValuesByParam = (param) => {
        if (param != undefined) {
            setTitulo(`Señuelos de ${id.toLowerCase()}`);
            setProductosFiltrados(productos.filter((producto) => (producto.category === param)));
        } else {
            setTitulo("Nuestros modelos");
            setProductosFiltrados(productos);
        }
    }

    return (
        <div className="top-space">
            <h1 className="text-center spiderPrimaryFont">{titulo}</h1>
            <ul className="products">
                {productosFiltrados.map((producto) => {
                    return (
                        <li >
                            <Card
                                id={producto.id}
                                img={producto.imgUrl}
                                name={producto.name}
                                description={producto.description}
                                price={producto.price}
                                isDetail={false} />
                        </li>
                    );
                })
                }
            </ul>
        </div>
    );
};

export default ItemListContainer;