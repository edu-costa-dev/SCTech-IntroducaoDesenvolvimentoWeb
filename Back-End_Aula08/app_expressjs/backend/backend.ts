import { Router } from "express";
const BackEnd = Router();

BackEnd.get('/BackEnd', (req, res) => {
    res.send("<h1>BackEnd</h1>")
})

export default BackEnd;