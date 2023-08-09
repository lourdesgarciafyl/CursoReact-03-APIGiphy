import { Col } from "react-bootstrap";
const Buscador = () => {
  return (
    <>
      <Col md={4} lg={5}>
        <input
          type="search"
          className=" form-control text-dark"
          placeholder="Search..."
          aria-label="Search"
          onChange={(event) => onChangeSearch(event)}
        />
      </Col>
    </>
  );
};
export default Buscador;
