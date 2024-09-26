//Baixar node_modules: 'npm i express'
//Para fazer testes:   'npm i jest --save-dev'
//Executar teste no terminal: 'npm test'.
const express = require('express');
const { 
    somar, 
    sub, 
    mult, 
    div 
} = require ('./exercicios')

const app = express();
const porta =3000
app.use(express.json());

//Metodo GET
app.get("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2);

    res.json({ resultadoGet: resultado })
})

app.get("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) - Number(num2);

    res.json({ resultadoGet: resultado })
})
//Metodo post
app.post("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1
    const num1 = req.body.num1
    const num2 = req.body.num2
    //se deu errado: console.log(num1, num2);

    const resultado = Number(num1) + Number(num2);
  
    res.json({ resultadoPost: resultado })
})

app.post("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2
    const num1 = req.body.num1
    const num2 = req.  body.num2

    const resultado = Number(num1) - Number(num2);

    res.json({ resultadoPost: resultado })
})

app.post("/exercicio3/", (req, res) => {
    // http://localhost:3000/exercicio2=3

    const { 
        num1, 
        num2, 
        num3, 
        num4, 
        num5 
    } = req.body

    // const { peso } = req.body;

    //----------Tudo errado-----------
    // if (peso && !isNaN(peso)) {
    //     pesos.push(parseFloat(peso));
    //   }

    //   if (pesos.length === 5) {
    //     const totalPeso = pesos.reduce((acc, curr) => acc + curr, 0);
    //     const media = totalPeso / pesos.length;

    // const solicitarPeso = () =>

    const resultado = somar(num1, num2,num3, num4, num5);

    res.json({ resultadoPost: resultado })
})

app.post("/exercicio15/", (req, res) => {
    // http://localhost:3000/exercicio15
    const { a, b, c } = req.body
    const resultado = verificaTriangulos2(a,b,c)
    res.status(201).json({ resultado })
})
app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})

