import cargando from "../../styles/cargando.css"

export const Cargando = ({ bg }) => {

    return (
      <div className="seccionPrincipal">
        <div className='row m-0 vh-100 justify-content-center align-items-center'>
          <div className="dots" >
            <div style={{ backgroundColor: bg}}></div>
            <div style={{ backgroundColor: bg}}></div>
            <div style={{ backgroundColor: bg}}></div>
          </div>
        </div>
      </div>
    )
  }
  
  Cargando.defaultProps = {
    bg: ' rgb(210,112,254)'
  }
  