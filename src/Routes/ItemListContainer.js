import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const ItemListContainer = () => {

    const [titulo, setTitulo] = useState("");
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("https://apimocha.com/spideritems/items")
            .then((res) => res.json())
            .then(data => setProductos(data.results));
            setProductosFiltrados(productos);
            setTitulo("Lista de productos");
    }, []);

    useEffect(() => {
        changeElementValuesByParam(id);
    });

    const changeElementValuesByParam = (param) => {
        if(param != undefined){
            setTitulo("Lista de productos filtrada");
            setProductosFiltrados(productos.filter((producto) => (producto.category === param)));            
        }else{
            setTitulo("Lista de productos");  
            setProductosFiltrados(productos);
        }
    }

    return (
        <div className="top-space">
            <h1 className="text-center spiderPrimaryFont">{titulo}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col"></div>
                <div>
                {productosFiltrados.map((producto) => {
                        return (
                            <div key={producto.id} className="col">
                                <Card
                                    id={producto.id}
                                    img={producto.imgUrl}
                                    name={producto.name}
                                    description={producto.description}
                                    price={producto.price}
                                    isDetail={false} />
                            </div>
                        );
                    })
                    }
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default ItemListContainer;