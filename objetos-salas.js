var salas = [
    {"sala": 01, "data": "02-01-2024", "hora": "09:00 - 10:30"},
    
    {"sala": 03, "data": "06-03-2024", "hora": "12:00 - 13:30"},

    {"sala": 05, "data": "09-05-2024", "hora": "15:00 - 16:00"},
    
    {"sala": 07, "data": "20-06-2024", "hora": "08:00 - 09:00"},
  
    {"sala": 09, "data": "15-04-2024", "hora": "06:00 - 07:00"},
   
    {"sala": 11, "data": "08-10-2024", "hora": "17:00 - 18:30"},
    
    {"sala": 13, "data": "10-12-2024", "hora": "21:00 - 22:30"},
  
    {"sala": 15, "data": "25-08-2024", "hora": "11:00 - 12:30"},
   
    {"sala": 17, "data": "29-07-2024", "hora": "20:00 - 21:30"},
   
    {"sala": 19, "data": "11-06-2024", "hora": "22:00 - 23:30"},
  
   ];





excluirAgendamento(id) {
        let index = this.agendamentos.findIndex(agendamento => agendamento.id === id);
        if (index !== -1) {
            this.agendamentos.splice(index, 1);
            console.log('Sua SALA foi excuida com sucesso')
        } else {
            console.log('Agendamento não encontrado');
        }
    }
