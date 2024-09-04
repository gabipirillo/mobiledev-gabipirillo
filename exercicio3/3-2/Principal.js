"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Financeiro_1 = require("./Financeiro");
var orcamentoExemplo = new Financeiro_1.Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
console.log(orcamentoExemplo.exibirOrcamento());
var valorComImposto = Financeiro_1.Financeiro.calcularImposto(5000, 0.15);
console.log("Valor com Imposto: R$".concat(valorComImposto.toFixed(2)));
var valorComDesconto = Financeiro_1.Financeiro.calcularDesconto(5000, 0.10);
console.log("Valor com Desconto: R$".concat(valorComDesconto.toFixed(2)));
