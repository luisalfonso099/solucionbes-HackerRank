// Dado un conjunto de números enteros distintos, imprima el tamaño de un subconjunto máximo de S donde la suma de cualquier 2 números en S no es divisible por K.
// S = [19,10,12,10,24,25,22] K = 4
// Una de las matrices que se pueden crear es S[0] = [10,12,25]. Otro es S[1] = [19,22,24]. Después de probar todas las permutaciones, 
//la matriz de solución de longitud máxima tiene 3 elementos.


function nonDivisibleSubset(k, s) {
    // Write your code here
    let convinacions = [];
    let sinRepetidos = [...new Set(s)];


    for (let i = 0; i  < sinRepetidos.length -1; i++) {
        let convinacionsTemoral = []

        for (let j = i +1; j <sinRepetidos.length ; j++) {
            const resto = (sinRepetidos[i] + sinRepetidos[j]) % k;
            console.log('i',sinRepetidos[i]);
            console.log('J',sinRepetidos[j]);
            console.log('Restoo: ',resto);
            if(resto !== 0){
      

                convinacionsTemoral.push(sinRepetidos[i])
                convinacionsTemoral.push(sinRepetidos[j])
            }
        }
        if(convinacionsTemoral.length > convinacions.length){
            convinacions = convinacionsTemoral
        };
    };

    console.log('Final',convinacions);


}

nonDivisibleSubset(4,[19,10,12,10,24,25,22]);
console.log(32 % 4);