function migratoryBirds(arr) {
    // Write your code here
    const res = [];
    let vecesQueSeRepite = [];
    let avesMAx          = [];
    let contador      = 1;
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        if(arr[i +1] === arr[i]) {
            contador ++;
        }else{
            vecesQueSeRepite.push(contador);
            avesMAx.push(arr[i]);
            contador = 1;
        }
    }
    for (let j = 0; j < vecesQueSeRepite.length; j++) {
        const el = vecesQueSeRepite[j];
        const it = avesMAx[j];
        res.push(el,it)
    }

    
    return (Math.max(...vecesQueSeRepite));

};


console.log(
    migratoryBirds([1,4,4,4,5,3,3])

);