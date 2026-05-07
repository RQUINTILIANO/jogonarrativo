/**
 *Jogo Narrativo  -  Cara cara
 */
const prompt = require("prompt-sync")();

console.clear()

let jogadores = [];
let jogador1
jogador1 =(prompt ("Jogador 1 ,digite seu nome: "));

let jogador2
jogador2 =(prompt("Jogador2, é a sua vez, digite seu nome: "));

jogadores[0] = jogador1
jogadores[1] = jogador2

console.table(jogadores)

console.log ("Que comece o jogo! Boa sorte") 
console.log(jogadores[0], jogadores[1])

let personagens = [ "Naruto" , "Goku" , "Luffy" , "Gojo" , "Sasuke", "anya"]
let personagem = personagens[Math.floor(Math.random() * 6)]

