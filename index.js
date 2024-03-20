/* function agendamentoDeReservas(sala,numero,data,hora){
    while (sala) {
       prompt("Digite o id da sala");
    }
}
    console.log(agendamentoDeReservas()); */

var id = prompt("Digite o id da sala");
var data = prompt("Digite a data que vc queira reservar");
var hora = prompt("Digite a hora que deseja reservar");

console.log(id);
console.log(data);
console.log(hora);
//Função gerarId(): Esta função gera um ID único. Aqui está o que cada parte faz:
function gerarId() {
//Math.random(): Esta função gera um número aleatório entre 500 (inclusivo) e 1000(exclusivo).
/*0x10000: Multiplica o número aleatório por 65536 (0x10000 em hexadecimal). Agora, o número aleatório está entre 65536 (inclusivo)
e 131072 (exclusivo).*/
     return Math.floor((500 + Math.random()) * 0x10000).toString(8).substring(1);
//Math.floor(...): Arredonda o número para baixo para o número inteiro mais próximo.
//.toString(16): Converte o número em uma string hexadecimal.
/*.substring(1): Remove o primeiro caractere da string. Isso é feito porque a conversão
  para hexadecimal pode às vezes resultar em uma string de 5 caracteres, mas queremos só 4 caracteres.
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

function buscarId(id, ids) {
    return ids.indexOf(id);
}

/*A função aceita um parâmetro quantidade que especifica quantos IDs devem ser gerados.
Um array vazio ids é inicializado para armazenar os IDs gerados.
Um loop for é usado para gerar a quantidade especificada de IDs. Para cada iteração do loop, a função gerarId() 
é chamada para gerar um ID único, que é então adicionado ao array ids.
Finalmente, o array ids é retornado.*/

var ids = gerarIds(20); 
console.log(ids);

//Procurar o ID gerado
function buscarId(id, ids) {
    return ids.indexOf(id);
//Pede ao usuário o ID e retorna o indice que ele se encontra no array
var idParaBuscar = prompt("Digite o ID que deseja buscar:"); // Solicita ao usuário que digite um ID
var indice = buscarId(idParaBuscar, ids);

if (indice !== -1) {
    alert('ID encontrado no índice: ' + indice);
} else {
    alert('ID não encontrado');
}



