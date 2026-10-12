const { Router } = require('express');
const pacienteController = require('../controllers/PacienteController');

const router = Router();

router.post('/', pacienteController.criar);
router.get('/', pacienteController.listar);
router.get('/:id', pacienteController.buscarPorId);
router.put('/:id', pacienteController.atualizar);
router.delete('/:id', pacienteController.deletar);

module.exports = router;