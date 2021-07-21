let a=document.getElementById(catet1);
let b=document.getElementById(catet2);

let aval = a.value;
let bval = b.value;

function hipot(){
    let x=(aval*aval + bval*bval);
    c = Math.pow(x, 1/2);
    return c;
};


document.getElementById("resultat").addEventListener("click", hipot);