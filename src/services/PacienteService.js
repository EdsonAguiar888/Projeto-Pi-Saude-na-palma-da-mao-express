const AppDataSource = require('../config/database');
const PacienteSchema = require('../entities/Paciente');

class PacienteService {
  constructor() {
    this.pacienteRepository = AppDataSource.getRepository(PacienteSchema);
  }

  async criar(dados) {
    const paciente = this.pacienteRepository.create(dados);
    return await this.pacienteRepository.save(paciente);
  }

  async listar() {
    // Corrigido para a nova sintaxe de objeto do TypeORM
    return await this.pacienteRepository.find({ relations: { usuario: true } });
  }

  async buscarPorId(id) {
    return await this.pacienteRepository.findOne({
      where: { id_paciente: id },
      relations: { usuario: true }, // Corrigido para a nova sintaxe de objeto
    });
  }

  async atualizar(id, dados) {
    await this.pacienteRepository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    return await this.pacienteRepository.delete(id);
  }
}

module.exports = new PacienteService();