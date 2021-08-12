import React, { useEffect, useState } from 'react';
import { axiosIntance } from '../../../../core/config/AxiosConfig';
import Input from '../../../../shared/components/Input/Input';
import './FormReservation.style.scss';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../../../core/redux/actions/reservationActions';
import Swal from 'sweetalert2'
const FormReservation = () => {

    const dispatch = useDispatch();

    const [cityOrigin, setCityOrigin] = useState('');
    
    const [cityDestination, setCityDestination] = useState('');
    

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    interface Places {
        city: string,
        country: string,
        flag: string,
    }

    const [state, setstate] = useState([]);

    useEffect(() => {
        axiosIntance.get('http://localhost:8000/places').then(res => setstate(res.data));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            
            case 'name':
                setName(e.target.value);
                break;
            case 'lastname':
                setLastname(e.target.value);
                break;
            case 'age':
                setAge(e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'amount':
                setAmount(e.target.value);
                break;
        }
    };

    const onSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.name) {
            case 'origin':
                setCityOrigin(e.target.value);
                break;
            case 'destination':
                setCityDestination(e.target.value);
                break;
            
        }
    }

    const dispatchAction = () => {
        if (name !== '' && lastname !== '' && age !== '' && date !== '' && amount !== '') {
            const obj = {
                flightNumber: `FL-${1000}`,
                cityOrigin,
                cityDestination,
                datetime: date,
                price: '0'
            };
    
            dispatch(createReservation(obj));

            Swal.fire('¡Se ha creado la reserva con exito!')

        } else {
            alert('Datos incompletos')
        }

    };


    return (
        <>
            
            <div data-aos="zoom-in" className="card mx-auto opacity">
                <div className="card-header">
                    <div className="">
                        <strong>
                            Nueva Reservación
                        </strong>

                    </div>
                </div>
                <div className="card-body">
                    <h6 className="card-title">Información del vuelo</h6>
                    <hr />
                    <div className="form-group">
                        <strong>Origen</strong>
                        <select onChange={(e) => onSelected(e)} name="origin" id="" className="form-control">
                            <option value="">Selecciona una opción</option>
                            {state.map((element: Places, index) => (
                                <option key={index.toString()} value={element.city}> {element.city} </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <strong>Destino</strong>
                        <select onChange={(e) => onSelected(e)} name="destination" id="" className="form-control">
                            <option value="">Selecciona una opción</option>
                            {state.map((element: Places, index) => (
                                <option key={index.toString()} value={element.city}> {element.city} </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <strong>Fecha del vuelo</strong>
                        <Input value={date} name={'date'} type={'datetime-local'} onChange={(e) => handleChange(e)} />

                    </div>
                    <br />
                    <div className="form-group">
                        <strong>Cantidad de pasajeros</strong>
                        <Input value={amount} name={'amount'} type={'number'} onChange={(e) => handleChange(e)} />

                    </div>

                </div>
            </div>
            <div data-aos="zoom-in" className="card mx-auto opacity">
                <div className="card-body">
                    <h6 className="card-title">Datos personales </h6>
                    <hr />
                    <div className="form-group">
                        <strong>Nombres</strong>
                        <Input value={name} name={'name'} type={'text'} onChange={(e) => handleChange(e)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <strong>Apellidos</strong>
                        <Input value={lastname} name={'lastname'} type={'text'} onChange={(e) => handleChange(e)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <strong>Edad</strong>
                        <Input value={age} name={'age'} type={'number'} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="">
                        <button className="btn btn-info text-white mt-2" onClick={() => dispatchAction()}>  Reservar </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormReservation;
