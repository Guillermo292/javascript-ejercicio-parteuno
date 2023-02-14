const string = prompt(" Escribe una frase");
let a = 0, e = 0, i = 0, o = 0, u = 0;

for (let letter of string) {
  switch (letter.toLowerCase()) {
    case 'a':
      a++;
      break;
    case 'e':
      e++;
      break;
    case 'i':
      i++;
      break;
    case 'o':
      o++;
      break;
    case 'u':
      u++;
      break;
    }
} 
console.log(`A: ${a}`);
console.log(`E: ${e}`);
console.log(`I: ${i}`);
console.log(`O: ${o}`); 


























// let count = 0;
// let key = (a = 0, e = 0, i = 0, o = 0, u = 0);
// Symbol.for(key) =  i <string.length; i++;{
    
//     switch (string[i]) {
//             case "a" :
//                 a++;
//                 break;
    
//         case "e" :
//             e++;
//             break;
    
//         case "i" :
//             i++;
//             break;
    
//         case "o" :
//             o++;
//             break;
    
//         case "u" :
//             u++;
//             break;
//     }

    
// }
// // console.log("key");