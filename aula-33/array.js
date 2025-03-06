const arr =[ "Frodo", "Sam", "Merry", "Pippin","Gandalf", "Aragon", "Legolas", "Gimli"]
console.log (arr)
// Adicionar Elementos
//push

let tamanho = arr.push("Teste")
console.log (arr)
console.log (tamanho)

//unshift
tamanho = arr.unshift("Teste")
console.log (arr)
console.log (tamanho)
//remover elementos
//pop

let ultimoElemento = arr.pop ()
console.log (arr)
console.log (ultimoElemento)

//shift
ultimoElemnto = arr.shift()
console.log(arr)
console.log(ultimoElemento)
//Pesquisar por Elementos
const inclui = arr.includes("Gandalf")
console.log(inclui)
