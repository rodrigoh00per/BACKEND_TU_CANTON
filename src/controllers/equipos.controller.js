import Equipo from "../models/Equipo";

export const getEquipos = async (req, res) => {
  try {
    let equipos = await Equipo.findAll();

    return res.send({  equipos });
  } catch (e) {
    return res
      .status(500)
      .send({ message: "hay un problema con la aplicación" });
  }
};

export const crearEquipo = async (req, res) => {
  let { nombre } = req.body;
  try {
    let nuevoEquipo = await Equipo.create(
      {
        nombre
      },
      { fields: ["nombre"] }
    );

    if (nuevoEquipo) {
      return res.send({
        message: "Equipo creado correctamente",
        data: nuevoEquipo
      });
    }
  } catch (e) {
    return res
      .status(500)
      .send({ message: "hay un problema con la aplicación" });
  }
};


