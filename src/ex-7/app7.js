const string = prompt("Introduce una frase ");
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "a" || string[i] === "A") {
    count++;
  }
}
console.log("La letra 'a' aparece " + count + " veces");















