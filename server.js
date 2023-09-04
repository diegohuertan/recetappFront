const express = require("express");
const path = require('path');
const app = express();
const port = 3003;
const ip = '127.0.0.1';



app.use(express.static(path.join(__dirname, 'build')));


app.listen(port, ip, () =>{
    console.log(`La aplicación está disponible en http://${ip}:${port}`);
})
