class ServeceExercicio {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) + Number(num2);    
    }
    
    ClculaSalario(valorHora, horasTrabalhadas) {  
        if(isNaN(valorHora) || isNaN(horasTrabalhadas)) {
            throw new Error('Informe um número')
        }
        return valorHora * horasTrabalhadas
    }

    // Primeira forma
    VerificaTriangulos(a, b, c) {
        let resultado
        if ((a + b < c) || (a + c < b) || (b + c < a) ){
            resultado = 'Nao é um triangulo'
        } else if ((a == b) || (a == c)) {
            resultado = 'Equilatero'
        } else if ((a==b) || (a==c) || (b==c)) {
            resultado = 'Isósceles'
        } else {
            resultado = 'Escaleno'
        }
    
        return resultado
    }
    
    // Segunda forma
    VerificaTriangulos2(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a) ){
            return 'Nao é um triangulo'
        } else if ((a == b) || (a == c)) {
            return 'Equilatero'
        } else if ((a==b) || (a==c) || (b==c)) {
            return 'Isósceles'
        } else {
            return 'Escaleno'
        }
    }
}

// // module.exports = somar // Exportando default, uma unica função
// module.exports = ServiceExercicio -> const exercicio = SeviceExercicio
module.exports = new ServeceExercicio()