import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';


function Home() {
  return (
    <Container>
      <Card className="welcome-card">
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            ¡Bienvenido!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="vision-card">
        <Card.Body>
          <Card.Title>home</Card.Title>
          <Card.Text>
          recetapp ejem home
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="info-card">
        <Card.Body>
        <Card.Title>Datos de la organización</Card.Title>
          
        </Card.Body>
      </Card>
    </Container>
  );
}


export default Home;