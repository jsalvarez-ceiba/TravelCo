import React from 'react';
import FormReservation from '../components/FormReservation/FormReservation';
import './NewReservation.style.scss';
import Footer from '../../Footer/Footer';



const NewReservation = () => {
    return (
        
        <div className="backgroundFlyCell">
            <div className="d-flex justify-content-center" style={{padding: 20}}>
                <i className="fas fa-plane-departure fa-2x text-white"></i>
            </div>
            <FormReservation places={[]}  />
            <Footer />
        </div>
        
    );
};
export default NewReservation;