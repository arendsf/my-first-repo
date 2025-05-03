// Versión para Node.js (funciona seguro)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Ingresa la cantidad en dólares: ', (dolares) => {
    let euros = dolares * 0.85;
    console.log(`${dolares} USD = ${euros} EUR`);
    readline.close();
  });