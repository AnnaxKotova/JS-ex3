let x = document.getElementById("monnom");

function green(){
    this.style.borderColor = "lightgreen";
}

function red(){
    this.style.borderColor = "red";
}

x.addEventListener("focusin", green);

x.addEventListener("focusout", red);
