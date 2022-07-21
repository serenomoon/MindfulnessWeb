import React from 'react';
import { Link } from "react-router-dom";

export const Header = ({title,subtitle}) => {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">{title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">{subtitle}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}
