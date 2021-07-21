let cat1 = document.getElementById("first");
let cat2 = document.getElementById("second"); //création de 2 variables pour chaque image ensuite récuperation par son id

function catappear() {
  cat1.style.display = "none";
  cat2.style.display = "block";
  }

function catdisappear() {
   cat1.style.display = "block";
   cat2.style.display = "none";
   }

cat1.addEventListener("mouseover", catappear);
cat2.addEventListener("mouseover", catappear);

cat1.addEventListener("mouseout", catdisappear);
cat2.addEventListener("mouseout", catdisappear);




// function catdisappear() {

// }

// }
//        cat.classList.toggle('large');
//   };(cat1.style.display === "none") 




// function bigImg(x) {
//     x.style.height = "64px";
//     x.style.width = "64px";
//   }
  
//   function normalImg(x) {
//     x.style.height = "32px";
//     x.style.width = "32px";
//   }