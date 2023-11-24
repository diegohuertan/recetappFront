import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/crearReceta.css';
import PageContainer from '../../components/container/PageContainer';
import { Grid, Paper, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const serverUrl = 'http://localhost:3000';

function CrearReceta() {
    const [titulo, setTitulo] = useState('');
    const [utensilio, setUtensilio] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [pasos, setPasos] = useState([]);
    const [imagen, setImagen] = useState(null);
    const [ListIngredientes, setListIngredientes] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [ListUtensilios, setListUtensilios] = useState([]);
    const [selectedUtensilios, setSelectedUtensilios] = useState([]);


    
    axios.get(`${serverUrl}/api/ingredientes`)
        .then((response) => {
            const nombres = response.data.map(ingrediente => ingrediente.nombre);
            setListIngredientes(nombres); // Aquí se actualiza el estado
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        axios.get(`${serverUrl}/api/utensilios`)
        .then((response) => {
            const nombres = response.data.map(utensilio => utensilio.nombre);
            setListUtensilios(nombres); // Aquí se actualiza el estado
        })
        .catch((error) => {
            console.error('Error:', error);
        });

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
            
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        
        
        <PageContainer >
        <div className="crearReceta">
        <Grid container spacing={0} padding={2}>
            <Grid item xs={12} md={5} marginBottom={1} marginRight={3}>
                <Paper sx={{backgroundColor:'lightblue' , padding:3}}>
                
                    <Paper sx={{backgroundColor:'grey', padding:1}}>
                    <Typography variant="h6" gutterBottom component="div">
                        Carga la imagen de la receta
                    </Typography>
                    
                <Link to={`/Recetas`}>
                <FileUploadIcon sx={{alignItems:'center', height:100, minWidth:100}}/>
                </Link>
                </Paper>

                
                </Paper>
                <Paper sx={{marginTop: 2}}>
                    <Typography variant="h6" gutterBottom component="div">
                    Descripcion De La Receta
                    </Typography>

                </Paper>
                <Paper sx={{marginTop: 2}}>
                    <Typography variant="h6" gutterBottom component="div">
                    Pasos De La Receta
                    </Typography>
                </Paper>


            </Grid>  
            <Grid item xs={12} md={6.8} marginBottom={1}>
                <Paper sx={{ padding:3, marginBottom:2}}>
                <Typography variant="h6" gutterBottom component="div"> 
                Receta
                </Typography>
                <TextField fullWidth label="Titulo Receta" id="fullWidth" />
                
                </Paper>
                
                <Paper sx={{padding:1,  marginBottom:2}}>
                    <Typography variant="h6" gutterBottom component="div">
                        Ingredientes
                    </Typography>
                    
                    <Autocomplete
                        multiple
                        id="combo-box-demo"
                        options={ListIngredientes}
                        sx={{ width: 300 }}
                        onChange={(event, newValues) => {
                            setSelectedIngredients(newValues);
                        }}
                        renderInput={(params) => <TextField {...params} label="Lista De Ingredientes" />}
                    />
                    <List>
                        <Typography variant='p' gutterBottom component="div">
                            Lista de ingredientes
                        </Typography>
                        {selectedIngredients.map((ingrediente) => (
                            <ListItem key={ingrediente}>{ingrediente}</ListItem>
                        ))}
                    </List>
                </Paper>
                <Paper sx={{padding:1, marginBottom:2 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        Utensilios
                    </Typography>
                    
                    <Autocomplete
                        multiple
                        id="combo-box-demo"
                        options={ListUtensilios}
                        sx={{ width: 300 }}
                        onChange={(event, newValues) => {
                            setSelectedIngredients(newValues);
                        }}
                        renderInput={(params) => <TextField {...params} label="Lista De Utensilios" />}
                    />
                    <List>
                        <Typography variant='p' gutterBottom component="div">
                            Lista de utensilios
                        </Typography>
                        {selectedUtensilios.map((utensilio) => (
                            <ListItem key={utensilio}>{utensilio}</ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid>
        </Grid>
        </div>
        </PageContainer>
    );
    
}

export default CrearReceta;
