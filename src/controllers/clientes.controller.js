import Cliente from "../models/Cliente";
import Usuario from "../models/Usuario";
import Equipo from "../models/Equipo";

export const getOneClient = async (req, res) => {
  const { usuario_id } = req.params;

  const cliente = await Cliente.findOne({ where: { usuario_id } });

  return res.send({ cliente });
};

export const getClientesEquipoUsuario = async (req, res) => {
  let { usuario_id, equipo_id } = req.params;

  const respuestaCliente = await Cliente.findAll({
    where: {
      usuario_id
    },
    include: [
      {
        model: Usuario,
        where: { equipo_id },
        required: true,
        include: [{ model: Equipo }]
      }
    ]
  });

  return res.send({ respuestaCliente });
};
