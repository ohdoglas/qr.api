import { Router } from "express";
import { validateUrl } from "./middlewares/validateUrl";
import { home } from "./controllers/home";
import { QrResponse } from "./controllers/getUrl";

const routes = Router();

routes.get('/', home)
routes.post('/qrgen', validateUrl, QrResponse)

export default routes;