import React, { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const DataFetcher = ({ id, render }) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', id);
            
            getDoc(itemRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setData({ id: snapshot.id, ...snapshot.data(), quantity: 0, pricePerQuantity: 0 });
                        setLoading(false);
                        
                    }
                })
                .catch((error) => {
                    console.log(`Error fetching data: ${error}`);
                    setLoading(false);
                });
        } 
    , [id]);

return render(data, loading)
}

export default DataFetcher;