
const resultado = prompt ("Escolha uma alternativa:\na)\nb)\nc)")

const resultadoNumerico =parseFloat (resultado)

switch (resultadoNumerico){
    
    case "1" :
        alert (" O resultado é '1'")
        break
        case "2" :
            alert("O resultado é '2'")
            break
            case "3" :
                alert ("O resultado é '3'")
                break
                default:
                    alert("Finalizado...")
}