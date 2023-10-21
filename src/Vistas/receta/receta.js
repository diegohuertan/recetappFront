import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/receta.css';

const serverUrl = 'http://localhost:3000';

function Recetas() {
  const [recetas, setRecetas] = useState([]);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Realiza la solicitud GET a la API
    axios.get(`${serverUrl}/api/recetas`)
      .then((response) => {
        // Actualiza el estado con los datos de la respuesta
        setRecetas(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleVerReceta = (receta) => {
    setRecetaSeleccionada(receta);
    setShowModal(true);
  };

  const handleCloseReceta = () => {
    setRecetaSeleccionada(null);
    setShowModal(false);
  };

  return (
    <div className="card-container">
      {recetas.map((receta) => (
        <Card key={receta.receta_id} className='card'>
          <Card.Img variant="top" src={receta.imagen} />
          <Card.Body>
            <Card.Title>{receta.titulo}</Card.Title>
            <Button variant="primary" onClick={() => handleVerReceta(receta)}>
              Ver más
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Modal show={showModal} onHide={handleCloseReceta}>
        <Modal.Header closeButton>
          <Modal.Title>{recetaSeleccionada && recetaSeleccionada.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recetaSeleccionada && (
            <>
              <p><strong>Receta ID:</strong> {recetaSeleccionada.receta_id}</p>
              <p><strong>Utensilio:</strong> {recetaSeleccionada.utensilio}</p>
              <p><strong>Ingredientes:</strong></p>
              <ul>
                {recetaSeleccionada.ingredientes && recetaSeleccionada.ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
              <p><strong>Pasos:</strong></p>
              <ol>
                {recetaSeleccionada.pasos && recetaSeleccionada.pasos.map((paso, index) => (
                  <li key={index}>{paso}</li>
                ))}
              </ol>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReceta}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Recetas;