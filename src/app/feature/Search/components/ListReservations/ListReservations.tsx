import { urls } from 'app/core/api/endpoints';
import { axiosIntance } from 'app/core/config/AxiosConfig';
import { async } from 'q';
import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import {
  getReservations,
  deleteReservation,
} from '../../../../core/api/reservations.service';
import Input from '../../../../shared/components/Input/Input';

interface ReservationStructure {
  id: string;
  flightNumber: string;
  cityOrigin: string;
  cityDestination: string;
  datetime: string;
  price: string;
}

const ListReservations = () => {
  const [state, setstate] = useState([]);
  const [key, setkey] = useState('');

  useEffect(() => {
    getFlights();
  }, []);

  const getFlights = () => {
    getReservations().then(res => {
      setstate(res);
      console.log('data => ', res);
    });
  };

  const deleteFlight = (id: string) => {
    deleteReservation(id);
    getFlights();
  };

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
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <table className="opacity table">
            <thead>
              <tr>
                <th>#</th>
                <th>Opt</th>
              </tr>
            </thead>
            <tbody>
              {state.map((element: ReservationStructure, index) => (
                <tr key={index.toString()}>
                  <td> {element.flightNumber} </td>
                  
                  
                  
                  <td>
                    {/* <button onClick={() => deleteFlight(element.id)}>delete</button> */}{' '}
                    <button className="btn btn-info">Detalles</button>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListReservations;
