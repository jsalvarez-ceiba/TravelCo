import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.style.scss';
import { Sidebar } from '../SideBar/SideBar';




const Navbar = () => {
    const [arraySidebar, setArraySidebar] = useState(Sidebar);
    /* const [sidebar, setSidebar] = useState(false); */
    /* const showSidebar = () => setSidebar(!sidebar) */

    return (
        <>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Bienvenido a TravelCo</h5>
                    <span className="text-muted">Escoge entre una de nuestras opciones</span>
                    <ul>
                        {
                            arraySidebar.map((element, index) => (
                                <Link to={element.path}>
                                    <li className="text-white" key={index.toString()}> {element.title} </li>
                                </Link>
                            ))
                        }
                    </ul>
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
