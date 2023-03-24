import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();

  return (
    <div>
      {location.state === null ? (
        <Navigate to="/" />
      ) : (
        <h4>{location.state.test.title}</h4>
      )}
    </div>
  );
};

export default Detail;
