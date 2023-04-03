import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from './Button';

const apiUrl = process.env.REACT_APP_API_URL;

const ShowButtons = () => {
  const [buttons, setButtons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchButtons();
  }, []);

  const fetchButtons = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/GetAll`);
      setButtons(response.data || []);
    } catch (error) {
      console.error(error);
      setError('Ocurrió un error al obtener los botones. Inténtalo de nuevo más tarde.');
    }
  };

  const handleAddButton = async () => {
    try {
      await axios.post(`${apiUrl}/api/Add`);
      fetchButtons();
    } catch (error) {
      console.error(error);
      setError('Ocurrió un error al agregar el botón. Inténtalo de nuevo más tarde.');
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '9999' }}>
          <p>{error}</p>
          <button onClick={handleCloseError}>Cerrar</button>
        </div>
      )}
      <div>
        <button onClick={handleAddButton}>Agregar Botones</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>BOTONES</th>
            </tr>
          </thead>
          <tbody>
            {buttons.length === 0 ? (
              <tr>
                <td colSpan='2'>No hay botones para mostrar.</td>
              </tr>
            ) : (
              buttons.map((btn, index) => (
                <tr key={index}>
                  <td>
                    <Button id={btn.button_id} count={btn.button_count} fetchButtons={fetchButtons} setError={setError} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ShowButtons.propTypes = {};

export default ShowButtons;