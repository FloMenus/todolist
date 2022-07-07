// déclaration des variables et constantes







// déclaration des éléments




// événements

// createButton.addEventListener("click", () => {
//   onTaskSubmit("create")
// })

// document.getElementById("create").addEventListener('click',function(e){
//   e.preventDefault(); // Cancel the native event
//   e.stopPropagation();// Don't bubble/capture the event any further
// });

// // fonctions
// const create = document.getElementById('create')

// const createdClicked = () => {
//   create.innerHTML = `<p>création!</p>`
// }

// const test = document.getElementById('test')

// const testClicked = () => {
//   test.innerHTML = `${task}`
// }



// FONCTIONNE!!! 
// const test = document.getElementById('create')

// const onTaskSubmit = () => {
//   create.innerHTML = `<p>test réussi!</p>`
// }
// !!!!

// const task = {
//   name: "comprendre",
//   value: "le",
//   status:"javascript"
// }
// const task = {
//   name: "Etudier",
//   value: "5",
//   status:"En cours"
// }

// const creation = document.getElementById('create')

// const createdClicked = () => {
//   create.innerHTML = `${task.name} ${task.value} ${task.status}`
// }



// const tatonnement = document.getElementById('test')

// const testClicked = () => {
//   test.innerHTML = `<p>test réussi</p>`
// }

//  const titre = document.getElementById('titre')
//   titre.innerHTML = `<h1>Shi-Fu-Mi!!!</h1>`



//  OUVERTURE/FERMETURE DES FENETRES ///////////////////////////////

let taskCreatorWindow = document.getElementsByClassName("task-creator-window")
let taskModifierWindow = document.getElementsByClassName("task-modifier-window")
let taskNameModifier = document.getElementsByClassName("task-name-modifier-window")
let taskPriorityModifier = document.getElementsByClassName("task-priority-modifier-window")
let taskStatusModifier = document.getElementsByClassName("task-status-modifier-window")


taskCreatorWindowOpener = () => {
    taskCreatorWindow[0].classList.remove("hidden")
}
taskCreatorWindowCloser = () => {
    taskCreatorWindow[0].classList.add("hidden")
}

taskModifierWindowOpener = () => {
    taskModifierWindow[0].classList.remove("hidden")
}
taskModifierWindowCloser = () => {
    taskModifierWindow[0].classList.add("hidden")
}


taskNameWindowOpener=()=> {
    taskNameModifier[0].classList.remove("hidden")
}
taskNameWindowCloser=()=> {
    taskNameModifier[0].classList.add("hidden")
}

taskPriorityWindowOpener=()=> {
    taskPriorityModifier[0].classList.remove("hidden")
}
taskPriorityWindowCloser=()=> {
    taskPriorityModifier[0].classList.add("hidden")
}

taskStatusWindowOpener=()=> {
    taskStatusModifier[0].classList.remove("hidden")
}
taskStatusWindowCloser=()=> {
    taskStatusModifier[0].classList.add("hidden")
}

// TABLEAU CONTENANT LES TACHES

let taskWrapper = []


