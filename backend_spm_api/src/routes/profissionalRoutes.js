const { Router } = require('express');
const profissionalController = require('../controllers/ProfissionalController');

const router = Router();

router.post('/', profissionalController.criar);
router.get('/', profissionalController.listar);
router.get('/:id', profissionalController.buscarPorId);
router.put('/:id', profissionalController.atualizar);
router.delete('/:id', profissionalController.deletar);

module.exports = router;