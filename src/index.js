// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");
var enviar = 1;
//65074265

bot.create().then((client) => start(client));
if (enviar == 1) {
  function start(client) {
    client.onMessage((message) => {
      let resp = stages.step[getStage(message.from)].obj.execute(
        message.from,
        message.body,
        message.body
      );
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        client.sendText(message.from, element);
      }
    });
  }
} else if (enviar == 2) {
  function start(client) {
    var ContatoEnviar = '5511960644817@c.us';
    var MensagemEnviar = "Dependente";
  client.sendMessageToId(ContatoEnviar, MensagemEnviar);
  }
  //function start(cliente) {
  //cliente.message.from = "5511954337175@c.us";
  //cliente.message.body = "Olá M"
  //cliente.sendText(message.from,"Olá M");

  // }

}

function getStage(user) {
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 6,
      itens: [],
    };
    return banco.db[user].stage;
  }
}
