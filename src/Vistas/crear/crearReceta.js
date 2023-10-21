import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/crearReceta.css';

const serverUrl = 'http://localhost:3000';

function CrearReceta() {
    const [titulo, setTitulo] = useState('');
    const [utensilio, setUtensilio] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [pasos, setPasos] = useState([]);

    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleUtensilioChange = (event) => {
        setUtensilio(event.target.value);
    };

    const handleIngredienteChange = (event) => {
        setIngredientes([...ingredientes, event.target.value]);
    };

    const handlePasoChange = (event) => {
        setPasos([...pasos, event.target.value]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevaReceta = {
            titulo,
            utensilio,
            ingredientes,
            pasos
        };

        axios.post(`${serverUrl}/api/recetas`, nuevaReceta)
            .then((response) => {
                console.log('Receta creada:', response.data);
                setTitulo('');
                setUtensilio('');
                setIngredientes([]);
                setPasos([]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="card-container">
            <Form onSubmit={handleSubmit} className='crearreceta'>
                <Form.Group controlId="formTitulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el título de la receta" value={titulo} onChange={handleTituloChange} />
                </Form.Group>

                <Form.Group controlId="formUtensilio">
                    <Form.Label>Utensilio</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el utensilio utilizado en la receta" value={utensilio} onChange={handleUtensilioChange} />
                </Form.Group>

                <Form.Group controlId="formIngredientes">
                    <Form.Label>Ingredientes</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un ingrediente utilizado en la receta" onChange={handleIngredienteChange} />
                    {ingredientes.length > 0 && (
                        <ul>
                            {ingredientes.map((ingrediente, index) => (
                                <li key={index}>{ingrediente}</li>
                            ))}
                        </ul>
                    )}
                </Form.Group>

                <Form.Group controlId="formPasos">
                    <Form.Label>Pasos</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un paso de la receta" onChange={handlePasoChange} />
                    {pasos.length > 0 && (
                        <ol>
                            {pasos.map((paso, index) => (
                                <li key={index}>{paso}</li>
                            ))}
                        </ol>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear receta
                </Button>
            </Form>
        </div>
    );
}

export default CrearReceta;
