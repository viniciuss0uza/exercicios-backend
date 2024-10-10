const ServiceExercicio = require('../service/exercicio')

class ControllerExercicio {
    Somar(req, res) {
        // http://localhost:3000/exercicio1
        try {
            const resultado = ServiceExercicio.Somar(req.body.num1, req.body.num2);
            //Informar status diferente de 200 (pesquisar sobre)
            res.status(201).json({ resultadoPost: resultado })
        } catch (e) {
            //console.error(e)
            res.status(500).json({msg: e.message })
        }   
    }

    CalcularSalario(req, res) {
        try {
            const { salarioHora, horasTrabalhadas } = req.body
            // const salarioHora = req.body.salarioHora
            // const horasTrabalhadas = req.body.horasTrabalhadas
            const resultado = ServiceExercicio
                .CalcularSalario(salarioHora, horasTrabalhadas)

            res.status(201).json({ msg: "resultado" })
        } catch (error) {
            res.status(422).json({ msg: error.message })
        }
    }

    Triangulo(req, res)  {
        // http://localhost:3000/exercicio15
        try {
            const { a, b, c } = req.body
            const resultado = ServiceExercicio.VerificaTriangulos(a,b,c)
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
}
module.exports = new ControllerExercicio();