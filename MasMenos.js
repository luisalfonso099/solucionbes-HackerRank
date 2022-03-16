const arr = [1,1,0,-1,-1];

const masMenos = (arr)=>{
    const elemntos = arr.length
    const positivos  =  (arr.filter(n => n > 0).length / elemntos).toFixed(6)
    const negativos  =  (arr.filter(n => n === 0).length / elemntos).toFixed(6)
    const ceros  =  (arr.filter(n => n < 0).length / elemntos).toFixed(6)

    console.log(positivos);
    console.log(negativos);
    console.log(ceros);
}

masMenos(arr);

