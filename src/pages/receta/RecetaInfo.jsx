import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/receta.css';
import PageContainer from '../../components/container/PageContainer';
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const serverUrl = 'http://localhost:3000';

function RecetaInfo() {
  const [Intrucciones, setInstrucciones] = useState([]);
  const [RecetaInfo, setRecetaInfo] = useState([]);
  const [Valoracion, setValoracion] = useState([]);
  const { id } = useParams();



  
  

useEffect(() => {
    // Realiza la solicitud GET a la API
    axios.get(`${serverUrl}/api/valoracionReceta/${id}`)
        .then((response) => {
            // Actualiza el estado con los datos de la respuesta
            setValoracion(response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}, []); // Asegúrate de incluir `id` en la lista de dependencias

useEffect(() => {
  const body = {receta_id: id}
  axios.post(`${serverUrl}/api/filtrarId`, body)
  
  .then((response) => {
    // Actualiza el estado con los datos de la respuesta
    setRecetaInfo(response.data);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, []);  

useEffect(() => {
  const body = {receta_id: id}
  axios.post(`${serverUrl}/api/filtrarRecetaId`, body)
  
  .then((response) => {
    // Actualiza el estado con los datos de la respuesta
    setInstrucciones(response.data);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, []);  

  return (
    
    <PageContainer title="Vista Recetas" description="aaaaaaaaaaaaaaaaa" >

      <div className='receta-container'>
      <Link to={`/Recetas`}>
      <Button variant="contained" color="primary"  sx={{backgroundColor: 'grey'}}>
        <ArrowBackIosNewIcon/> Volver
      </Button>
      </Link>
      <Grid  container spacing={2} >  
      <Grid item xs={12} md={6} >
      <div className='recetaInfo'>
        {RecetaInfo.map((receta) => (
          <Box sx={{ width: '100%', maxWidth: 700 , marginLeft: 10}}>
            
            <Typography variant="h1" gutterBottom>
            
              {receta.titulo}
              
            </Typography>
            <img src={receta.imagen} alt={receta.titulo} width="520" height="520" style={{border: '2px solid black', borderRadius: '5%'}} />

            
            
          
          
                
          </Box>


        ))}
      </div>
      </Grid>

      <Grid item xs={12} md={6} >
      <div className='InstruccionesInfo'>

      <Typography variant="h1" gutterBottom>
            
           Preparacion
            
          </Typography>

      {RecetaInfo.map((receta) => (
          <Box>
            
            <Typography variant="h3" gutterBottom>
            
              
              
            </Typography>

            <Typography variant="h3" gutterBottom>
                utensilios
            </Typography>
            <Typography variant="body" gutterBottom>
                {receta.utensilio}
            </Typography>


            
            <Box sx={{ width: '100%', maxWidth: 700 }}
            ><Typography variant="h3" gutterBottom>
               Ingredientes
              
            </Typography>
        
            
            
              
            </Box>
            
          
          
                
          </Box>


        ))}

        {Intrucciones.map((instruccion) => (

          

           <Box sx={{ width: '100%', maxWidth: 700 }}>
           
          <Typography variant="h6" gutterBottom>
            Paso a Paso
          </Typography>
          <Typography variant="body" gutterBottom>

            {instruccion.descripcion}

          </Typography>
          <Typography variant="h6" gutterBottom>

            Tips del chef

          </Typography>
          <Typography variant="body2" gutterBottom>

            {instruccion.tip}
          </Typography>  
          
            </Box>      

             
        ))}

      </div>
      </Grid>
      <Grid item xs={6} md={12}>
      <div className='ValoracionInfo'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{backgroundColor: 'black'}}>
            <TableCell sx={{color: 'white'}}>Usuario</TableCell>
            <TableCell  align="right" sx={{color: 'white'}}>Comentario</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Puntuacion</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {Valoracion.map((valoracion) => (
            <TableRow
              key={valoracion.valoracion_id}
              sx={{ '&:last-child td, &:lastchild th': { borderRadius: 10 } }}
            >
              <TableCell component="th" scope="row">
                {valoracion.usuario_id  }
              </TableCell>
              <TableCell align="right">{valoracion.comentario}</TableCell>
              <TableCell align="right">{valoracion.puntuacion}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
      </div>
      </Grid>
      </Grid>
      </div>
    </PageContainer>
  );
}

export default RecetaInfo;