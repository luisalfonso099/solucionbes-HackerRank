function equalizeArray(arr) {
    // Write your code here
    let resultados = {};
    let cont = 0;
    let resultados2 = [];

    const ordenado = arr.sort((a,b) => a-b)

    for (let i = 0; i < arr.length; i++) {
        const el = ordenado[i];
        if(el == ordenado[i+1]){
            cont ++
            resultados[`${el}`] = cont +1
            resultados2.push(el)
        }else {
            cont = cont - cont
        }
    }
    const res = arr.length -  Math.max(...Object.values(resultados))



    console.log(res);
    return res !== Infinity ? res : arr.length -1

}
equalizeArray([37,32,97,35,76,62])