import { Router } from "express";
const maisRotas = Router();

maisRotas.get('/maisRotas', (req, res) => {
    res.send("<h1>Mais Rotas</h1>")
})

export default maisRotas;