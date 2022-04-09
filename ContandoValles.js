function countingValleys(steps, path) {
    // Write your code here
    const secuencia = path.split('');
    let pasos = 0;
    let recorido = [0];
    let valles = 0;

    secuencia.forEach(p => {
        if(p == 'U'){
            pasos ++;
            recorido.push(pasos)
        }
        if(p == 'D'){
            pasos --;
            recorido.push(pasos)
        }
    });

    for (let i = 0; i < recorido.length; i++) {
        const el = recorido[i];
        const el2 = recorido[i+1]

        if(el === 0 && el2 < 0 ){
            valles ++
        }
        
    }
    return valles

}

countingValleys(8, 'DDUUDDUDUUUD')