const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar Elementos
// push
let tamanho = arr.push("Teste");
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

// Remover elementos
// pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift
ultimoElemento = arr.shift(); // corrigido: antes estava escrito "ultimoElemnto"
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por Elementos
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
const hobbits = arr.splice(0, 4);
const outros = arr.splice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituir Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(elementosRemovidos);

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
