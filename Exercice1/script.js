let cat = document.getElementById("catimg");

function catzoom() {   
   cat.classList.toggle('large'); //toggle ajout la class s'il n'y en a pas et s'il y en a il le supprime
};
  
  cat.addEventListener("dblclick", catzoom);

 