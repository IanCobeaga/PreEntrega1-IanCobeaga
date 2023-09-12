import React from "react";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemResult from "./ItemResult";
import { Link } from "react-router-dom";

const Buscador = () => {

/*     useEffect(() => {
        const db = getFirestore();
    
        const itemsCollection = collection(db, 'items');
        const q = query(itemsCollection, where('name', 'like', 1000));
    
        getDocs(q).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setItems(docs);
        });
      }, []); */

    return (
        <div className="d-flex m-form" role="search">
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                </span>
                <input type="text" className="form-control dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Busque un producto" aria-label="Input group example" aria-describedby="basic-addon1" />
                <ul className="dropdown-menu">
                    <li>
                        <Link className="noUnderline" to="/item/5To7IjECnNPAmdCD8lEK">
                            <ItemResult item={{id:"5To7IjECnNPAmdCD8lEK", name:"hero 7", imgUrl:"https://i.ibb.co/gSkcZsQ/spider1.jpg", price:2500}}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Buscador;