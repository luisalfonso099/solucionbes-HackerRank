function divisibleSumPairs(n, k, ar) {
    let numero = [];
    for (let i = 0; i <= n -1; i++) {
        const el = ar[i];
        ar.forEach((item,index) => {
            if(i !== index){
                if((el + item) % k == 0){
                    numero.push((el + item))
                }
            }
        });
    }
  return numero.length / 2
}
divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2])

