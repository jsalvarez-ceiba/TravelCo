import React from 'react';
/* import './Search.style.scss'; */
import ListReservations from '../components/ListReservations/ListReservations';

const Search = () => {
  return (
    <div className="backgroundFly" style={{ width: '100vw', height: '100vh' }}>
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
  );
};

export default Search;
