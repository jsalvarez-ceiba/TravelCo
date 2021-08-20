import React  , { useEffect, useState }  from 'react';
import Input from '../../../../shared/components/Input/Input';
import Select from '../../../../shared/components/Select/Select';
import Swal from 'sweetalert2';
import { createReservation } from '../../../../core/redux/actions/reservations/reservationActions';
import './FormReservation.style.scss';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { onSelected } from '../utils/onSelected';
import { PlacesState } from 'app/core/redux/reducers/places/placesReducer';

const dateNow = new Date();
const day = dateNow.getDate();
const month = dateNow.getMonth() + 1;
const year = dateNow.getFullYear() + 1;

const Age18 = 18;
const month10 = 10;

const maxRange = 9999;
const minRange = 1000;

const time = 5000;

const FormReservation = () => {
  const dispatch = useDispatch();

  const places = useSelector<PlacesState, PlacesState['places']>((state) => state.places);

  const [cityOrigin, setCityOrigin] = useState('');
  const [cityDestination, setCityDestination] = useState('');
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  interface Places {
    city: string;
    country: string;
    flag: string;
  }

  

  useEffect(() => {
  }, []);

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
    }
  };

  const onHandleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { price, cityOrigin, cityDestination } = onSelected(e);
    setCityOrigin(cityOrigin);
    setCityDestination(cityDestination);
    setPrice(price);
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

      setTimeout(() => {
        handleClose();
      }, time);

      dispatch(createReservation(obj));

      Swal.fire('¡Se ha creado la reserva con exito!');
    } else {
      alert('Datos incompletos');
    }
  };

  const calculateAge = (dateEvent: React.ChangeEvent<HTMLInputElement>) => {
    const birth = new Date(dateEvent.target.value);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();

    birth.setFullYear(now.getFullYear());

    if (now < birth) {
      years--;
    }

    setBirthdate(dateEvent.target.value);
    setAge(years);
  };

  const calculatePriceWithDate = (
    date: React.ChangeEvent<HTMLInputElement>
  ) => {
    const april = 4;
    const july = 7;
    const november = 9;
    const december = 12;

    const increment = 0.2;
    const disc = 0.15;

    setDate(date.target.value);

    const reservationDate = new Date(date.target.value);

    const mon = reservationDate.getMonth() + 1;

    if (mon >= april && mon <= july) {
      const plus = price * increment;
      const newP = price + plus;
      setMessage('plus');
      setNewprice(newP);
    } else if (mon >= november && mon <= december) {
      const discount = price * disc;
      const newP = price - discount;
      setMessage('discount');
      setNewprice(newP);
    } else {
      setNewprice(price);
    }
  };

  return (
    <>
      <div data-aos="zoom-in" className="card mx-auto opacity">
        <div className="card-header">
          <div className="">
            <strong>Nueva Reservación</strong>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title">Información del vuelo</h6>
          <hr />

          <div className="form-group">
            <strong>Origen</strong>
            <Select
              onChange={e => onHandleSelected(e)}
              name="origin"
              title="Origen"
              data={places}
            />
          </div>

          <br />

          <div className="form-group">
            <strong>Destino</strong>

            <Select
              onChange={e => onHandleSelected(e)}
              name="destination"
              title="Destino"
              data={places}
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

          <br />

          <div className="form-group">
            <strong>Precio viaje : {price} COP </strong>
          </div>

          <div className="form-group">
            <strong> Condiciones </strong>
            {message === 'plus' ? (
              <strong className="text-danger"> 20% x Temporada Alta </strong>
            ) : message === 'discount' ? (
              <strong className="text-success"> 15 % OFF </strong>
            ) : null}
          </div>

          <div className="form-group">
            <strong>Total: {newPrice} </strong>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="card mx-auto opacity">
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
              onChange={e => calculateAge(e)}
            />
          </div>

          <br />

          {age >= Age18 ? (
            <div>
              <button
                className="btn btn-info text-white mt-2"
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
      <Modal centered show={show}>
        <Modal.Header>Resumen de la Reserva</Modal.Header>
        <Modal.Body>
          <h5> Vuelo # {summary.flightNumber} </h5>

          <hr />

          <h6> Ciudad Origen: {summary.cityOrigin} </h6>
          <h6> Ciudad Destino: {summary.cityDestination} </h6>
          <h6>
            {' '}
            Nombre titular : {summary.name} {summary.lastname}{' '}
          </h6>

          <hr />

          <h4>Precio USD : {newPrice}</h4>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormReservation;
