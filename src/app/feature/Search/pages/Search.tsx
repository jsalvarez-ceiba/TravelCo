import React from 'react';
import ListReservations from '../components/ListReservations/ListReservations';
import './Search.style.scss';
import Footer from '../../Footer/Footer';

const Search = () => {
  return (
    <>
    <div className="backgroundFlySearch" style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{
          width: '100vw',
          height: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <ListReservations />
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Search;
