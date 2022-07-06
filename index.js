// déclaration des variables et constantes







// déclaration des éléments




// événements

createButton.addEventListener("click", () => {
  onTaskSubmit("create")
})

document.getElementById("create").addEventListener('click',function(e){
  e.preventDefault(); // Cancel the native event
  e.stopPropagation();// Don't bubble/capture the event any further
});



// fonctions

const onTaskSubmit = () => {

}