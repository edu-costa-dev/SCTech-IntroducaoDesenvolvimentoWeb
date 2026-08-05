import { Router } from "express";
const contTech = Router();

contTech.get('/contTech', (req, res) => {
    res.send("<h1>Mais Rotas</h1>")
})

export default contTech;