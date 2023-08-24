import React from "react";

const LoadingComponent = () => {

    return (
        <div className="d-flex justify-content-center top-space">
            <span>Cargando...</span>
            <div className="spinner-border" role="status">
            </div>
        </div>
    );
};

export default LoadingComponent;