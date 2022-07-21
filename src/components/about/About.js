import React from 'react'
import { Footer } from '../home/Footer'
import { Header } from '../ui/Header'
import { AboutOne } from './AboutOne'

export const About = () => {
  return (<>

   
    <Header 
        title = {"Sobre mi"}
        subtitle = {"Sobre mi"}
    />
   
    
    <AboutOne 
        name= {"Andre Ibarguren"}
    />  

    <Footer />


    
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  )
}
