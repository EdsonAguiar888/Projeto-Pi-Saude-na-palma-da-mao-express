const AppDataSource = require('../config/database');
const ProfissionalClinicaSchema = require('../entities/ProfissionalClinica');

class ProfissionalClinicaService {
  constructor() {
    this.repository = AppDataSource.getRepository(ProfissionalClinicaSchema);
  }

  async criar(dados) {
    const vinculo = this.repository.create(dados);
    return await this.repository.save(vinculo);
  }

  async listar() {
    return await this.repository.find({
      relations: { profissional: true, clinica: true },
    });
  }

  async buscarPorId(id) {
    return await this.repository.findOne({
      where: { id_profissional_clinica: id },
      relations: { profissional: true, clinica: true },
    });
  }

  async atualizar(id, dados) {
    await this.repository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    return await this.repository.delete(id);
  }
}

module.exports = new ProfissionalClinicaService();