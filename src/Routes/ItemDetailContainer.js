import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import LoadingComponent from "../components/LoadingComponent";
import { enviroment } from "../enviroments/Enviroments";
import DataFetcher from "../Service/DataFetcher";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const url = `${enviroment.urlItems}/${id}`

    return (
        <DataFetcher
            url={url}
            render={(data, loading) => {
                return (
                    <div>
                        {loading
                            ? (<LoadingComponent/>)
                            : (<div className="product-item">
                                <Card
                                    id={data.item.id}
                                    img={data.item.imgUrl}
                                    name={data.item.name}
                                    description={data.item.description}
                                    price={data.item.price}
                                    isDetail={true} />
                            </div>
                            )}
                    </div>
                )
            }}
        />
    );
};

export default ItemDetailContainer;