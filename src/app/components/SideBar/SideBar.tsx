import React from 'react';
import * as AiIcons from 'react-icons/ai';


export const Sidebar = () => [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Destinos',
        path: '/places',
        icon: <AiIcons.AiOutlineGlobal />,
        cName: 'nav-text'
    },
    {
        title: 'Reservar',
        path: '/new',
        icon: <AiIcons.AiOutlinePlusCircle />,
        cName: 'nav-text'
    },

    {
        title: 'Buscar reserva',
        path: '/search',
        icon: <AiIcons.AiOutlineSearch />,
        cName: 'nav-text'
    },


    
];


