const { EntitySchema } = require('typeorm');

const AgendamentoSchema = new EntitySchema({
  name: 'Agendamento',
  tableName: 'agendamento',
  columns: {
    id_agendamento: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },
    id_paciente: {
      type: 'bigint',
      nullable: false,
    },
    id_profissional_clinica: {
      type: 'bigint',
      nullable: false,
    },
    id_especialidade: {
      type: 'bigint',
      nullable: false,
    },
    data_hora: {
      type: 'timestamp',
      nullable: false,
    },
    status: {
      type: 'enum',
      enum: ['PENDENTE', 'CONFIRMADO', 'CANCELADO', 'CONCLUIDO'],
      nullable: false,
    },
    observacao: {
      type: 'text',
      nullable: true,
    },
    criado_em: {
      type: 'timestamp',
      createDate: true,
    },
  },
  relations: {
    paciente: {
      type: 'many-to-one',
      target: 'Paciente',
      joinColumn: { name: 'id_paciente' },
      onDelete: 'RESTRICT',
    },
    profissionalClinica: {
      type: 'many-to-one',
      target: 'ProfissionalClinica',
      joinColumn: { name: 'id_profissional_clinica' },
      onDelete: 'RESTRICT',
    },
    especialidade: {
      type: 'many-to-one',
      target: 'Especialidade',
      joinColumn: { name: 'id_especialidade' },
      onDelete: 'RESTRICT',
    },
  },
});

module.exports = AgendamentoSchema;