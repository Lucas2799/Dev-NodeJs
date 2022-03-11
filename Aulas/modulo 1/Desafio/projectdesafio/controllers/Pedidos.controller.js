import pedidosServices from "../services/pedidos.services.js";

async function AllPedidos(req, res, next) {
    try {
        res.send({ "mostModels": await pedidosServices.AllPedidos()});
    } catch (err) {
        next(err);
    }
}

export default{
    AllPedidos
}