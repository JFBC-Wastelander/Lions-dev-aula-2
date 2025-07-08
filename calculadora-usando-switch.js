// Importa o módulo readline para ler entrada do usuário
const readline = require('readline');

// Cria a interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Calculadora Simples ===");

// Pergunta qual operação o usuário quer fazer

//! Usar function é a mesma coisa que usar => 
//! Ou seja isso function() { ... } é o mesmo que ( ) => { ... }
 
rl.question("Escolha a operação (+, -, *, /): ", function (operacao) {

  rl.question("Digite o primeiro número: ",  (primeiroTexto) => {
    const primeiroNumero = parseFloat(primeiroTexto);

    rl.question("Digite o segundo número: ",  (segundoTexto) => {
      const segundoNumero = parseFloat(segundoTexto);

      let resultado;

      switch (operacao) {
        case '+':
          resultado = primeiroNumero + segundoNumero;
          break;
        case '-':
          resultado = primeiroNumero - segundoNumero;
          break;
        case '*':
          resultado = primeiroNumero * segundoNumero;
          break;
        case '/':
          if (segundoNumero === 0) {
            resultado = "Erro: divisão por zero!";
          } else {
            resultado = primeiroNumero / segundoNumero;
          }
          break;
        default:
          resultado = "Operação inválida!";
      }

      console.log(`\nResultado: ${resultado}`);

      rl.close();
    });
  });
});
