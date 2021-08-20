import React from 'react';
import './ContainerPlaces.style.scss';
import { useSelector } from 'react-redux';

import medellin from '../../../../../assets/img/imgsPlaces/medellin.jpg';
import bogota from '../../../../../assets/img/imgsPlaces/bogota.jpg';
import cali from '../../../../../assets/img/imgsPlaces/cali.jpg';
import bucaramanga from '../../../../../assets/img/imgsPlaces/Bucaramanga.png';
import cartagena from '../../../../../assets/img/imgsPlaces/Cartagena.jpg';
import miami from '../../../../../assets/img/imgsPlaces/miami.jpg';
import chicago from '../../../../../assets/img/imgsPlaces/chicago.jpg';
import la from '../../../../../assets/img/imgsPlaces/losangeles.jpg';
import boston from '../../../../../assets/img/imgsPlaces/boston.jpg';
import washington from '../../../../../assets/img/imgsPlaces/washington.jpg';
import barcelona from '../../../../../assets/img/imgsPlaces/barcelona.jpg';
import madrid from '../../../../../assets/img/imgsPlaces/madrid.jpg';
import marbella from '../../../../../assets/img/imgsPlaces/marbella.jpg';
import galicia from '../../../../../assets/img/imgsPlaces/galicia.jpg';
import ibiza from '../../../../../assets/img/imgsPlaces/ibiza.jpg';
import { PlacesState } from 'app/core/redux/reducers/places/placesReducer';

const ContainerPlaces = () => {
  const places = useSelector<PlacesState, PlacesState['places']>(
    state => state.places
  );

  interface placesModel {
    city: string;
    country: string;
    flag: string;
  }


  return (
    <div className="flexCenter">
      {places !== undefined ? (
        <>
          {places.map((element: placesModel, index: number) => (
            <div key={index.toString()} className="card">
              <img
                style={{ width: 320, height: 250 }}
                src={
                  element.city === 'Medellín' ? medellin : element.city === 'Bogotá' ? bogota : element.city === 'Cali' ? cali : element.city === 'Bucaramanga' ? bucaramanga : element.city === 'Cartagena' ? cartagena: element.city === 'Miami'? miami: element.city === 'Chicago'? chicago: element.city === 'Los Angeles'? la: element.city === 'Boston'? boston: element.city === 'Washington'? washington: element.city === 'Barcelona'? barcelona: element.city === 'Madrid'? madrid: element.city === 'Marbella'? marbella: element.city === 'Galicia'? galicia: element.city === 'Ibiza'? ibiza: ''
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center"> {element.city} </h5>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1>cargando...</h1>
      )}
    </div>
  );
};

export default ContainerPlaces;
