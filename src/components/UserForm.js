import React from "react"; 

const UserForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" id="fullname" placeholder="Escriba su nombre..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">Número de documento</label>
                <input type="number" className="form-control" id="dni" placeholder="Escriba su DNI..." />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Escriba su email..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Escriba su contraseña..."/>
            </div>
            <button id="submitUser" hidden={true} type="submit">Submit</button>
        </form>
    );
}; 

export default UserForm;