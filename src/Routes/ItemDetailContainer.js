import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import LoadingComponent from "../components/LoadingComponent";
import DataFetcherItem from "../Service/DataFetcherItem";

const ItemDetailContainer = () => {

    const { id } = useParams();

    return (
        <DataFetcherItem
            id={id}
            render={(data, loading) => {
                return (
                    <div className="mb-4">
                        {loading
                            ? (<LoadingComponent/>)
                            : (<div className="product-item">
                                <Card
                                    productData={data}
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