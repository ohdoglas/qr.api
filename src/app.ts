import 'dotenv/config';
import express, { Application} from 'express';
import routes from './routes';
import path from 'path';


const app: Application = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/data')));
app.use(routes);

export default app;