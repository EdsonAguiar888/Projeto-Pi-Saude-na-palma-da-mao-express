const { DataSource } = require('typeorm');
require('dotenv').config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || 'projeto_user',
  password: process.env.DB_PASSWORD || 'projeto_password',
  database: process.env.DB_NAME || 'projeto_db',
  synchronize: true, // Apenas para o desenvolvimento inicial (evita criar migrations manuais agora)
  logging: false,
  entities: [
    // Vamos registrar as entidades aqui conforme formos criando
  ],
  subscribers: [],
  migrations: [],
});

module.exports = AppDataSource;