function beautifulDays(i, j, k) {
    
    const dias = [];
    let diasLindos = 0;

    for (let d = i; d <= j; d++) dias.push(d)

    const diasVolteados = dias.map(d => Number(String(d).split('').reverse().join('')))
    

    for (let i = 0; i < dias.length; i++) {
        const num1 = dias[i];
        const num2 = diasVolteados[i];
        if(Number.isInteger((num1 - num2) / k)){
            diasLindos ++
        }
    }

    console.log(diasLindos);

}

beautifulDays(20,23,6)