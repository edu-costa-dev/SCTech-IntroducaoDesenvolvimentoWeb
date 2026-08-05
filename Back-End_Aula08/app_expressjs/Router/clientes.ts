import { Router } from "express";
import clientsController from "../Controller/clientsController";
const router = Router();

router.get('/', clientsController.index)

router.get('/sobrenos', (req, res) => {
    res.send("Rota falando sobre a empresa")
})

router.get('/trabalheConosco', (req, res) => {
    res.send("Opções de Carreira")
})

router.get('/Contato', (req, res) => {
    res.send("48-9999-9999")
})

export default router;