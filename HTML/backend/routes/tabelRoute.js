import express from 'express'
import { addRes } from '../controllers/tablecontroller.js';
import multer from 'multer'

const tbRouter = express.Router();

tbRouter.post("/add",addRes);

export default tbRouter;