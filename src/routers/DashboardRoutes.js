import { Route, Routes } from "react-router-dom";
import { About } from "../components/about/About";
import { Home } from "../components/home/Home";
import { NavBar } from "../components/ui/NavBar";
import { QueEs } from "../components/mindfulness/QueEs"
import { Contacto } from "../components/contact/Contacto";
import { Footer } from "../components/home/Footer";
import { Cursos } from "../components/home/Cursos";
 


export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="quees" element={<QueEs />} />

          <Route path="contacto" element={<Contacto />} />

          <Route path="cursos" element={<Cursos />} />


           {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
         </Routes>
         <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      <Footer />
    </>
  )
}