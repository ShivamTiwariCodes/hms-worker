import express from 'express';
import { runWorker } from "./worker"


const app = express();

app.use(express.json());

app.listen(3002, () => {
    console.log("HMS worker server has started");

})

