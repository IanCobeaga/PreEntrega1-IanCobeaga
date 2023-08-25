import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import LoadingComponent from "../components/LoadingComponent";
import DataFetcher from "../Service/DataFetcher";
import { enviroment } from "../enviroments/Enviroments";

const ItemListContainer = () => {

    const [titulo, setTitulo] = useState("");
    const [filtrado, setfiltrado] = useState(false);
    const { id } = useParams();
    const url = `${enviroment.urlItems}`;


    useEffect(() => {
        changeElementValuesByParam(id);
    });

    const changeElementValuesByParam = (param) => {
        if (param != undefined) {
            setTitulo(`Señuelos de ${id.toLowerCase()}`);
            setfiltrado(true);
        } else {
            setTitulo("Nuestros modelos");
            setfiltrado(false);
        }
    }

    const filtrarCategoria = (productList) => {
        let productosFiltrados = productList;
        if(filtrado) productosFiltrados = productosFiltrados.filter((producto) => (producto.category === id));
        return productosFiltrados;
    }

    const mapingProducts = (productList) => {
        let productosFiltrados = filtrarCategoria(productList);
        let productos = productosFiltrados.map((producto) => {
            console.log(id);
            return (<li >
                <Card
                    id={producto.id}
                    img={producto.imgUrl}
                    name={producto.name}
                    description={producto.description}
                    price={producto.price}
                    isDetail={false} />
            </li>
            )
        })

        return productos;
    }

    return (
        <div className="top-space">
            <h1 className="text-center spiderPrimaryFont">{titulo}</h1>
            {(
                <DataFetcher
                    url={url}
                    render={(data, loading) => {
                        return (
                            <div>
                                {loading
                                    ? ((<LoadingComponent />))
                                    : (<ul className="products">{mapingProducts(data.results)}</ul>)
                                }
                            </div>
                        )
                    }}
                />
            )}
        </div>
    );
};

export default ItemListContainer;