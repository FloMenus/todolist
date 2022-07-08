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
//   test.innerHTML = `<p>${taskCreatorWindow[0]}</p>`
// }



//  OUVERTURE/FERMETURE DES FENETRES ///////////////////////////////

// Declaration des variables correspondantes aux fenetres de création & modification dans le HTML
let taskCreatorWindow = document.getElementsByClassName("task-creator-window")
let taskModifierWindow = document.getElementsByClassName("task-modifier-window")
let taskNameModifier = document.getElementsByClassName("task-name-modifier-window")
let taskPriorityModifier = document.getElementsByClassName("task-priority-modifier-window")
let taskStatusModifier = document.getElementsByClassName("task-status-modifier-window")

// Fonctions de fermeture ou d'ouverture des fenetre de création & modification
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

// CREATION D'UNE VARIABLE INDEX, CELLE CI SERVIRA A INCREMENTER UN ATTRIBUT INDEX AUX OBJETS (TACHES) 

let indexTaskVariable = 0


// CREATION DE TACHES

let taskCreationForm = document.getElementById("task-name-creator-form")
let taskToDoWrapper = document.getElementById("task-to-do-wrapper")

// FONCTION QUI S'EXECUTE LORQUE L'ON SUBMIT UNE CREATION DE TACHE
let onTaskSubmit = (e) => {

    e.preventDefault() //Evite le rafraichissement de la page lors du submit
    let nameTask = document.getElementById("name-task") // On choppe la valeur du nom donnée lors du submit
    var task = {value : nameTask.value ,status:'A faire',priority: 0, indexTask : indexTaskVariable} // on déclare l'objet avec tout ses parametres
    taskWrapper.push(task) // On met cet objet dans le tableau
    taskToDoWrapper.innerHTML= '' // On évite les doublons lors de la création de taches dans le HTML

    // VA PARCOURIR TOUT LE TABLEAU , et a chaque objet du tableau, va incrémenter cet objet dans le HTML
    // Les valeurs sont changées à chaque objet de manière dynamique avec le ${}
    taskWrapper.forEach (task => { 
        taskToDoWrapper.innerHTML +=
    `<div class="task-square statut-${task.status}" id="id-${task.indexTask}">
    <nav class="task-navigation">
        <button onclick="taskModifierWindowOpener(${task.indexTask})" class="modify-task task-button">
            <h6>Modifier</h6>
        </button>
        <button onclick ="taskDelete(${task.indexTask})" id="task-${task.indexTask}" class="delete-task task-button">
            <h6>X</h6>
        </button>
    </nav>
    <h4 class="task-name">${task.value}</h4>
</div>`
// Permet de faire augmenter la variable d'index a chaque fois qu'un objet est soumis
indexTaskVariable+=1
    })
    console.log (taskWrapper)
}
    // C'est ici que le form est "écouté"
    //  et qu'il executera la fonction onTaskSubmit () lorsque on le soumettra
    taskCreationForm.addEventListener("submit",onTaskSubmit)

// SUPPRESSION DE TACHE


let taskDelete = (indexTaskButton) => {

    // Suppression dans le DOM
    let deleteButtonSelector = document.getElementById(`task-${indexTaskButton}`)
    deleteButtonSelector.parentElement.parentNode.remove(deleteButtonSelector)

    // Suppression dans le tableau (la console affiche le tableau de taches lors de la suppression de taches)
    let taskWrapperFilteringDeletion = taskWrapper.filter(function (task)
    {
      return task.indexTask != indexTaskButton
    }
    )

    taskWrapper = taskWrapperFilteringDeletion
    console.log(taskWrapper)
}

// MODIFICATION DE TACHE (A partir de ce moment là c'est work in progress donc j'ai pas commenté)



let taskNameModifierForm = document.getElementById("task-name-modifier-form")

taskNameModifierSubmit = (indexTaskName) => {
    indexTaskName.preventDefault()
    let nameTaskModifier = document.getElementById("name-task-modifer")
    // IDENTIFIER LE BON ELEMENT DU TABLEAU
    // taskFinder = (task) => {
    //     return  taskWrapper.indexOf(task.indexTask = `${indexTask}`)
    //   }


      indexOfTask = taskWrapper.findIndex(task => {
        return task.indexTask = indexTaskName;
      })

      console.log(indexOfTask)

    taskWrapper[indexOfTask].value = nameTaskModifier

    console.log(taskWrapper)
}

taskNameModifierForm.addEventListener("submit",taskNameModifierSubmit)

// FILTRAGE


