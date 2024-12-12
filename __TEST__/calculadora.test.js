const { somar, subtrair, multiplicar, dividir } = require('../calculadora'); // Ajuste o caminho conforme a estrutura do seu projeto

describe('Testes de Funções da Calculadora', () => {

    test('Deve somar dois números corretamente', () => {
        expect(somar(1, 2)).toBe(3);
        expect(somar(-1, -1)).toBe(-2);
        expect(somar(0, 0)).toBe(0);
    });

    test('Deve subtrair dois números corretamente', () => {
        expect(subtrair(5, 3)).toBe(2);
        expect(subtrair(-5, -3)).toBe(-2);
        expect(subtrair(0, 0)).toBe(0);
    });

    test('Deve multiplicar dois números corretamente', () => {
        expect(multiplicar(2, 3)).toBe(6);
        expect(multiplicar(-2, 3)).toBe(-6);
        expect(multiplicar(0, 5)).toBe(0);
    });

    test('Deve dividir dois números corretamente', () => {
        expect(dividir(6, 3)).toBe(2);
        expect(dividir(-6, 3)).toBe(-2);
        expect(dividir(5, 2)).toBe(2.5);
    });

    test('Deve retornar erro ao dividir por zero', () => {
        expect(dividir(6, 0)).toBe("Erro: divisão por zero");
    });

});
