import { Router } from "express";
import csvController from "./src/controller/csvController.js";

const routes = Router();

routes.get('/csv/:csvName', csvController.getParsedCsvData);
routes.post('/writecsv', csvController.getCreateCsvData);

export default routes;
