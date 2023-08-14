import { useEffect, useState } from "react";
import { giphyAxios } from "../config/AxiosGiphy";


export const useFetchAxios = ( url, method, params) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getFetch()
     }, [url])

    const getFetch = async ( ) => {
        try {
            const resp = await giphyAxios({
                url: url,
                method: method,
                params: { params }
            });
            const { data } = resp.data
            setData(data)
            setIsLoading(false)
        } 
        catch (error) {
            console.log(error) ;
        }
    }

    return {
        data,
        isLoading
    }
}

// valor por default que tiene una propiedad, en caso de que no vengan parametros, tiene el valor null
useFetchAxios.defaultProps = {
    params: null,
}