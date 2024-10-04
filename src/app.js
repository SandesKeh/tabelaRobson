import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import addCanal from './routes.js';


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

addCanal(servidor);


const port = process.env.port
servidor.listen(port, () => console.log(`API subiu na porta ${port}`));