const readline = require('readline');

// configuração do readline para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funções para as operações
function somar(a,b){
    return a + b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    if(b == 0){return "Erro: divisão por zero";}
    return a / b;
}

// função para exibir o menu e executar a calculadora
function calculadora(){
    console.log("Escolha uma operação:");
    console.log("1: Soma");
    console.log("2: Subtração");
    console.log("3: Multiplicação");
    console.log("4: Divisão");

    rl.question("Digite o número da operação: ",(operacao)=>{
        rl.question("Digite o primeiro número: ", (num1)=>{
            rl.question("Digite o segundo número: ",(num2)=>{
                const numero1 = parseFloat(num1);
                const numero2 = parseFloat(num2);
                let resultado;

                switch(operacao){
                    case '1':
                        resultado = somar(numero1, numero2);
                        break;
                    case '2':
                        resultado = subtrair(numero1, numero2);
                        break;
                    case '3':
                        resultado = multiplicar(numero1, numero2);
                        break;
                    case '4':
                        resultado = dividir(numero1, numero2);
                        break;
                    default:
                        resultado = "Operação inválida!";
                }
                console.log(`Resultado: ${resultado}`);
                rl.close();
            });
        });
    });
}
calculadora();