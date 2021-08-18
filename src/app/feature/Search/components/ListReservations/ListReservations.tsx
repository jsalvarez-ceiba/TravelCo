import { urls } from 'app/core/api/endpoints';
import { axiosIntance } from 'app/core/config/AxiosConfig';
import React, { useEffect, useState, useCallback } from 'react';
import { getReservations } from '../../../../core/redux/actions/reservationActions';
import Input from '../../../../shared/components/Input/Input';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

interface ReservationStructure {
  id: string;
  flightNumber: string;
  cityOrigin: string;
  cityDestination: string;
  datetime: string;
  price: string;
  name: string;
  lastname: string;
  birthdate: string;
  active: boolean;
}

const ListReservations = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    id: '',
    flightNumber: '',
    cityOrigin: '',
    cityDestination: '',
    datetime: '',
    price: '',
    name: '',
    lastname: '',
    birthdate: '',
    active: true,
  });

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [state, setstate] = useState([]);
  const [key, setkey] = useState('');

  
  

  const getFlights = useCallback(async () => {
    let arrayData: any = [];
    const resp = await dispatch(getReservations());
    console.log('resp state => ', resp);
    arrayData = resp;
    setstate(arrayData);
  }, [dispatch]);
  

  const searchKey = async () => {
    const resp = await axiosIntance.get(
      `${urls.localhost}/reservations?flightNumber=${key}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log('response search => ', resp);
    setstate(resp.data);
  };

  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkey(e.target.value);
    if (e.target.value === '') {
      getFlights();
    }
  };

  const cancelFlight = async () => {
    try {
      const resp = await axiosIntance.put(
        `${urls.localhost}/reservations/${data.id}`,
        { ...data, active: false },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log('resp update => ', resp);
      handleClose();
      getFlights();
    } catch (err) {
      throw new Error(err);
    }
  };
  useEffect(() => {
    getFlights();
  }, [getFlights]);

  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30vh',
          }}
        >
          <div>
            <h4 className="text-white">Buscar vuelo</h4>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <Input
                  value={key}
                  name={'search'}
                  type={'text'}
                  onChange={e => onHandleSearch(e)}
                />
              </div>
              <div>
                <button onClick={() => searchKey()} className="btn btn-info">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {state.length !== 0 ? (
          <div
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <table className="opacity table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {state.map((element: ReservationStructure, index) => (
                  <tr key={index.toString()}>
                    <td> {element.flightNumber} </td>
                    <td> {element.cityOrigin} </td>
                    <td> {element.cityDestination} </td>
                    <td>
                      {element.active ? (
                        <button
                          onClick={() => {
                            handleShow();
                            setData({
                              id: element.id,
                              flightNumber: element.flightNumber,
                              cityOrigin: element.cityOrigin,
                              cityDestination: element.cityDestination,
                              datetime: element.datetime,
                              price: element.price,
                              name: element.name,
                              lastname: element.lastname,
                              birthdate: element.birthdate,
                              active: element.active,
                            });
                          }}
                          className="btn btn-success"
                        >
                          Activo
                        </button>
                      ) : (
                        <button className="btn btn-danger">Cancelado</button>
                      )}
                      {/* <button onClick={() => deleteFlight(element.id)}>delete</button>{' '} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        ): (
          <div className="d-flex justify-content-center">

              <h4 className="text-white">NO HAY RESERVAS EN EL MOMENTO</h4>
          </div>
        )}

      </div>
      <Modal show={show}>
        <Modal.Header>Estado del Vuelo</Modal.Header>
        <Modal.Body>
          <h5>¿Desea Cancelar este Vuelo?</h5>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button onClick={() => handleClose()} className="btn btn-secondary">
              No
            </button>
            <button onClick={() => cancelFlight()} className="btn btn-danger">
              Sí
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ListReservations;
