import React from 'react';
import {Link} from 'react-router-dom';


import './Navbar.style.scss';

const arraySidebar = [
    {
        title: 'Inicio',
        path: '/',
    },
    {
        title: 'Destinos',
        path: '/places',
    },
    {
        title: 'Reservar',
        path: '/new',
    },
    {
        title: 'Buscar reserva',
        path: '/search',
    }, 
];


const Navbar : React.FC = () => {

    return (
        <>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    {/* <h5 className="text-warning">Bienvenido a TravelCo</h5> */}
                    <br />
                    <ul>
                        {
                            arraySidebar.map((element, index) => (
                                <Link key={index.toString()} className="link" to={element.path}>
                                    <li className="li text-warning" key={index.toString()}> {element.title} </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button
                    name="toggler"
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggleExternalContent" 
                    aria-controls="navbarToggleExternalContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
