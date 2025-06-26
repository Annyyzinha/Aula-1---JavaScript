alert("Comando para mostrar um texto na tela, posso usar aspas duplas ou aspas simples,mas siga este padrão em todo código")

alert("Ele é limitado ao clique no ok pelo usuário")

alert("Não é possível configurar seu tempo de permanência na tela")

let numero = 25;
// Variável para armazenar o chute do usuário
let chute;
let idade;
let nome;
console.log(numero);

let entrada = prompt("Digite um número inteiro:");
numero = parseInt(entrada);

console.log(numero);

if (Number.isInteger(numero)) {
  console.log("Obrigado! Você digitou um inteiro.");
} else {
  console.log("Por favor, digite um número inteiro válido.");
}

alert('Seja bem-vindo ao nosso jogo!');

// Gera um número secreto aleatório entre 1 e 10
let numeroSecreto = 5;
console.log(numeroSecreto); // (Para testes, pode remover depois)

let tentativas = 0; // Inicia o contador de tentativas

while (chute != numeroSecreto) {
  chute = parseInt(prompt('Escolha um número entre 1 e 10'));
  tentativas++; // Soma +1 a cada tentativa

  if (chute == numeroSecreto) {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
  } else if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}. Tente novamente.`);
  } else {
    alert(`O número secreto é maior que ${chute}. Tente novamente.`);
  }
}