/**
 * Jogo Narrativo - Cara Cara
 * Dois jogadores tentam adivinhar personagens através de pistas
 */
const prompt = require("prompt-sync")();

console.clear();

// ========== JOGADORES ==========
let jogadores = [];
let jogador1 = prompt("Jogador 1, digite seu nome: ");
let jogador2 = prompt("Jogador 2, é a sua vez, digite seu nome: ");

jogadores[0] = jogador1;
jogadores[1] = jogador2;

// Pontuação dos jogadores
let pontuacao = [0, 0];

console.table(jogadores);
console.log("\nQue comece o jogo! Boa sorte!");
console.log(jogadores[0], "VS", jogadores[1]);

// ========== PERSONAGENS ==========
let naruto = [
    "Naruto",
    "Sonha em ocupar um cargo muito importante",
    "Possui uma energia poderosa dentro de si",
    "É conhecido pela roupa alaranjada"
];

let goku = [
    "Goku",
    "Adora lutar contra adversários fortes",
    "Já veio de outro planeta",
    "Usa um golpe famoso de energia azul"
];

let luffy = [
    "Luffy",
    "Quer encontrar um grande tesouro",
    "Seu corpo possui habilidades incomuns",
    "Usa um chapéu muito marcante"
];

let gojo = [
    "Gojo",
    "É considerado extremamente poderoso",
    "Costuma esconder os olhos",
    "Trabalha ensinando jovens lutadores"
];

let sasuke = [
    "Sasuke",
    "Busca vingança durante grande parte da história",
    "Possui habilidades visuais muito poderosas",
    "Tem uma forte rivalidade com Naruto"
];

let anya = [
    "Anya",
    "Consegue descobrir segredos sem ninguém perceber",
    "Faz parte de uma família muito incomum",
    "Tem cabelos rosas e personalidade divertida"
];

// ARRAY PRINCIPAL
let personagens = [
    naruto,
    goku,
    luffy,
    gojo,
    sasuke,
    anya
];

// ========== FUNÇÕES ==========

// Função para sortear qual jogador começa
function sortearJogador() {
    return Math.floor(Math.random() * 2);
}

// Função para exibir o menu de personagens
function exibirMenu() {
    console.log("\n===== ESCOLHA UM PERSONAGEM =====");
    for (let i = 0; i < personagens.length; i++) {
        console.log((i + 1) + " - Personagem Mistério");
    }
}

// Função para jogar uma rodada
function jogarRodada() {
    let jogadorAtual = sortearJogador();
    console.log("\n" + jogadores[jogadorAtual] + " é a sua vez de escolher!");
    
    exibirMenu();
    let escolha = parseInt(prompt("Digite o número do personagem (1-6): ")) - 1;
    
    // Validar escolha
    if (escolha < 0 || escolha >= personagens.length) {
        console.log("Escolha inválida!");
        return;
    }
    
    let personagemEscolhido = personagens[escolha];
    console.log("\n🎭 Personagem escolhido! As pistas serão reveladas...\n");
    
    // 3 FASES COM PISTAS
    for (let fase = 1; fase <= 3; fase++) {
        console.log("\n===== FASE " + fase + " =====");
        console.log("Pista: " + personagemEscolhido[fase]);
        
        // Jogador 1 tenta adivinhar
        console.log("\n" + jogadores[0] + ", é a sua vez!");
        let resposta1 = prompt("Quem é o personagem? ");
        if (resposta1.toLowerCase() === personagemEscolhido[0].toLowerCase()) {
            console.log("✓ " + jogadores[0] + " acertou! Ganhou 1 ponto!");
            pontuacao[0]++;
            return true; // Jogo termina
        }
        console.log("✗ Errado! Próximo jogador... 😢");
        
        // Jogador 2 tenta adivinhar
        console.log("\n" + jogadores[1] + ", é a sua vez!");
        let resposta2 = prompt("Quem é o personagem? ");
        if (resposta2.toLowerCase() === personagemEscolhido[0].toLowerCase()) {
            console.log("✓ " + jogadores[1] + " acertou! Ganhou 1 ponto!");
            pontuacao[1]++;
            return true; // Jogo termina
        }
        console.log("✗ Errado! 😢");
        
        if (fase < 3) {
            console.log("\nNinguém acertou... próxima pista!\n");
        }
    }
    
    console.log("Ninguém acertou! O personagem era: " + personagemEscolhido[0]);
    return false;
}

// ========== JOGO PRINCIPAL ==========
console.log("\n🎮 COMEÇANDO O JOGO!\n");
jogarRodada();

// Exibir resultado final
console.log("\n===== RESULTADO FINAL =====");
console.log(jogadores[0] + ": " + pontuacao[0] + " pontos");
console.log(jogadores[1] + ": " + pontuacao[1] + " pontos");

if (pontuacao[0] > pontuacao[1]) {
    console.log("\n🏆 " + jogadores[0] + " venceu! 🏆");
} else if (pontuacao[1] > pontuacao[0]) {
    console.log("\n🏆 " + jogadores[1] + " venceu! 🏆");
} else {
    console.log("\n🤝 Empate!");
}