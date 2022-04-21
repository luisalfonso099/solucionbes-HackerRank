function viralAdvertising(n) {
    // Write your code here
    let accumulativo = 0;
    let personas = 5;
    let meGustas = 0;

    for (let d = 1; d <= n; d++) {
        meGustas = Math.floor(personas / 2)
        personas = meGustas *3
        accumulativo = accumulativo + meGustas
    }
    console.log(accumulativo);
    return accumulativo

}
viralAdvertising(5)