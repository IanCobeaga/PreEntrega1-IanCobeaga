import React from "react"; 

const UserForm = ({buildBuyer}) => {

    const buildBuyerByForm = () => {
        let name = document.getElementById('fullname').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        buildBuyer(name, phone, email);
    }

    return (
        <form onSubmit={() => buildBuyerByForm()} className='flexCheckout mb-2'>
            <h3>Debe completar el formulario para poder finalizar la compra</h3>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Nombre completo</label>
                <input type="text" required="true" className="form-control" id="fullname" placeholder="Escriba su nombre..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="number" required="true" className="form-control" id="phone" placeholder="Escriba su número telefónico..." />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" required="true" className="form-control" id="email" placeholder="Escriba su email..."/>
            </div>
            <button id="submitUser" 
            className="btn btn-outline-light">
                Guardar comprador</button>
        </form>
    );
}; 

export default UserForm;