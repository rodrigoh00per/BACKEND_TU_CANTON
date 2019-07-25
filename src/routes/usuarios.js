import { Router } from "express";
import { getEquiposUsuarios } from "../controllers/usuarios.controller";
const router = Router();

router.get("/equipos/:equipo_id", getEquiposUsuarios);

export default router;
