import  express  from "express";
import { addParcels } from "../controllers/parcelsController.js";

const parcelsRouter = express.Router();

parcelsRouter.post('/', addParcels )

export default parcelsRouter
