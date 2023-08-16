import { useRef } from "react";
import { Button, Col } from "react-bootstrap";
import { useEffect } from "react";

const Buscador = ({onChangeSearch}) => {
  
  const searchInput = useRef(null)
  const botonRef = useRef(null)
  
  useEffect(() => {
    searchInput.current.focus()

  }, [])

  const search = () => {
    //console.log(document.getElementById("searchInput"))
    console.log(searchInput.current)
    botonRef.current.className = "btn btn-warning"
    onChangeSearch(searchInput.current.value)
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
        //  onChange={(event) => onChangeSearch(event)}
        />
      </Col>
      <Col sm={2} className="ms-0">
        <Button 
        ref={botonRef}
        className="btn btn-primary"
        onClick={search}>Buscar</Button>
      </Col>
    </>
  );
};

export default Buscador;
