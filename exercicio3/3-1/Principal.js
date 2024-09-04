"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Pedido_1 = require("./Pedido");
var clienteExemplo = new Cliente_1.Cliente('Lucas', 'lucas@gmail.com');
var pedidoExemplo = new Pedido_1.Pedido(clienteExemplo, 'Notebook', 4500);
console.log(pedidoExemplo.exibirPedido());
