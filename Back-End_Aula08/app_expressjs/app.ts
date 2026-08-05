import express from "express";
import clientRouter from "./Router/clientes";
import BackEnd from "./backend/backend";    
import maisRotas from "./maisRotas/maisRotas";
import contTech from "./conteudoDeTecnologia/contTech";


const app = express();

app.use(clientRouter);
app.use(BackEnd);
app.use(maisRotas);
app.use(contTech);


app.listen(3000, () => {
    console.log("Servidor criado...")
})