//----------------------------------------------------------------------------------------
//1.-Requerir librerías y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBUrl = require('./keys');
const MateriasController = require('./controllers/admin');
//----------------------------------------------------------------------------------------
//2.-Configurar web server y parsee los datos
const app = express();
const port = 5000;
//instruccion para heroku, la asignacion del puerto es dinamico
//var port =process.env.PORT || 5000;
app.use(bodyParser.json());


//----------------------------------------------------------------------------------------
//3.- Definir paths disponibles
app.get('/', (req, res) => {
    res.send('Te quiero, Shooooony, att Tu amigo');
    console.log("request a raiz del server apis----")
});
//Se crea la url a tu eleccion
app.get('/api/materias', MateriasController.ejercicioInq);
app.post('/api/materias', MateriasController.ejercicioAdd);

//----------------------------------------------------------------------------------------
//4.- Encender webserver y dbserver
app.listen(port, () => {
    console.log('Server Inicializado en el puerto: ' + port);
    mongoose.connect(MongoDBUrl.conn, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('The blutud divais has bin conected suksefuli...')
    }, err => { console.log(err) });
});
//----------------------------------------------------------------------------------------