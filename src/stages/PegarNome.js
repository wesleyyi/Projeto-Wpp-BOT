const cardapio = require("../Solicitacoes");
const banco = require("../banco");

function execute(user, msg, contato) {
  

  banco.db[user].stage = 0;

  return [
    `Olá sou um assistente virtual, irei lhe auxiliar por aqui, para começarmos me diga seu nome`,
  ];
}

exports.execute = execute;
