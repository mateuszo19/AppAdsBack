import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/error";

const app = express();

app.use(cors({
        origin: 'http://localhost:3000',
    }));

app.get('/', async (req, res) => {
    throw new Error('Daam');
})

app.use(handleError);

app.listen(3001, '0.0.0.0',() => {
    console.log(`Listen on port http://localhost:3001`)
})


