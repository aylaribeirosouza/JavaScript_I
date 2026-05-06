const livros = require('./listadeLivros');
const maiorValor = require('./menorValor'); // Importa a função que ajustamos acima

for (let atual = 0; atual < livros.length; atual++) {
  let maior = maiorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMaiorPreco = livros[maior];

  // Troca os livros de lugar
  livros[atual] = livroMaiorPreco;
  livros[maior] = livroAtual;
}

console.log(livros);

console.log("Trabalho realizado por Ayla Vitória, Nº 5");
