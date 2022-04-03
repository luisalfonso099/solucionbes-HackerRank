function getTotalX(a, b) {
    // Write your code here
    const maxA = Math.max(...a);
    const minB = Math.min(...b)
    const factores = [];
    const arr = [];
    for (let i = maxA; i <= minB; i++){
        if (a.every(el => i % el === 0)) {
            factores.push(i)
        }
    };

    for (let i = 0; i <= factores.length; i++) {
        const item = factores[i];
        if (b.every(el => el % item === 0)) {
            arr.push(item)
        }
    }

    return arr.length

}

console.log(

getTotalX([2,4],[16,32,96])

);