const livros = require('./listadeLivros');

function maiorValor(arrProdutos, posicaoInicial) {
  let maisCaro = posicaoInicial; 
  
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    // TROCA AQUI: de < para >
    if (arrProdutos[atual].preco > arrProdutos[maisCaro].preco) { 
        maisCaro = atual;
    }
  }
  return maisCaro;
}

module.exports = maiorValor;


