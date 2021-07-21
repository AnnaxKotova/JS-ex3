let x = document.getElementById("monnom");

function green(){
    x.style.borderColor = "lightgreen";
}

function red(){
    x.style.borderColor = "red";
}

x.addEventListener("focusin", green);

x.addEventListener("focusout", red);
