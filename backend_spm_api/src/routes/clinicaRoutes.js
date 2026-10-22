const { Router } = require('express');
const clinicaController = require('../controllers/ClinicaController');

const router = Router();

router.post('/', clinicaController.criar);
router.get('/', clinicaController.listar);
router.get('/:id', clinicaController.buscarPorId);
router.put('/:id', clinicaController.atualizar);
router.delete('/:id', clinicaController.deletar);

module.exports = router;