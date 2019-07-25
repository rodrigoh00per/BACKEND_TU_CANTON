import express, { json } from "express";
import morgan from "morgan";
import rutasEquipos from "./routes/equipos";
import rutasUsuarios from "./routes/usuarios";
import rutasClientes from "./routes/clientes";

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,token_public_conekta"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );

  next();
});
app.use("/api/equipos", rutasEquipos);
app.use("/api/usuarios", rutasUsuarios);
app.use("/api/clientes", rutasClientes);
/* app.use("/api/clientes", rutasUsuarios); */

export default app;
