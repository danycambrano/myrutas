import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from '../layouts/Layout';
import Home from '../paginas/Home';
import Formulario from '../components/formularios/Formulario';
import Descripcion from '../paginas/Descripcion';
import NotFound from '../paginas/NotFound';


function Rutas() {
  return (
    <div>
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/formulario' element={<Formulario/>}/>
                    <Route exact path='/formulario/:id' element={<Formulario/>}/>
                    <Route exact path='/descripcion' element={<Descripcion/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Layout>
        </Router>
    </div>
  )
}

export default Rutas