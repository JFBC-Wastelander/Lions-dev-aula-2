const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Super Calculadora ===");

rl.question("Operação (+, -, *, /): ", (operation) => {
  rl.question("Primeiro número: ", (input1) => {
    const primeiroValor = parseFloat(input1);

    rl.question("Segundo número: ", (input2) => {
      const segundoValor = parseFloat(input2);
      let resultado;

      if (operation === '+') {
        resultado = primeiroValor + segundoValor;
      } else if (operation === '-') {
        resultado = primeiroValor - segundoValor;
      } else if (operation === '*') {
        resultado = primeiroValor * segundoValor;
      } else if (operation === '/') {
        if (segundoValor === 0) {
          resultado = 'Erro: divisão por zero';
        } else {
          resultado = primeiroValor / segundoValor;
        }
      } else {
        resultado = 'Operação inválida';
      }

      console.log(`\nResultado: ${resultado}`);
      rl.close();
    });
  });
});

rl.on('close', () => process.exit(0));



