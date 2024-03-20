 var ids = ['75054533', '75125254', '75174335', '75036766', '75022423', 
            '75106113', '75104045', '75032431', '75056152', '75110146', 
            '75167115', '75117201', '75062507', '75043635', '75126476',
            '75023411', '75137576', '75127231', '75103353', '75023371'];


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
        ids.push(gerarId(1));
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

// atualizaçao cadastro 

/*  var ids = [ '75054533', '75125254', '75174335', '75036766', '75022423', 
            '75106113', '75104045', '75032431', '75056152', '75110146', 
            '75167115', '75117201', '75062507', '75043635', '75126476',
            '75023411', '75137576', '75127231', '75103353', '75023371']; */

   
   
   
   // Função para agendar uma reserva
   function agendarReserva(numeroSala, data, hora) {
    // Verificar se a sala está disponível no horário desejado
    if (verificarDisponibilidade(numeroSala, data, hora)) {
        // Criar um objeto reserva
        var reserva = {
            sala: numeroSala,
            data: data,
            hora: hora
        };

        // Armazenar a reserva na sessão do navegador
        var reservasAgendadas = JSON.parse(sessionStorage.getItem('reservas')) || [];
        reservasAgendadas.push(reserva);
        sessionStorage.setItem('reservas', JSON.stringify(reservasAgendadas));

        console.log('Reserva agendada com sucesso:', reserva);
        return true;
    } else {
        console.log('Desculpe, a sala não está disponível neste horário.');
        return false;
    }
}

// Função para verificar a disponibilidade da sala
function verificarDisponibilidade(numeroSala, data, hora) {
    // Aqui você pode implementar a lógica para verificar se a sala está disponível na data e hora especificadas
    // Por exemplo, você pode consultar um banco de dados ou outra fonte de dados para verificar reservas existentes

    // Neste exemplo simples, vamos supor que a sala está sempre disponível
    return true;
}

// Exemplo de uso
var numeroSala = prompt('Qual o NÚMERO da sua SALA ?');
var data = prompt('Qual a DATA que você deseja reservar ?');
var hora = prompt('Qual a HORA que você deseja reservar ?');

agendarReserva(numeroSala, data, hora);



