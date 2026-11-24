// Questão 7: ehPalindromo(texto)
// Receba uma string e retorne true se for um palíndromo, ou false se não for.
// Ignore diferenças entre maiúsculas e minúsculas.

function ehPalindromo(texto) {
  // escreva sua solução aqui
  texto = texto.toLowerCase();

  let invertido = texto.split("").reverse().join("");

  return texto === invertido;
}

// Testes (não altere esta parte)
console.log(ehPalindromo("Arara") === true ? "OK" : "ERRO");
console.log(ehPalindromo("Brasil") === false ? "OK" : "ERRO");
