import React, { useEffect, useState } from 'react';
import { getPlaces } from '../../../../core/api/places.service';
import { createReservation } from '../../../../core/api/reservations.service';
import Input from '../../../../shared/components/Input/Input';
import Swal from 'sweetalert2';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './FormReservation.style.scss';
import { Modal, ModalBody } from 'react-bootstrap';

interface propsComponent extends RouteComponentProps {}

const FormReservation = (props: propsComponent) => {
  //const dispatch = useDispatch();

  const [cityOrigin, setCityOrigin] = useState('');
  const [cityDestination, setCityDestination] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
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

  const [state, setstate] = useState([]);

  useEffect(() => {
    //axiosIntance.get('http://localhost:8000/places').then(res => setstate(res.data));
    getPlaces().then(res => setstate(res));
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
      case 'amount':
        setAmount(e.target.value);
        break;
      case 'birthdate':
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

        switch (e.target.value) {
          case 'Madrid': 
            setPrice(3000000);
            break;
          case 'Barcelona':
            setPrice(3000000);
            break;
          case 'Marbella':
            setPrice(3000000);
            break;
          case 'Galicia':
            setPrice(3000000);
            break;
          case 'Ibiza':
            setPrice(3000000);
            break;
          case 'Miami':
            setPrice(2000000);
            break;
          case 'Chicago':
            setPrice(2000000);
            break;
          case 'Los Angeles':
            setPrice(2000000);
            break;
          case 'Boston':
            setPrice(2000000);
            break;
          case 'Washington':
            setPrice(2000000);
            break;
          case 'Medellín':
            setPrice(1800000);
            break;
          case 'Bogotá':
            setPrice(1800000);
            break;
          case 'Cali':
            setPrice(1800000);
            break;
          case 'Bucaramanga':
            setPrice(1800000);
            break;
          case 'Cartagena':
            setPrice(1800000);
            break;
        }
        break;
    }
  };

  const dispatchAction = () => {
    if (name !== '' && lastname !== '' && date !== '') {
      const nRandom = Math.random() * (9999 - 1000) + 1000;
      const nTrunc = Math.trunc(nRandom);

      const obj = {
        flightNumber: `FL-${nTrunc}`,
        cityOrigin,
        cityDestination,
        datetime: date,
        price: newPrice,
        name,
        lastname,
        birthdate,
        active: true,
      };
      console.log(obj);
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
        createReservation(obj);
        props.history.push('/search');
        
      }, 5000);
      
      //dispatch(createReservation(obj));
      console.log('props => ', props);
      
      Swal.fire('¡Se ha creado la reserva con exito!');
    } else {
      alert('Datos incompletos');
    }
  };

  const calculateAge = (date: React.ChangeEvent<HTMLInputElement>) => {
    //setBirthdate(date);
    const birthdate = new Date(date.target.value);
    const now = new Date();
    let years = now.getFullYear() - birthdate.getFullYear();

    birthdate.setFullYear(now.getFullYear());

    if (now < birthdate) {
      years--;
    }

    console.log('years old => ', years);

    setBirthdate(date.target.value);
    setAge(years);
  };

  const calculatePriceWithDate = (
    date: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDate(date.target.value);

    const reservationDate = new Date(date.target.value);

    const month = reservationDate.getMonth() + 1;

    console.log('month => ', month);

    if (month >= 4 && month <= 7){
      const plus = price * 0.2;
      const newPrice = price + plus;
      console.log('new Price => ', newPrice);
      setMessage('plus');
      setNewprice(newPrice);
    } else if (month >= 9 && month <= 12){
      const discount = price * 0.15;
      const newPrice = price - discount;
      console.log('new Price => ', newPrice);
      setMessage('discount');
      setNewprice(newPrice);
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
            <select
              onChange={e => onSelected(e)}
              name="origin"
              id=""
              className="form-control"
            >
              <option value="">Selecciona una opción</option>
              {state.map((element: Places, index) => (
                <option key={index.toString()} value={element.city}>
                  {' '}
                  {element.city}{' '}
                </option>
              ))}
            </select>
          </div>

          <br />

          <div className="form-group">
            <strong>Destino</strong>
            <select
              onChange={e => onSelected(e)}
              name="destination"
              id=""
              className="form-control"
            >
              <option value="">Selecciona una opción</option>
              {state.map((element: Places, index) => (
                <option key={index.toString()} value={element.city}>
                  {' '}
                  {element.city}{' '}
                </option>
              ))}
            </select>
          </div>

          <br />

          <div className="form-group">
            <strong>Fecha y Hora</strong>
            <Input
              value={date}
              name={'date'}
              type={'datetime-local'}
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
              <strong className="text-success"> 15 % OFF  </strong>
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

          {age >= 18 ? (
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
      <Modal show={show}>
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

export default withRouter(FormReservation);
