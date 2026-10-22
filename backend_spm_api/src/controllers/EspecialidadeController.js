const especialidadeService = require('../services/EspecialidadeService');

class EspecialidadeController {
  async criar(req, res) {
    try {
      const novaEspecialidade = await especialidadeService.criar(req.body);
      return res.status(201).json(novaEspecialidade);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const especialidades = await especialidadeService.listar();
      return res.json(especialidades);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const especialidade = await especialidadeService.buscarPorId(id);
      if (!especialidade) {
        return res.status(404).json({ mensagem: 'Especialidade não encontrada.' });
      }
      return res.json(especialidade);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const especialidadeAtualizada = await especialidadeService.atualizar(id, req.body);
      return res.json(especialidadeAtualizada);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await especialidadeService.deletar(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new EspecialidadeController();