import { Row } from "react-bootstrap";
import Banner from "./header/Banner";
import Navegacion from "./header/Navegacion";
import SelectorCategorias from "./ui/SelectorCategorias";
import Buscador from "./ui/Buscador";
import GifCard from "./GifCard";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

const Gimoji = () => {
  const [categories, setCategories] = useState([])
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState("random")

  useEffect(() => {
    getCategories();
    getInit();
  }, [])

  useEffect(() =>{
    getInit()
  }, [search])
  
  const getCategories = async () => {
    const respuesta = await fetch(`${urlApi}gifs/categories?api_key=${apiKey}`)
    const { data } = await respuesta.json()
    setCategories(data)
  }

  const getInit = async () => {
    const respuesta = await fetch(
      `${urlApi}gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=08`)
    const { data } = await respuesta.json()
    setGifs(data)
  }

  const onChangeByCategory = (event) => {
    setSearch(event.target.value)
  }
    return (
    <>
      <Navegacion></Navegacion>
      <Banner />
      <div className="seccionPrincipal">
      <div className="mb-1">
        <Row className="justify-content-center">
          <SelectorCategorias    
          categories={categories} 
          onChangeByCategory={(event) =>onChangeByCategory(event)}    />
          <Buscador/>
        </Row>
      </div>
      <div className="py-2 mt-5">
            <div className="container">
                <Row className="">
                   <GifCard 
                   gifs={gifs}></GifCard>
                </Row>
            </div>
        </div>   
      </div>                 
    </>
  );
};

export default Gimoji;
