import React, {useState, useEffect} from "react";

const DataFetcher = ({url, render}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       fetch(url)
       .then((response) => response.json())
       .then((data) => {
        setData(data);
        setLoading(false);
    })
       .catch((error) => {
        console.log(`Error fetching data: ${error}`);
        setLoading(false);
       })
    }, [url]);

    return render(data, loading)
}

export default DataFetcher;