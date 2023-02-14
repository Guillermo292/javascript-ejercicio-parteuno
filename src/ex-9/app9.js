const string = prompt("Escribe una frase");
let count = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === "a", "A", "E", "e", "I", "i", "O", "o", "U", "u"){
    count++;}
}
console.log("El numero de vocales es " + count  );