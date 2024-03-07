import { Router } from 'express';
import {
    addData,
    upateData,
    getData,
} from "../controllers/data.controller.js"

const router = Router();


// defined all routes for data related component
router.route("/").get(getData);
router.route("/add-data").post(addData);
router.route("/update-data/:id").patch(upateData);

export default router