let menu = ["new", "list", "delete", "quit"]

let opcion = prompt("De la lista de opciones, qué quieres hacer? \n" + menu[0] + '\n' + menu[1] + "\n" + menu[2] + '\n' + menu[3])

let listaInicial = "No tienes tareas por hacer, puedes agregar una nueva"
let list = []


if(opcion=="new"){
  newTask(list)
}

function newTask(lista) {
  let nuevaTarea = prompt("Introduce la nueva tarea");
  lista.push(nuevaTarea)
  console.log(nuevaTarea)
}

// function list(){

// }


// function erase(){

// }

// function quit(){

// }