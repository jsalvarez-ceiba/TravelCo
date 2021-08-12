import React from 'react';


import './Navbar.style.scss';

/* const arraySidebar = [
    {
        title: 'Home',
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
]; */


const Navbar : React.FC = () => {

    return (
        <>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Bienvenido a TravelCo</h5>
                    
                    <br />
                    {/* <ul>
                        {
                            arraySidebar.map((element, index) => (
                                <Link className="link" to={element.path}>
                                    <li className="li" key={index.toString()}> {element.title} </li>
                                </Link>
                            ))
                        }
                    </ul> */}
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
