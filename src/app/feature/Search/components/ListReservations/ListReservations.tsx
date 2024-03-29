import React, { useCallback, useEffect, useState } from 'react';
import {
  cancelReservation,
  
  getReservations,
  searchKey,
} from '../../../../core/redux/actions/reservations/reservationActions';
import Input from '../../../../shared/components/Input/Input';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

interface ReservationStructure {
  id: string;
  flightNumber: string;
  cityOrigin: string;
  cityDestination: string;
  datetime: string;
  hour: string;
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
    hour: '',
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

  const [page, setpage] = useState(1);

  const getFlights = useCallback(async () => {
    let arrayData: any = [];
    const resp = await getReservations(page);
    arrayData = resp;
    setstate(arrayData);
  }, [page]);

  const search = async () => {
    let arrayData: any = [];
    const resp = await searchKey(key);
    arrayData = resp;
    setstate(arrayData);
  };

  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkey(e.target.value);
    if (e.target.value === '') {
      getFlights();
    }
  };

  const cancelFlight = async () => {
    dispatch(cancelReservation(data));
    handleClose();
    getFlights();
  };

  /* const deleteF = (id:string) => {
    dispatch(deleteReservation(id));
  } */

  const nextPage = async () => {
    const nextPage = page + 1;
    setpage(nextPage);
    console.log('nextPage => ', nextPage);
    const response = await getReservations(nextPage);
    console.log('response => ', response);
    setstate(response);
  };

  const previousPage = async () => {
    if (page > 1) {
      
      const previousPage = page - 1; 
      setpage(previousPage);
      console.log('previousPage => ', previousPage);
      const response = await getReservations(previousPage);
      setstate(response);
    } else {
      Swal.fire('Estas en la primera pagina!');
    }
  };

  useEffect(() => {
    getFlights();
  }, [getFlights]);

  return (
    <div className="list">
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
                <button onClick={() => search()} className="btn btn-light">
                  Buscar
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {state.length !== 0 ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',

              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <table className="table opacity">
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
                                hour: element.hour,
                                price: element.price,
                                name: element.name,
                                lastname: element.lastname,
                                birthdate: element.birthdate,
                                active: element.active,
                              });
                            }}
                            className="btn btn-warning"
                          >
                            <p className="active">Activo</p>
                          </button>
                        ) : (
                          <button className="btn btn-secondary">
                            <p className="cancel">Cancelado</p>
                          </button>
                        )}
                        {/* <button onClick={() => deleteF(element.id)}>
                          delete
                        </button> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <h4 className="text-white">NO HAY RESERVAS EN EL MOMENTO</h4>
          </div>
        )}

        <div className="d-flex justify-content-center">
          <div
            style={{
              width: '200px',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <div>
              <button
                onClick={() => previousPage()}
                className="btn btn-secondary"
              >
                Anterior
              </button>
            </div>
            <div>
              <button onClick={() => nextPage()} className="btn btn-secondary">
                Siguiente
              </button>
            </div>
          </div>

        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div>
            <strong className="text-white"> Pagina # {page}</strong>
          </div>
        </div>
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
