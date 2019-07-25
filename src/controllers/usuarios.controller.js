import Usuario from "../models/Usuario";
import Equipo from "../models/Equipo";

export const getEquiposUsuarios = async (req, res) => {
  let { equipo_id } = req.params;
  const respuestaFin = await Usuario.findAll({
    where: {id:1},
    include: [{ model: Equipo, required: true, attributes: ["id", "nombre"] }],
    attributes: ["id", "nombre", "equipo_id"],
    order: [
      // Will escape title and validate DESC against a list of valid direction parameters
      ["equipo_id", "ASC"]
    ],
    where: { equipo_id }
  });
  return res.send({ equipos_usuario: respuestaFin });
};
