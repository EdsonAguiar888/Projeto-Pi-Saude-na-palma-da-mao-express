const pacienteService = require('../services/PacienteService');

class PacienteController {
  async criar(req, res) {
    try {
      const novoPaciente = await pacienteService.criar(req.body);
      return res.status(201).json(novoPaciente);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const pacientes = await pacienteService.listar();
      return res.json(pacientes);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const paciente = await pacienteService.buscarPorId(id);
      if (!paciente) {
        return res.status(404).json({ mensagem: 'Paciente não encontrado.' });
      }
      return res.json(paciente);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const pacienteAtualizado = await pacienteService.atualizar(id, req.body);
      return res.json(pacienteAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await pacienteService.deletar(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new PacienteController();