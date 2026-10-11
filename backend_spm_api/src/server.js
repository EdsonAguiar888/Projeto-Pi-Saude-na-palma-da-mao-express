const express = require('express');
const cors = require('cors');
require('dotenv').config();
const AppDataSource = require('./config/database');

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());



// Rota de teste inicial para a API (seguindo o prefixo v1)
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend Projeto_SPM API funcionando com sucesso!' });
});



// Inicializando o Banco de Dados e o Servidor Express
AppDataSource.initialize()
  .then(() => {
    console.log('📦 Conexão com o PostgreSQL estabelecida com sucesso!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Erro durante a inicialização do Data Source:', error);
  });