import React from 'react'
import { Header } from '../ui/Header'
import { QueEsPartes } from './QueEsPartes'

export const QueEs = () => {
  return (
    <>
        

        <Header 
            title={"Mindfulness"}
            subtitle={"¿Que es?"}
        />


    <div className="container-xxl py-5">
        <div className="container">
            
                <div className="wow fadeInUp" data-wow-delay="0.3s" style={{textAlign:"center"}}>
                    <h6 className="section-title bg-white text-center text-primary px-3">Mindfulness</h6>
                    <h1 className="mb-4">¿Que es?</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    
                
            </div>
        </div>
    </div>

        <QueEsPartes />

    </>
  )
}
