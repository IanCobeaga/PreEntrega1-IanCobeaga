import React from "react";

const ItemResult = ({item}) => {
   
    return (
        <div key={item.id} className="spiderPrimaryFont dropdown-item">
            <div className="itemResult itemResultText">
                <img src={item.imgUrl} alt="foto-producto"
                    height={40} width={40} className="imgStyle"/>
                <h6>{item.name}</h6>
                <h6>${item.price}</h6>
            </div>
        </div>
    );
}

export default ItemResult;