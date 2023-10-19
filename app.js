let menu = ["new", "list", "delete", "quit"]

let list = []

let opcion = prompt("De la lista de opciones, qué quieres hacer? \n" + menu[0] + '\n' + menu[1] + "\n" + menu[2] + '\n' + menu[3])


if (opcion == "new") {

  newTask(list);

} else if (opcion == "list") {

  if (list.length == 0) {

    console.log("No tienes tareas por hacer, puedes agregar una nueva")

  } else {

    showList(list);
  }

} else if (opcion == "delete") {

  deleteTask(list);

} else {

  console.log("bug")

}




function newTask(lista) {
  let nuevaTarea = prompt("Introduce la nueva tarea");
  lista.push(nuevaTarea)
  console.log(nuevaTarea)
}

function showList(lista) {
    console.log("**********")
  for (let tarea of lista) {
    console.log(lista[tarea-1])
  } console.log("**********")
}


function deleteTask(lista){
  if(lista.length == 0){
    console.log("No tienes tareas por hacer, puedes agregar una nueva")
  } else{
    showList(lista)
    let tarea = prompt("Introduce el numero de la tarea que quieres eliminar")
    lista.splice(tarea,1)
  }
}

// function quit(){

// }