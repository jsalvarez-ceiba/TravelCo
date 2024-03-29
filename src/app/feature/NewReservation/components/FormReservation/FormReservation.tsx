import React, { useEffect, useState, useCallback } from 'react';
import Input from '../../../../shared/components/Input/Input';
import Select from '../../../../shared/components/Select/Select';
import Swal from 'sweetalert2';
import './FormReservation.style.scss';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { onSelected } from '../utils/onSelected/onSelected';
import { PlacesState } from 'app/core/redux/model/PlacesState';
import * as PropTypes from 'prop-types';
import { getPlaces } from 'app/core/redux/actions/places/placesActions';
import { calculatePrice } from '../utils/calculatePrice/calculatePrice';
import { calculateAge } from '../utils/calculateAge/calculateAge';
import { createReservation } from 'app/core/redux/actions/reservations/reservationActions';

const dateNow = new Date();
const day = dateNow.getDate();
const month = dateNow.getMonth() + 1;
const year = dateNow.getFullYear() + 1;
const Age18 = 18;
const month10 = 10;
const maxRange = 9999;
const minRange = 1000;
/* const time = 5000; */
interface FormProps {
  places: [];
}

const FormReservation = (props: FormProps) => {
  const dispatch = useDispatch();
  const places = useSelector<PlacesState, PlacesState['places']>(
    state => state.places
  );
  const [cityOrigin, setCityOrigin] = React.useState('');
  const [cityDestination, setCityDestination] = React.useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [date, setDate] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [price, setPrice] = useState(0);
  const [newPrice, setNewprice] = useState(0);
  const [message, setMessage] = useState('');
  const [summary, setSummary] = useState({
    flightNumber: '',
    cityOrigin: '',
    cityDestination: '',
    name: '',
    lastname: '',
  });
  const [fltime, setFltime] = useState('');
  const [show, setShow] = useState(false);
  /* const handleClose = () => setShow(false); */
  const handleShow = () => setShow(true);
  const getList = useCallback(async () => {
    dispatch(getPlaces());
  }, [dispatch]);
  useEffect(() => {
    getList();
  }, [getList]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'lastname':
        setLastname(e.target.value);
        break;
      case 'date':
        calculatePriceWithDate(e);
        break;
      case 'fltime':
        setFltime(e.target.value);
        break;
    }
  };
  const onHandleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { priceLocale, cityOriginLocale, cityDestinationLocale } = onSelected(
      e
    );
    if (e.target.name === 'origin') {
      setCityOrigin(cityOriginLocale);
    } else if (e.target.name === 'destination') {
      setCityDestination(cityDestinationLocale);
      setPrice(priceLocale);
    }
  };
  const dispatchAction = () => {
    if (name !== '' && lastname !== '' && date !== '') {
      const nRandom = Math.random() * (maxRange - minRange) + minRange;
      const nTrunc = Math.trunc(nRandom);
      const obj = {
        id: '',
        flightNumber: `FL-${nTrunc}`,
        cityOrigin,
        cityDestination,
        hour: fltime,
        datetime: date,
        price: newPrice.toString(),
        name,
        lastname,
        birthdate,
        active: true,
      };
      handleShow();
      setSummary({
        flightNumber: obj.flightNumber,
        cityOrigin: obj.cityOrigin,
        cityDestination: obj.cityDestination,
        name: obj.name,
        lastname: obj.lastname,
      });
      dispatch(createReservation(obj));
      /* setTimeout(() => {
        handleClose();
      }, time); */
      Swal.fire('¡Se ha creado la reserva con exito!');
    } else {
      Swal.fire('Datos incompletos');
    }
  };
  const calcAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const years = calculateAge(e);
    setBirthdate(e.target.value);
    setAge(Number(years));
  };
  const calculatePriceWithDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { dateLocale, message, newPrice } = calculatePrice(e, price);
    setDate(dateLocale);
    setMessage(message);
    setNewprice(newPrice);
  };

  return (
    <>
      <div data-aos="zoom-in" className="card mx-auto opacityCell">
        <div className="card-header">
          <div className="title">
            <h5 className="title">Nueva Reservación</h5>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title-info-flight">Información del vuelo</h6>
          <hr />
          <div className="form-group">
            <strong>Origen</strong>
            <Select
              onChange={e => onHandleSelected(e)}
              name="origin"
              title="Origen"
              data={places !== undefined ? places : props.places}
            />
          </div>
          <br />
          <div className="form-group">
            <strong>Destino</strong>
            <Select
              onChange={e => onHandleSelected(e)}
              name="destination"
              title="Destino"
              data={places !== undefined ? places : props.places}
            />
          </div>
          <br />
          <div className="form-group">
            <strong>Fecha y Hora</strong>
            <Input
              max={
                month < month10
                  ? `${year}-0${month}-${day}`
                  : `${year}-${month}-${day}`
              }
              value={date}
              name={'date'}
              type={'date'}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <Input value={fltime} name={'fltime'} type={'time'} onChange={(e) => handleChange(e)} />
          </div>
          <br />
          <div className="form-group">
            <strong>Precio viaje : {price} COP </strong>
          </div>
          <div className="form-group">
            {message === 'plus' ? (
              <>
              <strong> Condiciones </strong>
              <strong className="text-danger"> 20% x Temporada Alta </strong>
              </>
            ) : message === 'discount' ? (
              <>
              <strong> Condiciones </strong>

              <strong className="text-success"> 15 % OFF </strong>
              </>
            ) : null}
          </div>
          <div className="form-group">
            <strong>Total: {newPrice} </strong>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="card mx-auto opacityCell">
        <div className="card-body">
          <h6 className="card-title">Datos personales </h6>
          <hr />
          <div className="form-group">
            <strong>Nombres</strong>
            <Input
              value={name}
              name={'name'}
              type={'text'}
              onChange={e => handleChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <strong>Apellidos</strong>
            <Input
              value={lastname}
              name={'lastname'}
              type={'text'}
              onChange={e => handleChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <strong> Fecha de Nacimiento </strong>
            <Input
              value={birthdate}
              name={'birthdate'}
              type={'date'}
              onChange={e => calcAge(e)}
            />
          </div>
          <br />
          {age >= Age18 ? (
            <div>
              <button
                name="save"
                className="btn btn-warning text-white mt-2"
                onClick={() => dispatchAction()}
              >
                Reservar
              </button>
            </div>
          ) : (
            <strong className="text-danger">
              Debes ser mayor de edad para generar una reserva!
            </strong>
          )}
        </div>
      </div>
      <Modal className="modal" centered show={show}>
        <Modal.Header>Resumen de la Reserva</Modal.Header>
        <Modal.Body>
          <h5 className="flight-number"> Vuelo # {summary.flightNumber} </h5>
          <hr />
          <h6> Ciudad Origen: {summary.cityOrigin} </h6>
          <h6> Ciudad Destino: {summary.cityDestination} </h6>
          <h6>
            Nombre titular : {summary.name} {summary.lastname}
          </h6>
          <hr />
          <h4>Precio : {newPrice} COP</h4>

          <div className="d-flex justify-content-center">
            <button className="btn btn-warning" onClick={() => window.location.replace('http://localhost:3000/search') }>Ir a reservas</button>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
};

FormReservation.propTypes = {
  places: PropTypes.array.isRequired,
};

export default FormReservation;
