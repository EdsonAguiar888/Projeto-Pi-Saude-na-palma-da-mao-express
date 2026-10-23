const { EntitySchema } = require('typeorm');

const PacienteSchema = new EntitySchema({
  name: 'Paciente',
  tableName: 'paciente',
  columns: {
    id_paciente: {
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
    data_nascimento: {
      type: 'date',
      nullable: false,
    },
    sexo: {
      type: 'varchar',
      length: 30,
      nullable: true,
    },
    observacoes: {
      type: 'text',
      nullable: true,
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

module.exports = PacienteSchema;