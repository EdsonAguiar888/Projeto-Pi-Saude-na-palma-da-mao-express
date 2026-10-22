const clinicaService = require('../services/ClinicaService');

class ClinicaController {
  async criar(req, res) {
    try {
      const novaClinica = await clinicaService.criar(req.body);
      return res.status(201).json(novaClinica);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const clinicas = await clinicaService.listar();
      return res.json(clinicas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const clinica = await clinicaService.buscarPorId(id);
      if (!clinica) {
        return res.status(404).json({ mensagem: 'Clínica não encontrada.' });
      }
      return res.json(clinica);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const clinicaAtualizada = await clinicaService.atualizar(id, req.body);
      return res.json(clinicaAtualizada);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await clinicaService.deletar(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new ClinicaController();