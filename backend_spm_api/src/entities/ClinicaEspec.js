const { EntitySchema } = require('typeorm');

const ClinicaEspecSchema = new EntitySchema({
  name: 'ClinicaEspec',
  tableName: 'clinica_especialidade',
  columns: {
    id_clinica: {
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
    clinica: {
      type: 'many-to-one',
      target: 'Clinica',
      joinColumn: { name: 'id_clinica' },
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

module.exports = ClinicaEspecSchema;