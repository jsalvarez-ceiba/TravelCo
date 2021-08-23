import React, { useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';

import ContainerPlaces from '../components/ContainerPlaces/ContainerPlaces';

export const Places: React.FC = () => {
  const getList = useCallback(() => {}, []);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className="background">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flexCenter p-3"
      >
        <h1 className="title">Destinos Nacionales e Internacionales</h1>
      </div>
      <div className="flexCenter mt-5">
        <ContainerPlaces />
      </div>
    </div>
  );
};

Places.propTypes = {
  getPlaces: PropTypes.func.isRequired,
};
