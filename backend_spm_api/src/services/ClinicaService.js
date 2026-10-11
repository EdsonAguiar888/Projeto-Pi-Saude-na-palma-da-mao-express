const AppDataSource = require('../config/database');
const ClinicaSchema = require('../entities/Clinica');

class ClinicaService {
  constructor() {
    this.clinicaRepository = AppDataSource.getRepository(ClinicaSchema);
  }

  async criar(dados) {
    const clinica = this.clinicaRepository.create(dados);
    return await this.clinicaRepository.save(clinica);
  }

  async listar() {
    return await this.clinicaRepository.find();
  }

  async buscarPorId(id) {
    return await this.clinicaRepository.findOneBy({ id_clinica: id });
  }

  async atualizar(id, dados) {
    await this.clinicaRepository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    return await this.clinicaRepository.delete(id);
  }
}

module.exports = new ClinicaService();