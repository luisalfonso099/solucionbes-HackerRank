function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let numero = [];
    for (let i = 0; i <= n - 1; i++) {
        const el = ar[i];
        ar.forEach(item => {
                if(item !== el){
               numero.push(item + el)}
        });
    }
    console.log(numero);

    // const divisibles = [];
    // numero.forEach(el => {
    //     if(Number.isInteger(el/k)){
    //         divisibles.push(el)
    //     }
    // })
    // console.log(divisibles);
}
divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2])

