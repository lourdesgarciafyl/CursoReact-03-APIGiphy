import { useState, useEffect } from "react";
import { giphyAxios } from "../config/AxiosGiphy";

export const useFetch  = (url) => {
    const [dataFetch, setDataFetch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("")
    
    useEffect(() => {
        getFetch();
    }, [url]); // cada vez que paso un url se llama al getFetch

    const getFetch = async () => {
        try {
            const { data } = await giphyAxios.get(url);
            setDataFetch(data.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        };
    };
    return {
        data: dataFetch, // similar a pasar props, al data fetch lo paso con el nombre data (podria ser tranquilamente el mismo nombre dataFetch)
        isLoading,
        hasError: error
    };
};