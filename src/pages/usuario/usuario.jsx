import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/usuario.css';
import Card from 'react-bootstrap/Card';
import PageContainer from '../../components/container/PageContainer';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';

const serverUrl='http://localhost:3000';

function Usuario() {
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
     
      // Realiza la solicitud GET a la API
      var correoRecuperado=sessionStorage.getItem("correo");

      axios.get(`${serverUrl}/api/getbyCorreo?correo=${correoRecuperado}`)
        .then((response) => {
          // Actualiza el estado con los datos de la respuesta
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <PageContainer>
      <div className="card-container">
        {userData.map((users) => (
          <Card key={users.usuario_id} className='card'>
            <Card.Body>
              <Card.Title>{users.usuario_id}</Card.Title>
              <Card.Title>{users.correo}</Card.Title>
              <Card.Title>{users.perfil}</Card.Title>
            </Card.Body>
          </Card>
        ))}
        
      </div>
      </PageContainer>
    );
  }
  
  export default Usuario;