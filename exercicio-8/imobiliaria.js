const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo(a) ao cadastro de Imóveis \n" +
      "Total de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção: \n1. Novo imóvel \n2. Listar imóveis \n3. Sair",
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");

      // quartos como número
      imovel.quartos = Number(prompt("Quantos quartos o imóvel possui?"));
      if (isNaN(imovel.quartos) || imovel.quartos <= 0) {
        alert("Valor inválido para quartos!");
        break; // sai do case sem salvar
      }

      // banheiros como número
      imovel.banheiros = Number(prompt("Quantos banheiros o imóvel possui?"));
      if (isNaN(imovel.banheiros) || imovel.banheiros < 0) {
        alert("Valor inválido para banheiros!");
        break;
      }

      // garagem como texto
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imóvel? \n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imovel.garagem,
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Cadastro cancelado.");
      }
      break;

    case "2":
      if (imoveis.length === 0) {
        alert("Nenhum imóvel cadastrado.");
      } else {
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " +
              (i + 1) +
              "\n" +
              "Proprietário: " +
              imoveis[i].proprietario +
              "\nQuartos: " +
              imoveis[i].quartos +
              "\nBanheiros: " +
              imoveis[i].banheiros +
              "\nPossui garagem? " +
              imoveis[i].garagem,
          );
        }
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
