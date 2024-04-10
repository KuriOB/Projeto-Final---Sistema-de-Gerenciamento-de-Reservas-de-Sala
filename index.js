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
var data = prompt('Qual a DATA que você deseja reservar ? \n(formato DD/MM/AAAA)');
var hora = prompt('Qual a HORA que você deseja reservar ? \n(formato HH:MM)');

agendarReserva(numeroSala, data, hora);












var salas = ['1', '2', '3', '4', '5', 
'6', '7', '8', '9', '10', 
'11', '12', '13', '14', '15',
'16', '17', '18', '19', '20'];

// Objeto para armazenar as reservas
var salasReservadas =  [
{"sala": 1, "data": "02-01-2024", "hora": "09:00 - 10:30"},

{"sala": 3, "data": "06-03-2024", "hora": "12:00 - 13:30"},

{"sala": 5, "data": "09-05-2024", "hora": "15:00 - 16:00"},

{"sala": 7, "data": "20-06-2024", "hora": "08:00 - 09:00"},

{"sala": 9, "data": "15-04-2024", "hora": "06:00 - 07:00"},

{"sala": 11, "data": "08-10-2024", "hora": "17:00 - 18:30"}, 

{"sala": 13, "data": "10-12-2024", "hora": "21:00 - 22:30"},

{"sala": 15, "data": "25-08-2024", "hora": "11:00 - 12:30"},

{"sala": 17, "data": "29-07-2024", "hora": "20:00 - 21:30"},

{"sala": 19, "data": "11-06-2024", "hora": "22:00 - 23:30"},

];

// Função para cadastrar uma nova sala
function cadastrarSala() {
var numeroSala = prompt("Informe o número da sala:");
var descricaoSala = prompt("Informe uma breve descrição da sala:");
salas[numeroSala] = descricaoSala;
sessionStorage.setItem('salas', JSON.stringify(salas));
alert("Sala cadastrada com sucesso!");
}

// Função para agendar uma reserva
function agendarReserva() {
// Função para agendar uma nova reserva
var numeroSala = prompt("Informe o número da sala para a reserva:");
var dataReserva = prompt("Informe a data da reserva (formato DD/MM/AAAA):");
var horaReserva = prompt("Informe a hora da reserva (formato HH:MM):");

// Verifica se a sala está disponível
if (salaDisponivel(numeroSala, dataReserva, horaReserva)) {
// Gera um ID único para a reserva
var idReserva = Date.now().toString();
// Armazena a reserva
reservas[idReserva] = {
 numeroSala: numeroSala,
 data: dataReserva,
 hora: horaReserva
};
sessionStorage.setItem('reservas', JSON.stringify(reservas));
alert("Reserva agendada com sucesso! ID da reserva: " + idReserva);
} else {
alert("A sala não está disponível no horário informado.");
}
}
for (var idReserva in salasReservadas) {
var reserva = salasReservadas[idReserva];
if (reserva.numeroSala === salas && reserva.data === data && reserva.hora === hora) {
console.log("Sala não está disponível")
}else

console.log("Sala está disponível")
}

// Função para visualizar agendamentos
function visualizarAgendamentos() {
console.log("Essas são as reservas ", salasReservadas)
}

// Função para gerenciar agendamentos
function gerenciarAgendamentos() {
// Função para buscar um agendamento pelo ID
var idReserva = prompt("Informe o ID da reserva:");
if (reservas[idReserva]) {
console.log("Agendamento encontrado:", reservas[idReserva]);
} else {
alert("Agendamento não encontrado.");
}
}
// Função para editar um agendamento

var idReserva = prompt("Informe o ID da reserva que deseja editar:");
if (reservas[idReserva]) {
var novaSala = prompt("Informe o novo número da sala (deixe em branco para não alterar):");
var novaData = prompt("Informe a nova data da reserva (formato DD/MM/AAAA, deixe em branco para não alterar):");
var novaHora = prompt("Informe a nova hora da reserva (formato HH:MM, deixe em branco para não alterar):");

// Atualiza somente os campos que o usuário deseja alterar
reservas[idReserva].numeroSala = novaSala || reservas[idReserva].numeroSala;
reservas[idReserva].data = novaData || reservas[idReserva].data;
reservas[idReserva].hora = novaHora || reservas[idReserva].hora;

sessionStorage.setItem('reservas', JSON.stringify(reservas));
alert("Agendamento editado com sucesso!");
} else {
alert("Agendamento não encontrado.");
}




// Função para excluir um agendamento
function excluirAgendamento(idReserva) {
// Encontra o índice do agendamento com o ID fornecido
const index = listaDeAgendamentos.findIndex(agendamento => agendamento.id === id);

// Se encontrou o agendamento com o ID fornecido, exclui-o
if (index !== -1) {
 listaDeAgendamentos.splice(index, 1);
 console.log(`Agendamento com ID ${id} excluído com sucesso.`);
} else {
 console.log(`Agendamento com ID ${id} não encontrado.`);
}
}

// Exemplo de uso da função excluirAgendamento
console.log("Antes da exclusão:");
console.log(listaDeAgendamentos);

excluirAgendamento(2);

console.log("Após a exclusão:");
console.log(listaDeAgendamentos);





// Função para excluir um agendamento
/* 
var idReserva = prompt("Informe o ID da reserva que deseja excluir:");
if (reservas[idReserva]) {
delete reservas[idReserva];
sessionStorage.setItem('reservas', JSON.stringify(reservas));
alert("Agendamento excluído com sucesso!");
} else {
alert("Agendamento não encontrado.");
}
}
 */


// Função principal que apresenta o menu de opções
function menuPrincipal() {
while (true) {
var opcao = prompt("Escolha uma opção:\n1. Cadastrar Sala\n2. Agendar Reserva\n3. Visualizar Agendamentos\n4. Gerenciar Agendamentos\n5. Sair");
switch (opcao) {
case '1':
 cadastrarSala();
 break;
case '2':
 agendarReserva();
 break;
case '3':
 visualizarAgendamentos();
 break;
case '4':
 gerenciarAgendamentos();
 break;
case '5':
 alert("Saindo do sistema de reservas.");
 return;
default:
 alert("Opção inválida. Tente novamente.");
}
}
}

// Iniciar o programa
menuPrincipal();


