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

// Fonctions de fermeture ou d'ouverture des fenetre de création & modification
taskCreatorWindowOpener = () => {
    taskCreatorWindow[0].classList.remove("hidden")
}
taskCreatorWindowCloser = () => {
    taskCreatorWindow[0].classList.add("hidden")
}

// taskModifierWindowOpener = () => {
//     taskModifierWindow[0].classList.remove("hidden")
// }
taskModifierWindowCloser = () => {
    taskModifierWindow[0].classList.add("hidden")
}




// TABLEAU CONTENANT LES TACHES

let taskWrapper = []

// CREATION D'UNE VARIABLE INDEX, CELLE CI SERVIRA A INCREMENTER UN ATTRIBUT INDEX AUX OBJETS (TACHES) 

let indexTaskVariable = 0


// CREATION DE TACHES



let taskCreationForm = document.getElementById("task-name-creator-form")
let taskToDoWrapper = document.getElementById("task-to-do-wrapper")
let taskInProgressWrapper = document.getElementById("task-in-progress-wrapper")
let taskDoneWrapper = document.getElementById("task-done-wrapper")

let taskFilteredToDo = []
let taskFilteredinProgress = []
let taskFilteredDone = []

// FONCTION QUI S'EXECUTE LORQUE L'ON SUBMIT UNE CREATION DE TACHE
let onTaskSubmit = (e) => {

    e.preventDefault() //Evite le rafraichissement de la page lors du submit
    let nameTask = document.getElementById("name-task") // On choppe la valeur du nom donnée lors du submit
    var task = { value: nameTask.value, status: 'A faire', priority: 0, indexTask: indexTaskVariable } // on déclare l'objet avec tout ses parametres
    taskWrapper.push(task) // On met cet objet dans le tableau
    taskToDoWrapper.innerHTML = '' // On évite les doublons lors de la création de taches dans le HTML

    // VA PARCOURIR TOUT LE TABLEAU , et a chaque objet du tableau, va incrémenter cet objet dans le HTML
    // Les valeurs sont changées à chaque objet de manière dynamique avec le ${}
    taskWrapper.forEach(task => {
        taskToDoWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    })
    indexTaskVariable += 1
    console.table (taskWrapper)
    taskCreatorWindowCloser()
}
// C'est ici que le form est "écouté"
//  et qu'il executera la fonction onTaskSubmit () lorsque on le soumettra
taskCreationForm.addEventListener("submit", onTaskSubmit)

// SUPPRESSION DE TACHE


let taskDelete = (indexTaskButton) => {

    // Suppression dans le DOM
    let deleteButtonSelector = document.getElementById(`task-${indexTaskButton}`)
    deleteButtonSelector.parentElement.parentNode.remove(deleteButtonSelector)

    // Suppression dans le tableau (la console affiche le tableau de taches lors de la suppression de taches)
    let taskWrapperFilteringDeletion = taskWrapper.filter(function (task) {
        return task.indexTask != indexTaskButton
    }
    )
    indexTaskVariable = 1
    taskWrapper = taskWrapperFilteringDeletion
}

// MODIFICATION DE TACHE //////////////////////////////////////

let concernedTask

let taskNameModifierForm = document.getElementById("task-name-modifier-form")

taskModifierWindowOpener = (index) => {
    taskModifierWindow[0].classList.remove("hidden")
    console.log(concernedTask)
    concernedTask = index
    console.log (index)

}

// MODIFICATION DE NOMS

let nameTaskModifierForm = document.getElementById("task-name-modifier-form")

nameTaskModifier = (i) => {
    let taskNameModified = document.getElementById("name-task-modifier")
    i.preventDefault()

    taskWrapper[concernedTask].value = taskNameModified.value


    taskToDoWrapper.innerHTML = ""
    console.log (taskToDoWrapper)
    taskWrapper.forEach(task => {
        taskToDoWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    console.log (taskWrapper)
    })
}
nameTaskModifierForm.addEventListener("submit", nameTaskModifier)


// MODIFICATION DE STATUS

let statusTaskModifierForm = document.getElementById("task-status-modifier-form")

let statusToDoRadio = document.getElementById("status-todo-radio")
let statusInProgressRadio = document.getElementById("status-inprogress-radio")
let statusDoneRadio = document.getElementById("status-done-radio")

statusTaskModifier = (e) => {
    e.preventDefault()

    if (statusToDoRadio.checked) {
        taskWrapper[concernedTask].status = statusToDoRadio.value
        
    }
    else if (statusInProgressRadio.checked) {
        taskWrapper[concernedTask].status = statusInProgressRadio.value
    }
    else if (statusDoneRadio.checked) {
        taskWrapper[concernedTask].status = statusDoneRadio.value
    }


    taskToDoWrapper.innerHTML = ''

    taskFilteredToDo.forEach(task => {
        taskToDoWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    })

    taskInProgressWrapper.innerHTML = ''

    taskFilteredInProgress.forEach(task => {
        taskInProgressWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    })

    taskDoneWrapper.innerHTML = ''

    taskFilteredDone.forEach(task => {
        taskDoneWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    })
}
statusTaskModifierForm.addEventListener("submit", statusTaskModifier)

