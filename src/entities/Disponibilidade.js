const { EntitySchema } = require('typeorm');

const DisponibilidadeSchema = new EntitySchema({
  name: 'Disponibilidade',
  tableName: 'disponibilidade',
  columns: {
    id_disponibilidade: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },
    id_profissional_clinica: {
      type: 'bigint',
      nullable: false,
    },
    data_atendimento: {
      type: 'date',
      nullable: false,
    },
    hora_inicio: {
      type: 'time',
      nullable: false,
    },
    hora_fim: {
      type: 'time',
      nullable: false,
    },
    duracao_minutos: {
      type: 'int',
      nullable: false,
    },
    status: {
      type: 'enum',
      enum: ['DISPONIVEL', 'RESERVADO', 'BLOQUEADO'],
      nullable: false,
    },
  },
  relations: {
    profissionalClinica: {
      type: 'many-to-one',
      target: 'ProfissionalClinica',
      joinColumn: { name: 'id_profissional_clinica' },
      onDelete: 'RESTRICT',
    },
  },
});

module.exports = DisponibilidadeSchema;