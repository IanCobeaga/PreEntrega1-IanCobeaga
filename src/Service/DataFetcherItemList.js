import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const DataFetcher = ({ render }) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
            
            getDocs(itemsCollection)
                .then((snapshot) => {
                        const docs = snapshot.docs.map((doc) => (
                            { id: doc.id, ...doc.data(), quantity: 0, pricePerQuantity: 0 }
                        ));
                        setData(docs);
                        setLoading(false);
                })
                .catch((error) => {
                    console.log(`Error fetching data: ${error}`);
                    setLoading(false);
                });
        } 
    , []);

    return render(data, loading)
}

export default DataFetcher;