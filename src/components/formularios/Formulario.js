
import React,{useState, useEffect} from "react";
//import { Link } from "react-router-dom";
import AxiosC from "../../servicios/AxiosC";

import {useNavigate, useParams} from 'react-router-dom';



function Formulario() {
  
  const datosEntrada={
    _id:"",
    nombre:"",
    apellidos:"",
    direccion:""
  }

  const navigate=useNavigate();
  const params=useParams();

  const[listaD, setListaD]=useState(datosEntrada);

  const obtenerDatos=e=>{
    const{name, value}=e.target
    setListaD({...listaD, [name]:value})
  }

const GuardarBD=async()=>{
  await AxiosC.post('/personal/guardarPersonal',{
    nombre: listaD.nombre,
    apellidos: listaD.apellidos,
    direccion: listaD.direccion
  }).then ((res)=>{
    console.log(res.data);
  })
  navigate('/descripcion');
}

const ActualizarPersonal=async()=>{
  await AxiosC.put(`/personal/actualizarPersonal/${params.id}`,{
    nombre: listaD.nombre,
    apellidos: listaD.apellidos,
    direccion: listaD.direccion
  }).then((res)=>{
    console.log(res.data);
  });
  navigate('/descripcion');
}

const listarUnPersonal=async(id)=>{
  const respuestaC=await AxiosC.get(`/personal/consultarUno/${id}`);
  setListaD(respuestaC.data);
}

  const Enviar=(e)=>{
    e.preventDefault();

    if(listaD._id===""){
      GuardarBD();
    }else{
      ActualizarPersonal();
    }
    
  }

  useEffect(()=>{
    listarUnPersonal(params.id);
  }, [params.id])


  return (
    <div>
      <form className="row g-3" onSubmit={Enviar}>
        <div className="col-md-6">
          <label for="text1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="text1"
            name="nombre"
            value={listaD.nombre}
            onChange={obtenerDatos}
            placeholder="Ingresa tu nombre completo"
          />
        </div>

        <div className="col-md-6">
          <label for="text2" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="text2"
            name="apellidos"
            value={listaD.apellidos}
            onChange={obtenerDatos}
            placeholder="Ingresa tus apellidos"
          />
        </div>

        <div className="col-md-6">
          <label for="text3" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="text3"
            name="direccion"
            value={listaD.direccion}
            onChange={obtenerDatos}
            placeholder="Ingresa tu dirección completa"
          />

        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">
              {listaD._id===""?"Guardar":"Actualizar"}
            </button>
          </div>
      </form>
    </div>
  );
}

export default Formulario;
