import express from "express";
import PedidosController from "../controllers/pedidos.controller.js"

const router = express.Router();
router.use(express.json());

router.get("/AllPedidos", PedidosController.AllPedidos);

router.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;