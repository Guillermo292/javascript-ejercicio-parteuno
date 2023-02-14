let num = (prompt("Ingrese un número: "));
let result = "El número es divisible por: ";

if (num % 2 === 0) {
  result += "2, ";
}

if (num % 3 === 0) {
  result += "3, ";
}

if (num % 5 === 0) {
  result += "5, ";
}

if (num % 7 === 0) {
  result += "7";
}

if (result === "El número es divisible por: ") {
  result = "El número no es divisible por ninguno de los cuatro números.";
}

console.log(result);



