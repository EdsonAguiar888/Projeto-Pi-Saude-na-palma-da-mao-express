const { EntitySchema } = require('typeorm');

const ProfissionalClinicaSchema = new EntitySchema({
  name: 'ProfissionalClinica',
  tableName: 'profissional_clinica',
  columns: {
    id_profissional_clinica: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },
    id_profissional: {
      type: 'bigint',
      nullable: false,
    },
    id_clinica: {
      type: 'bigint',
      nullable: false,
    },
    ativo: {
      type: 'boolean',
      default: true,
    },
  },
  relations: {
    profissional: {
      type: 'many-to-one',
      target: 'Profissional',
      joinColumn: { name: 'id_profissional' },
      onDelete: 'RESTRICT',
    },
    clinica: {
      type: 'many-to-one',
      target: 'Clinica',
      joinColumn: { name: 'id_clinica' },
      onDelete: 'RESTRICT',
    },
  },
});

module.exports = ProfissionalClinicaSchema;