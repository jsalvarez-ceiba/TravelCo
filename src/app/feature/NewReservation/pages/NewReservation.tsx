import React from 'react';
import FormReservation from '../components/FormReservation/FormReservation';
import './NewReservation.style.scss'



const NewReservation : React.FC = () => {
    return (
        <div className="backgroundFly">
            <h4 className="text-white flexCenter">Nueva Reserva</h4>
            <FormReservation />
        </div>
    );
};
export default NewReservation;