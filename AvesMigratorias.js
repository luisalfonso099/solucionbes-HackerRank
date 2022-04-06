function migratoryBirds(arr) {
    // Write your code here
    let repetidos = [];
    let contador = 1;
    const unicosElementos = [];
    arr.sort()
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i +1] === arr[i]) {
            contador ++;
        }
        else{
            unicosElementos.push(arr[i]);
            repetidos.push(contador);
            contador = 1;
        }
    };
    const resp = unicosElementos.slice(repetidos.indexOf(Math.max(...repetidos)),repetidos.indexOf(Math.max(...repetidos)) +1)
    return resp
};


    migratoryBirds([4,1,4,4,4,5,3,3,3,3,3,4,4])

