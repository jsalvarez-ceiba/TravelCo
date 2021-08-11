import React from 'react';

import FormReservation from '../components/FormReservation/FormReservation';

const NewReservation = () => {
    return (
        <div className="backgroundFly">
            <h4 className="text-white flexCenter">Nueva Reserva</h4>
            <FormReservation />
        </div>
    );
};

export default NewReservation;
