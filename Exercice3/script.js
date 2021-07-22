let x = document.getElementById("monnom"); //variable X prends une id avec qui elle va réagir


function mafonction(){
    let y = this.value; // cette propriété "value" recupère la valeur de l'attribut HTML value saisie dans l'input.
    alert(y);
}

x.addEventListener("keyup", mafonction);

//il faut jamais avoir des variables globales
