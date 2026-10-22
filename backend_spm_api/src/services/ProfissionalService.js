const AppDataSource = require('../config/database');
const ProfissionalSchema = require('../entities/Profissional');

class ProfissionalService {
  constructor() {
    this.profissionalRepository = AppDataSource.getRepository(ProfissionalSchema);
  }

  async criar(dados) {
    const profissional = this.profissionalRepository.create(dados);
    return await this.profissionalRepository.save(profissional);
  }

  async listar() {
    return await this.profissionalRepository.find({ relations: { usuario: true } });
  }

  async buscarPorId(id) {
    return await this.profissionalRepository.findOne({
      where: { id_profissional: id },
      relations: { usuario: true },
    });
  }

  async atualizar(id, dados) {
    await this.profissionalRepository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    return await this.profissionalRepository.delete(id);
  }
}

module.exports = new ProfissionalService();