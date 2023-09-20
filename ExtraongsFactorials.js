const extrLongFactorial = (n) => {

    let totalValue = BigInt(n);
    for (let i = n - 1; i > 1; i--) {
        totalValue *= BigInt(i);  
    }
    console.log(String(totalValue));
};
extrLongFactorial(25);
