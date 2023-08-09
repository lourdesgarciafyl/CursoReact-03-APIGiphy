import { Col } from "react-bootstrap";

const SelectorCategorias = ({categories}) => {
    return(
        <Col md={4} lg={2}>
        <select 
        className="form-select" 
        aria-label="Default select example" 
        >
        <option defaultValue={true}>Selecciona una Categoria</option>
        {categories.map( (categ) => (
            <option key={categ.id} value={categ.name}>{categ.name}</option>
        ))}
        </select>
  </Col>
    )
}

export default SelectorCategorias;