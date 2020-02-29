const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
const port = 3000;

const multiPartMiddleware = multipart({
    uploadDir: '/subidas'
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

//EndPoint
app.post('/api/subir', multiPartMiddleware, (req, res) => {
    res.json({
        'message': 'Fichero subido correctamente'
    });
});

app.get('/', (req, res) => {
    res.send('Hola Mundo')
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})