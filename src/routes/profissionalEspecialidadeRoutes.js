const { Router } = require('express');
const controller = require('../controllers/ProfissionalEspecialidadeController');

const router = Router();

router.post('/', controller.criar);
router.get('/', controller.listar);
router.get('/:idProfissional/:idEspecialidade', controller.buscarPorId);
router.delete('/:idProfissional/:idEspecialidade', controller.deletar);

module.exports = router;