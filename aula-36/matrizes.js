const arr = [
  "1º Nível",
  ["2º Nível", 42, true],
  ["3º nível", "1º item", "Olá mundo!"],
  ["3º nível", "2º item", "Oi, mundo!"]
]

console.log(arr)
console.log(arr[0])       // "1º Nível"
console.log(arr[1])       // ["2º Nível", 42, true]
console.log(arr[1][0])    // "2º Nível"
console.log(arr[2])       // ["3º nível", "1º item", "Olá mundo!"]
console.log(arr[2][1])    // "1º item"

