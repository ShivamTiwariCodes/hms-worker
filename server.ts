// import express from 'express';
import { loadCustomHandlers } from './src/utils/customCodeUtil';
import { runWorker } from './src/worker';

// const app = express();

// app.use(express.json());

const hospitalsList: string[] = ['hospital1'];
loadCustomHandlers(hospitalsList);


runWorker().catch((err) => {
    console.error("Worker failed to start:", err);
});

