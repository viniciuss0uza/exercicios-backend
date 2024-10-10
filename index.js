//Baixar node_modules: 'npm i express'
//Para fazer testes:   'npm i jest --save-dev'
//Executar teste no terminal: 'npm test'.
const express = require('express');
const router = require('./src/routes/index'); 


const app = express();
const porta =3000
app.use(express.json());

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})