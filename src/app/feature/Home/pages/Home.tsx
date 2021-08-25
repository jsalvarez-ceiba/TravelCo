import * as PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import TitleHome from '../components/TitleHome/TitleHome';
import Footer from '../../Footer/components/Footer';
import './Home.style.scss';
import { useDispatch } from 'react-redux';
import { getPlaces } from 'app/core/redux/actions/places/placesActions';

import img1 from '../../../../assets/img/imgsPlaces/medellin.jpg';
import img2 from '../../../../assets/img/imgsPlaces/madrid.jpg';
import img3 from '../../../../assets/img/imgsPlaces/ibiza.jpg';

import './Home.style.scss';

interface HomeProps {
  name: string;
}

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  const getList = useCallback(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
    <div className="backgroundHome">
      <div className="flexCenter">
        <div>
          <div className="">
            <div className="card-header text-center">
              <TitleHome />
              <i className="fas fa-globe-americas fa-2x text-white"></i>
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title text-center text-white">
                Reserva tus vuelos
              </h5>
              <p className="card-text text-center text-white">
                Contamos con destinos nacionales e internacionales
              </p>
              <div className="center"></div>
            </div>
          </div>
        </div>


      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: 500, objectFit: 'cover' }}
              src={img1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              style={{ height: 500, objectFit: 'cover' }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              style={{ height: 500, objectFit: 'cover' }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="flexCenter">
        {/* <div data-aos="flip-left">
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
        </div> */}

        {/* <div data-aos="flip-left">
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
        </div> */}

        {/* <div data-aos="flip-left">
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
        </div> */}
      </div>
    </div>
    <Footer />
    
    
    </>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
