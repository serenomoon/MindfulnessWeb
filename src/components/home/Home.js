import React from 'react';
import { Carousel } from './Carousel';
import { Categorias } from './Categorias';
import { Cursos } from './Cursos';
import { Equipo } from './Equipo';
import { Nosotros } from './Nosotros';
import { Servicios } from './Servicios';

export const Home = () => {
  return (
    <div>
        {/* Spinner Start  */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
     {/* Spinner End  */}

     
   

    <Carousel />

    <Servicios />

    <Nosotros />

    <Categorias />
  
    <Cursos />

    <Equipo />

    </div>
  )
}
