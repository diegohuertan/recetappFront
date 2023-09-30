import React, { useState, useEffect } from 'react';
import axios from 'axios';
const serverUrl = 'http://localhost:3000';
function Recetas() {
  const [recetas, setRecetas] = useState([]);

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

  return (
    <div className='recetas'>
      <h1>Recetas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            {/* Agrega más encabezados de columna según tus datos */}
          </tr>
        </thead>
        <tbody >
          {recetas.map((receta) => (
            <tr key={receta.receta_id}>
              <td>{receta.utensilio}</td>
              <td>{receta.titulo}</td>
              {/* Agrega más celdas según tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recetas;