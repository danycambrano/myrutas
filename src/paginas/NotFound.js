import React from "react";
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div>
      NotFound
      <p />
      <Link to="/formulario">
        <button type="button" class="btn btn-primary">
          Formulario
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
