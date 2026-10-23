const { Router } = require('express');
const especialidadeController = require('../controllers/EspecialidadeController');

const router = Router();

router.post('/', especialidadeController.criar);
router.get('/', especialidadeController.listar);
router.get('/:id', especialidadeController.buscarPorId);
router.put('/:id', especialidadeController.atualizar);
router.delete('/:id', especialidadeController.deletar);

module.exports = router;