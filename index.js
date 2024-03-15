//Função gerarId(): Esta função gera um ID único. Aqui está o que cada parte faz:
function gerarId() {
//Math.random(): Esta função gera um número aleatório entre 500 (inclusivo) e 10000000(exclusivo).
/*0x10000: Multiplica o número aleatório por 65536 (0x10000 em hexadecimal). Agora, o número aleatório está entre 65536 (inclusivo)
e 131072 (exclusivo).*/
    return Math.floor((500 + Math.random()) * 0x10000000).toString(16).substring(1);
//Math.floor(...): Arredonda o número para baixo para o número inteiro mais próximo.
//.toString(16): Converte o número em uma string hexadecimal.
/*.substring(1): Remove o primeiro caractere da string. Isso é feito porque a conversão
  para hexadecimal pode às vezes resultar em uma string de 5 caracteres, mas queremos apenas 4 caracteres.
  */
}
//Função gerarIds(quantidade): Esta função gera uma quantidade especificada de IDs únicos e os retorna em um array.
function gerarIds(quantidade) {
    var ids = [];
    for (var i = 0; i < quantidade; i++) {
        ids.push(gerarId(10));
    }
    return ids;
}
/*A função aceita um parâmetro quantidade que especifica quantos IDs devem ser gerados.
Um array vazio ids é inicializado para armazenar os IDs gerados.
Um loop for é usado para gerar a quantidade especificada de IDs. Para cada iteração do loop, a função gerarId() 
é chamada para gerar um ID único, que é então adicionado ao array ids.
Finalmente, o array ids é retornado.*/

// Exemplo de uso:
console.log(gerarIds(20)); 
//gerarIds() escolhe a quantidadede Ids que voce quer gerar.

