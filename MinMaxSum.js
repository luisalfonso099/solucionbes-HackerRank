const arr = [396285104,573261094,759641832,819230764,364801279];

const minMaxSum = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const numMax = arr.filter(n => n !==  min);
    const numMin = arr.filter(n => n !==  max);

    if(numMax.length === 0){
        const indexMin = arr.indexOf(min);
        const indexMax = arr.indexOf(max);
    
         let numeroMenor = arr.splice(indexMin, 1)
         const sumMax = arr.reduce((el, acc) =>   el + acc , 0)
    
         arr.splice(indexMax -1,1,...numeroMenor)
         const sumMin = arr.reduce((el, acc) =>   el + acc , 0)
    
        console.log(`${sumMin} ${sumMax}`);
        return
    }
    const sumMax = numMax.reduce((el, acc) =>   el + acc , 0)
    const sumMin = numMin.reduce((el, acc) =>   el + acc , 0)

    console.log(`${sumMin} ${sumMax}`);

}

minMaxSum(arr);