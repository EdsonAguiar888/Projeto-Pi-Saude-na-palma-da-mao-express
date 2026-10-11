const usuarioService = require('../services/UsuarioService');

class UsuarioController {
  async criar(req, res) {
    try {
      const novoUsuario = await usuarioService.criar(req.body);
      return res.status(201).json(novoUsuario);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const usuarios = await usuarioService.listar();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.buscarPorId(id);
      if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
      }
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const usuarioAtualizado = await usuarioService.atualizar(id, req.body);
      return res.json(usuarioAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await usuarioService.deletar(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new UsuarioController();