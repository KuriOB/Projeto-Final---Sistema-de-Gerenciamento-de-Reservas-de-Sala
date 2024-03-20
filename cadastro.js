//cadastro de salas
function cadastro(salaNum, salaDescricao){
    var salaNum = Number(prompt("Informe o número da sua sala"))
    var salaDescricao = prompt("informe uma descrição para sua sala")
    var guardarSala = [salaNum, salaDescricao];
    
    var username = localStorage.getItem("sala");

    // Verifica se há um array armazenado no localStorage
var salaCadastro = localStorage.getItem("cadastros");

// Se não houver um array armazenado, inicializa-o como um array vazio
if (!salaCadastro) {
    items = [];
} else {
    // Se houver um array armazenado, converte-o de volta para um array JavaScript
    items = JSON.parse(salaCadastro);
}

// Adiciona um novo item ao array
items.push(guardarSala);

// Salva o array atualizado de volta no localStorage
localStorage.setItem("cadastros", JSON.stringify(salaCadastro));
console.log(salaCadastro)


    console.log(guardarSala)
        return guardarSala
       }  
       cadastro()
