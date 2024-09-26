const { somar } = require('../service/exercicios')
const { describe, it, export } = require('../@jest/globals')

 describle('Testes da função somar:'), () => {
    it('Somar dois positivos', () => {
        const resultado = somar (1, 2);

        console.log(resultado)
        expect(resultado).toBe(3)
    })

    it('Somar um numero negativo com um positivo', () => {
        const resultado = somar (-1, 0);
        expect(resultado).toBe(-1)

    })
}