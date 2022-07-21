import React from 'react'

export const AboutOne = ({name}) => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src={`img/profilepic.jpg`} alt="" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">Sobre mi</h6>
                    <h1 className="mb-4">{name}</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
