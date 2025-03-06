let opcao = "5"
 
do{
    opcao = prompt(
"Seja bem-vindo (a)\n" +
"\nEscolha uma das opções abaixo:" +
"\n1. Opção Um" +
"\n2. Opção Dois" +
"\n3. Opção Tês" +
"\n4. Opção Quatro" +
"\n5. Opção Encerra" 



)

switch (opcao){
case "1":
    alert (" Você escolheu a opção 1")
    break
    case "2":
    alert (" Você escolheu a opção 2")
    break
    case "3":
    alert (" Você escolheu a opção 3")
    break
    case "4":
    alert (" Você escolheu a opção 4")
    break
    case "5":
    alert (" Você escolheu  encerrar.")
    alert("Encerrando...")
    break
    default:
        alert ("Opçâo inválida.")








}



}while(opcao !== "5")