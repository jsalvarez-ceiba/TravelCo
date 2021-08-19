import React from 'react';
import FormReservation from '../components/FormReservation/FormReservation';
import './NewReservation.style.scss';
import {RouteComponentProps, withRouter } from 'react-router-dom';

interface PropsComponent extends RouteComponentProps {
    

}

const NewReservation = (props : PropsComponent) => {
    return (
        <div className="backgroundFly">
            <h4 className="text-white flexCenter">Nueva Reserva</h4>
            <FormReservation  />
        </div>
    );
};
export default withRouter(NewReservation);