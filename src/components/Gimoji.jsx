import { Row } from "react-bootstrap";
import Banner from "./header/Banner";
import Navegacion from "./header/Navegacion";
import SelectorCategorias from "./ui/SelectorCategorias";
import Buscador from "./ui/Buscador";
import GifCard from "./GifCard";

const Gimoji = () => {
  return (
    <>
      <Navegacion></Navegacion>
      <Banner />
      <div className="seccionPrincipal">
      <div className="mb-1">
        <Row className="justify-content-center">
          <SelectorCategorias         />
          <Buscador/>
        </Row>
      </div>
      <div className="py-2 mt-5">
            <div className="container">
                <Row className="">
                   <GifCard></GifCard>
                </Row>
            </div>
        </div>   
      </div>                 
    </>
  );
};

export default Gimoji;
