const solicitacoes = require("../Solicitacoes");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = " Solicitações \n\n";
  banco.db[user].nome = contato;

  Object.keys(solicitacoes.menu).forEach((value) => {
    let element = solicitacoes.menu[value];
    menu += `${value} - ${element.descricao}   \n`;
  });

  banco.db[user].stage = 1;

  return [
    `Olá ${banco.db[user].nome}, como posso lhe ajudar?`,
    menu,
  ];
}

exports.execute = execute;
