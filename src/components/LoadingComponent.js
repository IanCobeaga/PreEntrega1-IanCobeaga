import React, { useEffect, useState } from "react";

const LoadingComponent = ({end}) => {

    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if(end === true){
            setShowText(true);
        }
    }, [])

    return (
        <div className="d-flex justify-content-center top-space style-loading">
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span hidden={showText} role="status">Cargando...</span>
        </div>
    );
};

export default LoadingComponent;