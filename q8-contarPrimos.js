// Questão 8 (desafio): contarPrimos(n)
// Receba um inteiro n e retorne quantos números primos existem entre 2 e n,
// incluindo n se ele for primo. 0 e 1 não são primos.

function contarPrimos(n) {
  // escreva sua solução aqui
  let contador = 0

  for (let numero = 2; numero <= n; numero++) {
    let primo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
      if (numero % divisor === 0) {
        primo = false;
      }
    }

    if (primo) {
      contador++;
    }
  }

  return contador;
}


// Testes (não altere esta parte)
console.log(contarPrimos(10) === 4 ? "OK" : "ERRO");
console.log(contarPrimos(1) === 0 ? "OK" : "ERRO");
console.log(contarPrimos(30) === 10 ? "OK" : "ERRO");
