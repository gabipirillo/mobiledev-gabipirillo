// Função que recebe um Produto e uma FormaPagamento
function exibirProdutoComPagamento(produto, pagamento) {
    return "Produto: ".concat(produto.nome, ", Categoria: ").concat(produto.categoria, ", Pre\u00E7o:\n    R$").concat(produto.preco.toFixed(2), ", Forma de Pagamento: ").concat(pagamento, ".");
}
// Exemplo de uso
var produtoExemplo = {
    nome: 'Xbox', preco: 3500, categoria: 'Eletrônicos'
};
var formaPagamentoExemplo = 'pix';
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));
