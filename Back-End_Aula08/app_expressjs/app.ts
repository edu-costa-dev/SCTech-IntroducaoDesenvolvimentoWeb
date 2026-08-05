import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Rota Inicial</h1>")
})

app.get('/sobrenos', (req, res) => {
    res.send("Rota falando sobre a empresa")
})

app.get('/trabalheConosco', (req, res) => {
    res.send("ROpções de Carreira")
})

app.get('/Contato', (req, res) => {
    res.send("48-9999-9999")
})

app.listen(3000, () => {
    console.log("Servidor criado...")
})