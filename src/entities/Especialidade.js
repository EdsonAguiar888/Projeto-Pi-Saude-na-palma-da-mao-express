const { EntitySchema } = require('typeorm');

const EspecialidadeSchema = new EntitySchema({
  name: 'Especialidade',
  tableName: 'especialidade',
  columns: {
    id_especialidade: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },
    nome: {
      type: 'varchar',
      length: 100,
      unique: true,
      nullable: false,
    },
    descricao: {
      type: 'text',
      nullable: true,
    },
    ativo: {
      type: 'boolean',
      default: true,
    },
  },
});

module.exports = EspecialidadeSchema;