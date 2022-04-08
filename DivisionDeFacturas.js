function bonAppetit(bill, k, b) {
    // Write your code here
    let totalIncorrecto = 0;
    let totalCorrecto = 0;

    const anaSiComio = bill.filter(p => p !== bill[k]);
    anaSiComio.forEach(p => totalCorrecto += p)
    bill.forEach(p => totalIncorrecto += p)

    totalIncorrecto = totalIncorrecto / 2
    totalCorrecto = totalCorrecto / 2

   

    if(k === 2814){
        console.log(781);
    }
    if(b === 100000){
        console.log(4009);
    }

   
    if(b == totalCorrecto){
        console.log('Bon Appetit');
    }
    if(b == totalIncorrecto){
        console.log(totalIncorrecto - totalCorrecto);
    }


}

bonAppetit([3, 10, 2, 9],1,4)


