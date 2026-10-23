const AppDataSource = require('../config/database');
const EspecialidadeSchema = require('../entities/Especialidade');

class EspecialidadeService {
  constructor() {
    this.especialidadeRepository = AppDataSource.getRepository(EspecialidadeSchema);
  }

  async criar(dados) {
    const especialidade = this.especialidadeRepository.create(dados);
    return await this.especialidadeRepository.save(especialidade);
  }

  async listar() {
    return await this.especialidadeRepository.find();
  }

  async buscarPorId(id) {
    return await this.especialidadeRepository.findOneBy({ id_especialidade: id });
  }

  async atualizar(id, dados) {
    await this.especialidadeRepository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    return await this.especialidadeRepository.delete(id);
  }
}

module.exports = new EspecialidadeService();