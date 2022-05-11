import React from "react";
import { Link } from "react-router-dom";

function Formulario() {
  return (
    <div>
      Formulario
      <p />
      <Link to="/">
        <button className="primary">Regresar a home</button>
      </Link>
    </div>
  );
}

export default Formulario;
