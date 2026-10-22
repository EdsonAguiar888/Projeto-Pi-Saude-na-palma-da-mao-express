const AppDataSource = require('../config/database');
const ProfissionalEspecialidadeSchema = require('../entities/ProfissionalEspecialidade');

class ProfissionalEspecialidadeService {
  constructor() {
    this.repository = AppDataSource.getRepository(ProfissionalEspecialidadeSchema);
  }

  async criar(dados) {
    const vinculo = this.repository.create(dados);
    return await this.repository.save(vinculo);
  }

  async listar() {
    return await this.repository.find({
      relations: { profissional: true, especialidade: true },
    });
  }

  async buscarPorChaveComposta(idProfissional, idEspecialidade) {
    return await this.repository.findOne({
      where: {
        id_profissional: idProfissional,
        id_especialidade: idEspecialidade,
      },
      relations: { profissional: true, especialidade: true },
    });
  }

  async deletar(idProfissional, idEspecialidade) {
    return await this.repository.delete({
      id_profissional: idProfissional,
      id_especialidade: idEspecialidade,
    });
  }
}

module.exports = new ProfissionalEspecialidadeService();