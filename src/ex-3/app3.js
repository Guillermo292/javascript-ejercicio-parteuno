let input = document.getElementById("input-id")
let div = document.querySelector(".container-name")
let button = document.querySelector(".button")
button.addEventListener("click",()=>{
    div.innerHTML = "Hola " +  input.value;
})
