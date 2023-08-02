import React from "react";
import Card from "./Card";

const ItemListContainer = ({ greeting }) => {
    return (
        <div class="top-space row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
            </div>
            <div class="col">
                <Card title={greeting}/>
            </div>
            <div class="col">
            </div>
        </div>
    );
};

export default ItemListContainer;