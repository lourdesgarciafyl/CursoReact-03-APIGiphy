import { Row } from "react-bootstrap";
import Banner from "./header/Banner";
import Navegacion from "./header/Navegacion";
import SelectorCategorias from "./ui/SelectorCategorias";
import Buscador from "./ui/Buscador";
import GifCard from "./GifCard";
import  {Cargando} from "./ui/Cargando";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFetchAxios } from "../hooks/useFetchAxios";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

const Gimoji = () => {
 // const [categories, setCategories] = useState([])
 // const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState("vintage")

  // traemos los return del useFetch. NO se puede instanciar dentro de un useEffect 
  // Cambio el nombre de data por dataCateg y dataSearch para que no se repita la constante
  //const {data: dataCateg} = useFetch(`${urlApi}gifs/categories?api_key=${apiKey}`)
  const { data: dataCateg} = useFetchAxios(`gifs/categories?api_key=${apiKey}`, `get`,)
  const {data: dataSearch, isLoading: isLoadingSearch } = useFetch(
    `gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );

  
  //useEffect(() => {
  //  getCategories();
  //  getInit();
  // }, [])

  // useEffect(() =>{
  //  getInit()
  // }, [search])

  /* FETCH */
 // const getCategories = async () => {
 //   const respuesta = await fetch(`${urlApi}gifs/categories?api_key=${apiKey}`)
 //   const { data } = await respuesta.json()
 //   setCategories(data)
 // }

  /* Axios */
  // const getnit = async () => {
  //   const { data } = await giphyAxios.get(
  //     `gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  //   );
  //   setGifs(data.data);
  // }; 

  //const getInit = async () => {
  //  const respuesta = await fetch(
  //    `${urlApi}gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=08`)
  //  const { data } = await respuesta.json()
  //  setGifs(data)
  // }

  const onChangeByCategory = (event) => {
    setSearch(event.target.value)
  }
  
  const onChangeSearch = (event) => {
    const data = event.target.value
    if(data.length > 2) {
      setSearch(data)
    }
  }

  if(isLoadingSearch){
    return <Cargando />
}

    return (
    <>
      <Navegacion></Navegacion>
      <div className="seccionPrincipal">
      <Banner />
      <div className="mb-1  container">
        <Row className="justify-content-center px-1">
          <SelectorCategorias    
          categories={dataCateg} 
          onChangeByCategory={(event) =>onChangeByCategory(event)}    />
          <Buscador
          onChangeSearch={(event) => onChangeSearch (event)}/>
        </Row>
      </div>
      <div className="py-2 mt-5  container">
            <div>
                <Row className="">
                   <GifCard 
                   gifs={dataSearch}></GifCard>
                </Row>
            </div>
        </div>   
      </div>                 
    </>
  );
};

export default Gimoji;
