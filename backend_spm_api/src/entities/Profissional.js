const { EntitySchema } = require('typeorm');

const ProfissionalSchema = new EntitySchema({
  name: 'Profissional',
  tableName: 'profissional',
  columns: {
    id_profissional: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },
    id_usuario: {
      type: 'bigint',
      nullable: false,
    },
    cpf: {
      type: 'varchar',
      length: 14,
      unique: true,
      nullable: false,
    },
    conselho: {
      type: 'varchar',
      length: 30,
      nullable: false,
    },
    registro_profissional: {
      type: 'varchar',
      length: 30,
      nullable: false,
    },
    uf_registro: {
      type: 'char',
      length: 2,
      nullable: false,
    },
    ativo: {
      type: 'boolean',
      default: true,
    },
  },
  relations: {
    usuario: {
      type: 'one-to-one',
      target: 'Usuario',
      joinColumn: { name: 'id_usuario' },
      onDelete: 'RESTRICT',
    },
  },
});

module.exports = ProfissionalSchema;