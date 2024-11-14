let count = 0
function btnColorChnge() {

   const btn = document.getElementById("click");

   count++;

   if (count === 1) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
   }
   else if (count === 2) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";

   } else {

      btn.style.backgroundColor = "white";
      btn.style.color = "black ";

   }

}

