// A Watson le gusta desafiar la habilidad matemática de Sherlock. 
// Proporcionará un valor inicial y final que describe un rango de números enteros,
// incluidos los puntos finales. Sherlock debe determinar el número de números enteros cuadrados dentro de ese rango.

const enterosCuadrados = (a,b) => {
    // let numeros = 0;

    // for (let i = a; i <= b; i++) {
    //     if(Number.isInteger(Math.sqrt(i))){
    //         numeros ++
    //     }
    // }
    // return numeros

  const inicio = Math.ceil(Math.sqrt(a)); // Encuentra el primer número cuyo cuadrado sea mayor o igual que 'a'
  const fin = Math.floor(Math.sqrt(b));    // Encuentra el último número cuyo cuadrado sea menor o igual que 'b'

  console.log('Math.sqrt(a)',Math.sqrt(a));
  console.log('Math.sqrt(b)',Math.sqrt(b));
  console.log('inicio',inicio);
  console.log('fin',fin);
  
  return fin - inicio + 1; // Calcula la cantidad de números enteros cuadrados en el rango
};

enterosCuadrados(17,24);