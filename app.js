const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/static', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/registro.html')
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.listen(PORT, () => {
    console.log('El server esta iniciado en el puerto '+PORT);
})
