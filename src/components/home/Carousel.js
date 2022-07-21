import React from 'react'

export const Carousel = () => {
  return (
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/mindfullness2.jpg" alt="mind"/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Mejora tu vida</h5>
                                <h1 className="display-3 text-white animated slideInDown">Andrea Ibarguren Mindfulness</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Saber más</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Unirte ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
  )
}
