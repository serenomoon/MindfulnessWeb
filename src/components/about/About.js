import React from 'react'
import { Footer } from '../home/Footer'
import { NavBar } from '../ui/NavBar'
import { AboutOne } from './AboutOne'
import { AboutTitle } from './AboutTitle'

export const About = () => {
  return (<>

   
    <AboutTitle 
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
