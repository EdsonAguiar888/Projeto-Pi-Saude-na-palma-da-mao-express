const { EntitySchema } = require('typeorm');

const UsuarioSchema = new EntitySchema({
  name: 'Usuario',
  tableName: 'usuario',
  columns: {
    id_usuario: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },
    nome: {
      type: 'varchar',
      length: 150,
      nullable: false,
    },
    email: {
      type: 'varchar',
      length: 150,
      unique: true,
      nullable: false,
    },
    senha_hash: {
      type: 'varchar',
      length: 255,
      nullable: false,
    },
    telefone: {
      type: 'varchar',
      length: 20,
      nullable: true,
    },
    tipo_usuario: {
      type: 'enum',
      enum: ['PACIENTE', 'PROFISSIONAL', 'ADMINISTRADOR'],
      nullable: false,
    },
    ativo: {
      type: 'boolean',
      default: true,
    },
    criado_em: {
      type: 'timestamp',
      createDate: true,
    },
  },
});

module.exports = UsuarioSchema;