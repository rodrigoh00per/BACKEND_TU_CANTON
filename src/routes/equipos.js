import { Router } from "express";
import { crearEquipo, getEquipos } from "../controllers/equipos.controller";

const router = Router();

router.get("", getEquipos);
router.post("", crearEquipo);

export default router;
