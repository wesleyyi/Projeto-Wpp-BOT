const banco = require("../banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 6;
    return ["Solicitação cancelada com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 6;
    return ["Concluído"];
  }


  return ["ABA Salário, Digite # para concluir ou para cancelar digite * "];
}

exports.execute = execute;
