const express = require('express');
const ControllerExercicio = require('../../controller/exercicio')

const router = express.Router();

router.post("/exercicio1/", ControllerExercicio.Somar)
//router.post("/exercicio2/", ControllerExercicio.CalculaSalario)
router.post("/exercicio15/", ControllerExercicio.Triangulo)

// app.post("/exercicio2/", (req, res) => {
//     // http://localhost:3000/exercicio2
//     const num1 = req.body.num1
//     const num2 = req.body.num2

//     const resultado = Number(num1) - Number(num2);

//     res.json({ resultadoPost: resultado })
// })

// app.post("/exercicio3/", (req, res) => {
//     // http://localhost:3000/exercicio2=3

//     const { 
//         num1, 
//         num2, 
//         num3, 
//         num4, 
//         num5 
//     } = req.body

//     const resultado = somar(num1, num2,num3, num4, num5);

//     res.json({ resultadoPost: resultado })
// })

module.exports = router;