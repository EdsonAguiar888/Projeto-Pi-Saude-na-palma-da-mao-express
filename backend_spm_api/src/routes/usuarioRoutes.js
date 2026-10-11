const { Router } = require('express');
const usuarioController = require('../controllers/UsuarioController');

const router = Router();

router.post('/', usuarioController.criar);
router.get('/', usuarioController.listar);
router.get('/:id', usuarioController.buscarPorId);
router.put('/:id', usuarioController.atualizar);
router.delete('/:id', usuarioController.deletar);

module.exports = router;