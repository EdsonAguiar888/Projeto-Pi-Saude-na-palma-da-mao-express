const { EntitySchema } = require('typeorm');

const ClinicaSchema = new EntitySchema({
  name: 'Clinica',
  tableName: 'clinica',
  columns: {
    id_clinica: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },
    nome: {
      type: 'varchar',
      length: 150,
      nullable: false,
    },
    cnpj: {
      type: 'varchar',
      length: 18,
      unique: true,
      nullable: false,
    },
    telefone: {
      type: 'varchar',
      length: 20,
      nullable: true,
    },
    email: {
      type: 'varchar',
      length: 150,
      nullable: true,
    },
    logradouro: {
      type: 'varchar',
      length: 180,
      nullable: true,
    },
    numero: {
      type: 'varchar',
      length: 20,
      nullable: true,
    },
    bairro: {
      type: 'varchar',
      length: 100,
      nullable: true,
    },
    cidade: {
      type: 'varchar',
      length: 100,
      nullable: true,
    },
    estado: {
      type: 'varchar',
      length: 100,
      nullable: true,
    },
    uf: {
      type: 'char',
      length: 2,
      nullable: true,
    },
    ativo: {
      type: 'boolean',
      default: true,
    },
  },
});

module.exports = ClinicaSchema;