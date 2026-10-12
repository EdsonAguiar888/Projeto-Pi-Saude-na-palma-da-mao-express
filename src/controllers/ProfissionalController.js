const profissionalService = require('../services/ProfissionalService');

class ProfissionalController {
  async criar(req, res) {
    try {
      const novoProfissional = await profissionalService.criar(req.body);
      return res.status(201).json(novoProfissional);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const profissionais = await profissionalService.listar();
      return res.json(profissionais);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const profissional = await profissionalService.buscarPorId(id);
      if (!profissional) {
        return res.status(404).json({ mensagem: 'Profissional não encontrado.' });
      }
      return res.json(profissional);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const profissionalAtualizado = await profissionalService.atualizar(id, req.body);
      return res.json(profissionalAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await profissionalService.deletar(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new ProfissionalController();