import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Card from "../Components/Card";

const ItemListContainer = () => {

    const [filter, setFilter] = useState(<></>);
    const [titulo, setTitulo] = useState("");
    const [productos, setProductos] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        fetch("https://apimocha.com/spideritems/items")
        .then((res) => res.json())
        .then(data => setProductos(data.results));

        console.log(productos);
    },[])
    

    useEffect(() => {
        setFilter(filtradoProvisorio);
    },[id])

    const filtradoProvisorio = () => {
        
        if(id != undefined){
            setTitulo("Lista de productos filtrada");
            return (
                <div>
                    {productos.map((producto) => {
                        if(producto.category === id){
                            return(
                                <div key={producto.id} className="col">
                                    <Card 
                                    img={producto.imgUrl}
                                    name={producto.name}
                                    description={producto.description}
                                    price={producto.price}/>
                                </div>
                        )}
                    })
                }
                </div>
            );
        }else{
            setTitulo("Lista de productos");
            return (
                <div>
                    {productos.map((producto) => {
                        return(
                            <div key={producto.id} className="col">
                                <Card 
                                img={producto.imgUrl}
                                name={producto.name}
                                description={producto.description}
                                price={producto.price}/>
                            </div>
                        )
                    })
                }
                </div>
            );
        }
    }

    return (
        <div className="top-space">  
            <h1 className="text-center">{titulo}</h1>
            <div className="top-space row row-cols-1 row-cols-md-3 g-4">
                {filter}
            </div>
        </div>
    );
};

export default ItemListContainer;