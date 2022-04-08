function sockMerchant(n, ar) {
    ar.sort();
    let pares = 0
    const soloPares = [];

    const soloRepetidos = [];

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == ar[i+1] || ar[i] == ar[i -1]) {
            soloRepetidos.push(ar[i])
        }
    }
    for (let j = 0; j < soloRepetidos.length; j+= 2) {
        if(soloRepetidos[j] == soloRepetidos[ j +1 ]){
            soloPares.push(soloRepetidos[j],soloRepetidos[ j +1 ])
        }else{
            soloPares.push(soloRepetidos[ j +1 ])
        }
    }

    console.log(soloRepetidos);
    console.log(soloPares);
    console.log(soloPares.length / 2);
    return soloPares.length / 2;
 

}

sockMerchant(20, [4 ,5, 5 ,5 ,6 ,6 ,4 ,1 ,4, 4 ,3 ,6 ,6 ,3,6,1 ,4, 5 ,5 ,5])