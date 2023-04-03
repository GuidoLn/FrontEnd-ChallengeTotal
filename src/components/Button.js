import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const Button = ({ id, count, fetchButtons, setError }) => {
  const handleButtonClick = async (id) => {
    try {
      await axios.patch(`${apiUrl}/api/ClickButton/${id}`);
      fetchButtons();
    } catch (error) {
      console.error(error);
      setError('Ocurrió un error al hacer clic en el botón. Inténtalo de nuevo más tarde.');
    }
  };

  const handleDeleteButton = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/DeleteButton/${id}`);
      fetchButtons();
    } catch (error) {
      console.error(error);
      setError('Ocurrió un error al borrar el botón. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <>
      <button onClick={() => handleButtonClick(id)}>{`Boton numero: ${id} (${count})`}</button>
      <button onClick={() => handleDeleteButton(id)}>Borrar</button>
    </>
  );
};

Button.propTypes = {
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  fetchButtons: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Button;