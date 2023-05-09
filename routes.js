import { Router } from "express";
import csvController from "./src/controller/csvController.js";

const routes = Router();

routes.get('/file', csvController.getCsvData);

export default routes;
