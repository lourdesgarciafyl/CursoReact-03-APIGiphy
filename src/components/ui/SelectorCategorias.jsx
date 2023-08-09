import { Col } from "react-bootstrap";

const SelectorCategorias = () => {
    return(
        <Col md={4} lg={3}>
        <select 
        className="form-select" 
        aria-label="Default select example" 
        >
            <option defaultValue={true}>Selecciona una Categoria</option>
        </select>
  </Col>
    )
}

export default SelectorCategorias;