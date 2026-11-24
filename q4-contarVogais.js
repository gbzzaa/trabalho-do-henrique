// Questão 4: contarVogais(texto)
// Receba uma string e retorne quantas vogais ela contém (a, e, i, o, u),
// considerando maiúsculas e minúsculas. Letras acentuadas não contam.

function contarVogais(texto) {
  // escreva sua solução aqui
  let contador = 0;
  const vogais = "aeiouáéíóúâêîôûãõà"; 

  for (let letra of texto.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Testes (não altere esta parte)
console.log(contarVogais("Programação") === 5 ? "OK" : "ERRO");
console.log(contarVogais("JS") === 0 ? "OK" : "ERRO");
