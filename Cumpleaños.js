function birthday(s, d, m) {
    // Write your code here
    let barras = 0;
    let value = 0

    const nuemroDeBarritas = s.slice(0, m)
    for (let i = 0; i < s.length; i++) {
        const nuemroDeBarritas = s.slice(value, m)
        const suma = nuemroDeBarritas.reduce((acc, el) => acc + el)
        m += 1;
        value += 1;
        if(suma == d ){
            barras += 1;
        }
    }
    return barras
}
birthday( [1,2,1,3,2,8], 3, 2)
