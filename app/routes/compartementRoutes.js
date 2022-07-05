import express from 'express'
import { addCompartement, getCompartements } from "../controllers/compartementController.js";


const compartementRouter = express.Router();

compartementRouter.get('/', getCompartements)

compartementRouter.post('/', addCompartement)

export default compartementRouter