// MODIFICATION DE PRIORITÉ

let priorityTaskModifierForm = document.getElementById("task-priority-modifier-form")

let priorityOneRadio = document.getElementById("priority-1-radio")
let priorityTwoRadio = document.getElementById("priority-2-radio")
let priorityThreeRadio = document.getElementById("priority-3-radio")
let priorityFourRadio = document.getElementById("priority-4-radio")
let priorityFiveRadio = document.getElementById("priority-5-radio")
let priorityZeroRadio = document.getElementById("priority-0-radio")

priorityTaskModifier = (e) => {
    e.preventDefault()


    console.log(concernedTask)
    if (priorityOneRadio.checked) {
        taskWrapper[concernedTask].priority = Number(priorityOneRadio.value)
    }
    else if (priorityTwoRadio.checked) {
        taskWrapper[concernedTask].priority = Number(priorityTwoRadio.value)
    }
    else if (priorityThreeRadio.checked) {
        taskWrapper[concernedTask].priority = Number(priorityThreeRadio.value)
    }
    else if (priorityFourRadio.checked) {
        taskWrapper[concernedTask].priority = Number(priorityFourRadio.value)
    }
    else if (priorityFiveRadio.checked) {
        taskWrapper[concernedTask].priority = Number(priorityFiveRadio.value)
    }
    else if (priorityZeroRadio.checked) {
        taskWrapper[concernedTask].priority = Number(priorityZeroRadio.value)
    }



    taskToDoWrapper.innerHTML = ''

    taskFilteredToDo.forEach(task => {
        taskToDoWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    })

    taskInProgressWrapper.innerHTML = ''

    taskFilteredInProgress.forEach(task => {
        taskInProgressWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    })

    taskDoneWrapper.innerHTML = ''

    taskFilteredDone.forEach(task => {
        taskDoneWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
    })
}
priorityTaskModifierForm.addEventListener("submit", priorityTaskModifier)


// FILTRAGE

let toDoSection = document.getElementsByClassName("to-do-section")
let inProgressSection = document.getElementsByClassName("in-progress-section")
let doneSection = document.getElementsByClassName("done-section")

const displayReset = () => {
    toDoSection[0].classList.remove("extended")
    toDoSection[0].classList.remove("hidden")
    inProgressSection[0].classList.remove("extended")
    inProgressSection[0].classList.remove("hidden")
    doneSection[0].classList.remove("extended")
    doneSection[0].classList.remove("hidden")
}

allFilteringClicking = () => {
    displayReset()
}


toDoFilteringClicking = () => {
    toDoFiltering()
}

const toDoFiltering = () => {
    taskFilteredToDo = taskWrapper.filter(task => task.status == 'A faire')
    console.log(taskFilteredToDo)

    displayReset()
    toDoSection[0].classList.add("extended")
    inProgressSection[0].classList.add("hidden")
    doneSection[0].classList.add("hidden")

    taskToDoWrapper.innerHTML = ''
    taskFilteredToDo.forEach(task => {
        taskToDoWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
})
}



inProgressFilteringClicking = () => {
    inProgressFiltering()
}

const inProgressFiltering = () => {
    taskFilteredinProgress = taskWrapper.filter(task => task.status == 'En cours')
    console.log(taskFilteredinProgress)

    displayReset()
    inProgressSection[0].classList.add("extended")
    toDoSection[0].classList.add("hidden")
    doneSection[0].classList.add("hidden")

    taskInProgressWrapper.innerHTML = ''
    taskFilteredinProgress.forEach(task => {
        taskInProgressWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
})
}


doneFilteringClicking = () => {
    doneFiltering()
}

const doneFiltering = () => {
    taskFilteredDone = taskWrapper.filter(task => task.status == 'Faite')
    console.log(taskFilteredDone)

    displayReset()
    doneSection[0].classList.add("extended")
    inProgressSection[0].classList.add("hidden")
    toDoSection[0].classList.add("hidden")

    taskDoneWrapper.innerHTML = ''
    taskFilteredDone.forEach(task => {
        taskDoneWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
})
    
}

// RANDOM

let randomTaskGeneration = () => {
    let randomTaskWrapper = [
        "Promener le chien",
        "Faire la vaisselle",
        "Acheter du pain",
        "Aller au centre commercial",
        "Apprendre JavaScript",
        "Trainer sur TikTok",
        "Répondre à ses mails",
        "Faire le plein",
        "Sortir les poubelles",
        "Etendre le linge"
    ]

    let randomTask = {
        value: randomTaskWrapper[Math.floor(Math.random() * randomTaskWrapper.length)], status: "A faire", priority: 0
    }

    taskWrapper.push (randomTask)
    

    taskToDoWrapper.innerHTML = ""
    taskFilteredToDo.forEach(task => {
        taskToDoWrapper.innerHTML +=
            `<div class="task-square statut-${task.status} priority-${task.priority}" id="id-${task.indexTask}">
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
})
taskCreatorWindowCloser()
}
