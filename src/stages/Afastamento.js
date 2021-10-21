const banco = require("../banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 6;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 6;
    return ["Concluído"];
  }


  return ["ABA AFASTAMENTO, Digite # para concluir ou para cancelar digite * "];
}

exports.execute = execute;
