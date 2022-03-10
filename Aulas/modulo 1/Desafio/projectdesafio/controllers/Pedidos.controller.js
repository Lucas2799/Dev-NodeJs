import PedidosService from "../services/Pedidos.service.js"

async function AllPedidos(req, res, next) {
    try {
        res.send({ "mostModels": await PedidosService.AllPedidos() });
    } catch (err) {
        next(err);
    }
}

export default{
    AllPedidos
}