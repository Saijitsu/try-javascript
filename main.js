"use strict"

let inputFirstName = document.querySelector("#firstName");
console.log(inputFirstName.value);

let inputButton = document.querySelector("button");
console.log(inputButton);

function checkInput(input){
    !isNaN(input.value) ?
        input.style.background = "red" :
        input.style.background = "green"
}

inputButton.addEventListener("click", function () {
    let input = document.querySelector("#firstName")
    checkInput(input)
   // console.log(input.value);
})

inputFirstName.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (event.key === "Enter") {
        // ici la fontion va annuler le comportement par défaut du navigateur
        e.preventDefault();
        checkInput(input)
       // console.log(event.target.value);
    };
});