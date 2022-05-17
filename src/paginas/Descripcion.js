import React, { useState, useEffect } from "react";
import AxiosC from "../servicios/AxiosC";

import {useNavigate} from 'react-router-dom';


function Descripcion() {
  const [personal, setPersonal] = useState([]);

  const navigate=useNavigate();

  const consultarPersonal = async () => {
    const consultarp = await AxiosC.get("/personal/consultarPersonal");
    setPersonal(consultarp.data);
    //console.log(consultarp.data);
  };

  const EliminarPersonal=async(id)=>{
    if(window.confirm("¿Está seguro de eliminar el persona?")){
      const eliminar=await AxiosC.delete(`/personal/eliminarPersonal/${id}`);
      console.log("Datos eliminados correctamente.")
    }

    consultarPersonal();
  }

  useEffect(() => {
    consultarPersonal();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Direccion</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          {personal.map((persona, index) => {
            return (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{persona.nombre}</td>
                <td>{persona.apellidos}</td>
                <td>{persona.direccion}</td>
                <td><button onClick={()=>EliminarPersonal(persona._id)} >Eliminar</button></td>
                <td><button onClick={()=>navigate(`/formulario/${persona._id}`)} >Editar</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Descripcion;
