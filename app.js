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

function list(){

}


function erase(){

}

function quit(){

}



// Ejercicio ultima clase Js-I Censa


// let lista = []

// let numero = parseInt(prompt("introduce el numero de imagenes que quieres"))

// for(let i = 0; i < numero; i++){
//   let mensaje = `Introduce el enlace numero ${i+1}`
//   lista.push(prompt(mensaje))
// }


// let padre = document.getElementById("container")

// for(let enlace of lista){
//   let imagen = document.createElement("img")
//   imagen.src = enlace
//   padre.appendChild(imagen)
// }