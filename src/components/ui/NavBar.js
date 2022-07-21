import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const NavBar = () => {


    // const [show, setShow] = useState(false);
    
    const { user, dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({
            type : types.logout
        })

        navigate('/', {
            replace: true
          });
    }

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>Mindfulness</h2>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="/navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="about" className="nav-item nav-link">Sobre mi</Link>
                <Link to="cursos" className="nav-item nav-link">Cursos</Link>
                <div className="nav-item dropdown">
                    <Link to="quees" className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mindfulness</Link>
                    <div className="dropdown-menu fade-down m-0">
                        <Link to="quees" className="dropdown-item">¿Que es?</Link>
                    </div>
                </div>
                <Link to="contacto" className="nav-item nav-link">Contacto</Link>
            </div>

            {user.logged ?
                <>
                    <span className='m-3'>{ user.name }</span>
                    <button onClick={ handleLogout } className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Salir</button>
                </>
                :
                
                    <Link to="/auth/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Unirse ahora<i className="fa fa-arrow-right ms-3"></i></Link>
            }

        </div>
    </nav>
  )
}
