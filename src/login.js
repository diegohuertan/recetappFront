import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login(){



    return( 
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className="custom-form p-4 rounded">
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Email
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="email"
              placeholder="Email"
        
              
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={4}>
            Password
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="password"
              placeholder="Password"
              
             
            />
          </Col>
        </Form.Group>

       

        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={4} offset={4}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={4} offset={4}>
            <Button type="submit">Ingresar</Button>
          </Col>
          <Col sm={4}>
            <Button variant="secondary" >
              Registrarse
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
);
}

export default Login;