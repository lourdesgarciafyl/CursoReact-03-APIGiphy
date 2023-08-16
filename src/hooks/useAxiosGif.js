import { useEffect, useState } from "react"
import { giphyAxios } from "../config/AxiosGiphy"

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const useAxiosGif = (search) => {
    const [dataFetch, setDataFetch] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [offset, setOffset] = useState(1)
    const limit = 24;

    useEffect (() => {
        getFetch();
    }, [search, offset])

    const getFetch = async () => {
        const resp = await giphyAxios.get(`gifs/search?api_key=${apiKey}&q=${search}&limit=${limit}&offset=${offset}`)
        const { data } = resp.data 
        console.log(data)
        setDataFetch([
            ...dataFetch,
            ...data
        ])
        setIsLoading(false)
    }

    const onLoadMore = () => {
     setOffset((prev) => prev + limit)
    }

    return {
        data: dataFetch,
        onLoadMore,
        isLoading,
    }
}