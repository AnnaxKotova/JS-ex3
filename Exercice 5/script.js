function hipot(){
    let a = document.getElementById("catet1").value; //cela prends les valeurs saisis par l'utilisateur
    let b = document.getElementById("catet2").value;
    let x=(a*a + b*b);
    c = Math.pow(x, 1/2); //resultat mathemathique est correct hip=(a²+b²)^1/2
    document.getElementById("resultat").innerHTML = c; //cela insert le valeur d'une variable c dans une id "resultat"
    };

    document.getElementById("bouton").addEventListener("click", hipot); //une fois on est clicqué sur le bouton (class bouton), la fonction s'execute