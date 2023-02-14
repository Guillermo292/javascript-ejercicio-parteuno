const string = prompt("Escribe una frase" );

let frase = string;
let vocales = "aeiouAEIOU";
let resultado = "";

for (let i = 0; i < frase.length; i++) {
  if (vocales.indexOf(frase[i]) !== -1) {
    resultado += frase[i] + " " ;
  }
}

console.log(resultado);