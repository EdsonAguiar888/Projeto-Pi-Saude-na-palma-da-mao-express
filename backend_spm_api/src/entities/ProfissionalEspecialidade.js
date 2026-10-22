const { EntitySchema } = require('typeorm');

const ProfissionalEspecialidadeSchema = new EntitySchema({
  name: 'ProfissionalEspecialidade',
  tableName: 'profissional_especialidade',
  columns: {
    id_profissional: {
      type: 'bigint',
      primary: true,
      nullable: false,
    },
    id_especialidade: {
      type: 'bigint',
      primary: true,
      nullable: false,
    },
  },
  relations: {
    profissional: {
      type: 'many-to-one',
      target: 'Profissional',
      joinColumn: { name: 'id_profissional' },
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

module.exports = ProfissionalEspecialidadeSchema;