import express from "express";
import PedidosController from "../controllers/Pedidos.controller.js"

const router = express.Router();
router.use(express.json());

router.get("/allPedidos", PedidosController.AllPedidos);

router.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;