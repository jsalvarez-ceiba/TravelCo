import React, { useEffect } from 'react';
import ContainerPlaces from '../../components/ContainerPlaces/ContainerPlaces';
import './Places.style.scss';
//import { useSelector } from 'react-redux';
//import { NotesState } from 'app/core/redux/reducers/reservationReducer';



const Places = () => {
    /* const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes); */

    useEffect(() => {
        /* console.log('notes : ', notes); */
    }, []);

    return (
        <div className="background">
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="flexCenter p-3">
                <h1 className="title">Destinos Nacionales e Internacionales</h1>
            </div>
            <div className="flexCenter mt-5">
                <ContainerPlaces />
            </div>
        </div>
    );
};

export default Places;
