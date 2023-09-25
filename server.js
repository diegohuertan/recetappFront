const express = require("express");
const path = require('path');
const app = express();
const port = 3003;
const ip = '127.0.0.1';
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'diego123',
  database: 'recetapp_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión a la base de datos establecida');
  });

  app.use(express.json());

app.post('/api/login', (req, res) => {
  const { correo, contraseña, perfil } = req.body;

  connection.query(
    'SELECT COUNT(*) AS count FROM usuarios WHERE correo = ? AND contraseña = ? AND perfil = ?',
    [correo, contraseña, perfil],
    (error, results) => {
      if (error) {
        console.error('Error al realizar la consulta:', error);
        res.json({ success: false, message: 'Error en el servidor' });
      } else {
        const count = results[0].count;
        if (count === 1) {
          res.json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
          res.json({ success: false, message: 'Credenciales de inicio de sesión no válidas' });
        }
      }
    }
  );
});



app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, ip, () =>{
    console.log(`La aplicación está disponible en http://${ip}:${port}`);
})
