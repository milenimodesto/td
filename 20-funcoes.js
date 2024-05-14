// Função para calcular a média das avaliações
function calcularMedia(avaliacoes) {
    let soma = 0; // Inicializa a variável "soma" como 0 para armazenar a soma das avaliações
    for (let i = 0; i < avaliacoes.length; i++) { // Loop sobre todas as avaliações no array
        soma += avaliacoes[i]; // Adiciona cada avaliação à soma total
    }
    return soma / avaliacoes.length; // Retorna a média dividindo a soma pelo número total de avaliações
}
// Avaliações do curso
let avaliacoes = [7.8, 9.2, 6.5, 8.1, 7.3];
// Calcula a média arredondada para o número inteiro mais próximo
let mediaArredondada = Math.round(calcularMedia(avaliacoes)); // Chama a função calcularMedia() e arredonda o resultado para o número inteiro mais próximo
console.log("Média arredondada:", mediaArredondada); // Imprime a média arredondada
// Calcula a média arredondada para cima
let mediaArredondadaParaCima = Math.ceil(calcularMedia(avaliacoes)); // Chama a função calcularMedia() e arredonda o resultado para cima
console.log("Média arredondada para cima:", mediaArredondadaParaCima); // Imprime a média arredondada para cima
