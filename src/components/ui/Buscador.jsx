import { useRef } from "react";
import { Button, Col } from "react-bootstrap";
import { useEffect } from "react";

const Buscador = ({onChangeSearch}) => {
  
  const searchInput = useRef(null)
  const botonRef = useRef(null)
  

  const search = () => {
    //console.log(document.getElementById("searchInput"))
    console.log(searchInput.current)
    botonRef.current.className = "btn btn-warning"
  }

  return (
    <>
      <Col sm={8} md={4} lg={5} className="me-0" >
        <input
        ref={searchInput}
          type="search"
          className=" form-control text-dark"
          placeholder="Search..."
          aria-label="Search"
          onChange={(event) => onChangeSearch(event)}
        />
      </Col>
      <Col sm={2} className="ms-0">
        <Button 
        ref={botonRef}
        className="btn-primary"
        onClick={search}>Buscar</Button>
      </Col>
    </>
  );
};

export default Buscador;
