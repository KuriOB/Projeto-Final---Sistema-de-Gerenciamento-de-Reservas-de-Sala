
//cadastro de salas
function cadastro(salaNum, salaDescricao){
    var salaNum = Number(prompt("Informe o número da sua sala"));
    var salaDescricao = prompt("informe uma descrição para sua sala");
    var guardarSala = [salaNum, salaDescricao];

    // Verifica se há um array armazenado no localStorage
var items = localStorage.getItem("items");

// Se não houver um array armazenado, inicializa-o como um array vazio
if (!items) {
    items = [];
} else {
    // Se houver um array armazenado, converte-o de volta para um array JavaScript
    items = JSON.parse(items);
}

// Adiciona um novo item ao array
items.push(guardarSala);

// Salva o array atualizado de volta no localStorage
localStorage.setItem("items", JSON.stringify(items));
console.log(items)

    console.log(guardarSala)
        return guardarSala
       }
    cadastro()
