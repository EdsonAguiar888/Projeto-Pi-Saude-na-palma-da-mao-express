const profissionalClinicaService = require('../services/ProfissionalClinicaService');

class ProfissionalClinicaController {
  async criar(req, res) {
    try {
      const novoVinculo = await profissionalClinicaService.criar(req.body);
      return res.status(201).json(novoVinculo);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const vinculos = await profissionalClinicaService.listar();
      return res.json(vinculos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const vinculo = await profissionalClinicaService.buscarPorId(id);
      if (!vinculo) {
        return res.status(404).json({ mensagem: 'Vínculo profissional-clínica não encontrado.' });
      }
      return res.json(vinculo);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const vinculoAtualizado = await profissionalClinicaService.atualizar(id, req.body);
      return res.json(vinculoAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await profissionalClinicaService.deletar(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new ProfissionalClinicaController();