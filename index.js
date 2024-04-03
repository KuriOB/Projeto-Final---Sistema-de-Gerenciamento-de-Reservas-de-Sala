 var ids = ['01', '02', '03', '04', '05', 
       '06', '07', '08', '09', '10', 
       '11', '12', '13', '14', '15',
       '16', '17', '18', '19', '20'];

//Procurar o ID gerado
function buscarId(id, ids) {
return ids.indexOf(id);
}
//Pede ao usuário o ID e retorna o indice que ele se encontra no array
var idParaBuscar = prompt("Digite o ID que deseja buscar:"); // Solicita ao usuário que digite um ID
var indice = buscarId(idParaBuscar, ids);

if (indice !== -1) {
alert('ID encontrado no índice: ' + indice);
} else {
alert('ID não encontrado');
}

// atualizaçao cadastro 

/*  var ids = [ '01', '02', '03', '04', '05', 
       '06', '07', '08', '09', '10', 
       '11', '12', '13', '14', '15',
       '16', '17', '18', '19', '20']; */




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





