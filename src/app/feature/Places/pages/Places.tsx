import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as PropTypes from 'prop-types';

import ContainerPlaces from '../components/ContainerPlaces/ContainerPlaces';
import { getPlaces } from 'app/core/redux/actions/places/placesActions';
import Footer from '../../Footer/Footer';

export const Places: React.FC = () => {
  const dispatch = useDispatch();
  const getList = useCallback(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
    <div className="flexCenter">
      <ContainerPlaces />
    </div>
    <Footer />
    </>
  );
};

Places.propTypes = {
  getPlaces: PropTypes.func.isRequired,
};
