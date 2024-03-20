//cadastro de salas
function cadastro(salaNum, salaDescricao){
   var salaNum = Number(prompt("informe o número da sala"))
   var salaDescricao = prompt("informe uma descrição para sua sala")
   var guardarSala = [salaNum, salaDescricao];
   
   console.log(guardarSala)
       return guardarSala
      }  
      cadastro()
