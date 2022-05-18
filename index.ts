import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/error";
import rateLimit from 'express-rate-limit';

const app = express();

app.use(cors({
        origin: 'http://localhost:3000',
    }));

app.use(json());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
}))


app.get('/', async (req, res) => {
    throw new Error('Daam');
})

app.use(handleError);

app.listen(3001, '0.0.0.0',() => {
    console.log(`Listen on port http://localhost:3001`)
})


