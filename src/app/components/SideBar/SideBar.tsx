import React from 'react';
import * as AiIcons from 'react-icons/ai';


export const Sidebar = () => [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Destinos',
        path: '/places',
        icon: <AiIcons.AiOutlineGlobal />,
    },
    {
        title: 'Reservar',
        path: '/new',
        icon: <AiIcons.AiOutlinePlusCircle />,
    },

    {
        title: 'Buscar reserva',
        path: '/search',
        icon: <AiIcons.AiOutlineSearch />,
    },


    
];


