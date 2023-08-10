import { Col } from "react-bootstrap";

const SelectorCategorias = ({categories, onChangeByCategory}) => {
    return(
        <Col sm={8} md={4} lg={2} className="my-1 my-md-0">
        <select 
        className="form-select" 
        aria-label="Default select example" 
        onChange={(event) => onChangeByCategory(event)}
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