import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Footer } from '../components/home/Footer';
import { Videos } from '../components/private/videos/Videos';
import { NavBar } from '../components/ui/NavBar';

export const DataRoutes = () => {
  return (
    <>
      <NavBar />
        <Routes>
    
          <Route path="videos" element={<Videos />} />
    
        </Routes>
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      <Footer />
    </>
  )
}
