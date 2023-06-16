const express = require('express'); // imports en node js sin ninguna configuracion
const app = express();

//Usuarios
const { getUsers, createUser, login } = require('./controllers/user.controller')

//Catalogo
const { getCatalog, getCatalogID } = require('./controllers/catalog.controllers')


const mongoose = require('mongoose');
const cors = require('cors') // importamos cors');
require('dotenv').config() 
const port = process.env.PORT || 3000; 

// config para recibir info
app.use(express.json()) 
app.use(cors());

// Con Promise se puede trabajar con then y con catch
mongoose.connect(process.env.HOSTDB).then(() => {
    console.log('Conexion a MongoDB');
}).catch((error) => {
    console.log(error);
})

app.get('/user', getUsers);
app.post('/user', createUser);
app.post('/user/login', login);

app.get('/catalog', getCatalog);
app.get('/catalog/:id', getCatalogID);

// servidor
app.listen(port, () => { // levanta el servidor
    console.log('Servidor funcionando en el puerto: ' + port)
});
