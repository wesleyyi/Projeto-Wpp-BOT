var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Menu",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Resumo",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Endereço",
    obj: require("./stages/3"),
  },
  4: {
    descricao: "Enceramento",
    obj: require("./stages/4"),
  },
  5: {
    descricao: "Forma de Pagamento",
    obj: require("./stages/5"),
  },
  6: {
    descricao: "Pegar o Nome",
    obj: require("./stages/PegarNome"),
  },
  7: {
    descricao: "Ferias",
    obj: require("./stages/Ferias"),
  },
  8: {
    descricao: "Admissao",
    obj: require("./stages/Admissao"),
  },
  9: {
    descricao: "Afastamento",
    obj: require("./stages/Afastamento"),
  },
  10: {
    descricao: "Salário",
    obj: require("./stages/Salario"),
  },
  11: {
    descricao: "Cargo",
    obj: require("./stages/Cargo"),
  },
  12: {
    descricao: "Centro de Custo",
    obj: require("./stages/Centro_de_Custo"),
  },
  13: {
    descricao: "Buscar Gestor",
    obj: require("./stages/Busca_Gestor"),
  },
  14: {
    descricao: "Escala",
    obj: require("./stages/Escala"),
  },
  15: {
    descricao: "Dependentes",
    obj: require("./stages/Dependentes"),
  },
  16: {
    descricao: "Banco de Horas",
    obj: require("./stages/Banco_Horas"),
  },
};

exports.step = stages;
