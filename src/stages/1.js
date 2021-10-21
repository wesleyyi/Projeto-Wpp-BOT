const solicitacoes = require("../Solicitacoes");
const banco = require("../banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 6;
    return ["Atendimento encerrado"];
  }

  /*if (msg === "#") {
    banco.db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }*/

  if (!solicitacoes.menu[msg]) {
    return [
      "Código inválido, digite corretamente",
      "Digite um código válido ou * para finalizar atendimento",
    ];
  }
  banco.db[user].itens.push(solicitacoes.menu[msg]);
  //o valor usado no if se refere a Solicitacoes.js
  if (msg === "1") {
    //stage se refere a tabela stages.js
    banco.db[user].stage = 7;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao } }, ok?`];
  }else if(msg === "2"){
    banco.db[user].stage = 10;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "3"){
    banco.db[user].stage = 9;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "4"){
    banco.db[user].stage = 8;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "5"){
    banco.db[user].stage = 11;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "6"){
    banco.db[user].stage = 12;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "7"){
    banco.db[user].stage = 13;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "8"){
    banco.db[user].stage = 14;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "9"){
    banco.db[user].stage = 15;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }else if(msg === "10"){
    banco.db[user].stage = 16;
    return [`Estamos processando sua solicitação de ${solicitacoes.menu[msg].descricao}, ok?`];
  }

  return [
    `Item(${solicitacoes.menu[msg].descricao}) adiconado com sucesso`,
    "```Digite # para finalizar ou * para cancelar```",
    
  ];
}

exports.execute = execute;
