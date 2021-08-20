import { getPlaces } from 'app/core/redux/actions/places/placesActions';
import React, { useEffect, useCallback } from 'react';
/* import { useDispatch } from 'react-redux'; */



import TitleHome from '../components/TitleHome/TitleHome';
import './Home.style.scss';

const Home = () => {
  /* const dispatch = useDispatch(); */

  const getList = useCallback(() => {
    getPlaces();
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className="backgroundFlyHome">
      <div className="flexCenter">
        <div>
          <div className="card border-primary mb-3">
            <div className="card-header text-center">
              <TitleHome />
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title text-center">Reserva tus vuelos</h5>
              <p className="card-text text-center">
                Contamos con destinos nacionales e internacionales
              </p>
              <div className="center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flexCenter">
        <div data-aos="flip-left">
          <div className="card text-dark bg-warning mb-3 ">
            <div className="card-header">
              <h1 className="text-center">Experiencia</h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Viajes inolvidables</h5>
              <p className="card-text">
                Con nosotros tendras los viajes mas placenteros de tu vida
              </p>
            </div>
          </div>
        </div>

        <div data-aos="flip-left">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">
              <h1 className="text-center">Tranquilidad</h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Disfruta de la tranquilidad</h5>
              <p className="card-text">
                En travelco garantizamos tu tranquilidad durante tus viajes
              </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">
              <h1 className="text-center">Seguridad</h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Maxima seguridad para ti</h5>
              <p className="card-text">
                Nos preocupamos por protegerte a ti y a tus seres queridos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
