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
    const [imagen, setImagen] = useState(null);
    const [parte1, setParte1] = useState(true);
    const [parte2, setParte2] = useState(false);
    const [parte3, setParte3] = useState(false);

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
    const handleImagenChange = (event) => {
        setImagen(event.target.value);
      };


    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevaReceta = {
            titulo,
            utensilio,
            ingredientes,
            pasos,
            imagen
        };

        axios.post(`${serverUrl}/api/crearRecetas`, nuevaReceta)
            .then((response) => {
                console.log('Receta creada:', response.data);
                setTitulo('');
                setUtensilio('');
                setIngredientes([]);
                setPasos([]);
                setImagen(null);
                setParte1(true);
                setParte2(false);
                setParte3(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="card-crearreceta">
            {parte1 && (
            <Form onSubmit={handleSubmit} className='crearreceta'>
                <Form.Group controlId="formTitulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el título de la receta" value={titulo} onChange={handleTituloChange} />
                </Form.Group>

                <Form.Group controlId="formUtensilio">
                    <Form.Label>Utensilio</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el utensilio utilizado en la receta" value={utensilio} onChange={handleUtensilioChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => { setParte1(false); setParte2(true); }}>
                    Siguiente
                </Button>
            </Form>
            )}

            {parte2 && (
                <Form onSubmit={handleSubmit} className='crearreceta'>
                    <Form.Group controlId="formIngredientes">
                        <Form.Label>Ingredientes</Form.Label>
                        <Form.Control as="select" onChange={handleIngredienteChange}>
                            <option value="">Seleccione un ingrediente</option>
                            <option value="Harina">Harina</option>
                            <option value="Azúcar">Azúcar</option>
                            <option value="Sal">Sal</option>
                            <option value="Leche">Leche</option>
                            <option value="Huevos">Huevos</option>
                        </Form.Control>
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

                    <Button variant="primary" type="submit" onClick={() => { setParte2(false); setParte3(true); }}>
                    Siguiente
                </Button>
            </Form>
            )}
            {parte3 && (
            <Form onSubmit={handleSubmit} className='crearreceta'>
                <Form.Group controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la URL de la imagen" value={imagen} onChange={handleImagenChange} />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Crear receta
                </Button>
            </Form>
            )}
        </div>
    );
}

export default CrearReceta;
