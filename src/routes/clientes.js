import { Router } from "express";
import { getOneClient,getClientesEquipoUsuario } from "../controllers/clientes.controller";

const router = Router();

router.get("/:usuario_id", getOneClient);
router.get("/:equipo_id/:usuario_id", getClientesEquipoUsuario);


export default router;
