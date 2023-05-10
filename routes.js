import { Router } from "express";
import csvController from "./src/controller/csvController.js";

const routes = Router();

routes.get('/', csvController.getParsedCsvData);

export default routes;
