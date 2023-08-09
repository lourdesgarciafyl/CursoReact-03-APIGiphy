import { Row } from "react-bootstrap";
import Banner from "./header/Banner";
import Navegacion from "./header/Navegacion";
import SelectorCategorias from "./ui/SelectorCategorias";
import Buscador from "./ui/Buscador";

const Gimoji = () => {
  return (
    <>
      <Navegacion></Navegacion>
      <Banner />
      <div className="seccionPrincipal mb-1">
        <Row className="justify-content-center">
          <SelectorCategorias         />
          <Buscador/>
        </Row>
      </div>
    </>
  );
};

export default Gimoji;
