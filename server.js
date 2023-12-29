const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '@Eumesmo01',
  database: 'form',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

app.use(bodyParser.json());

app.post('/cadastro', async (req, res) => {
  console.log('Recebendo solicitação de cadastro:', req.body);
  const { nome, email, senha, telefone, sexo, data_nasc } = req.body;

  try {
    // Criptografar a senha antes de armazenar no banco de dados
    const senhaHash = await bcrypt.hash(senha, 10);

    const query = 'INSERT INTO usuarios (nome, email, senha, telefone, sexo, data_nasc) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [nome, email, senhaHash, telefone, sexo, data_nasc], (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
      } else {
        console.log('Usuário cadastrado com sucesso');
        res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
      }
    });
  } catch (error) {
    console.error('Erro ao criptografar senha:', error);
    res.status(500).json({ error: 'Erro ao criptografar senha' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
