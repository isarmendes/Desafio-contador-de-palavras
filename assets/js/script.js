
let palavras = prompt('digite aqui')
let quantidade = palavras.split(" ");
let vazias = 0;
let tamanho = quantidade.length



for (let i = 0; i < tamanho; i++) {
    if (quantidade[i] == '') {
        vazias++
    }
}

let final = tamanho - vazias

console.log("o número de palavras na frase é ", final)