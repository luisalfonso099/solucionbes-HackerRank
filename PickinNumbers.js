function pickingNumbers(a) {
    let recoger = [];
    a.sort((a, b)=> a - b)
    for (let i = 0; i < a.length; i++) {
        if(a[i] === a[i+1] || a[i] +1 === a[i + 1] || a[i] === a[i - 1] || a[i - 1] - a[i] <=1) {
            recoger.push(a[i]);
        }
    }
    let ref = recoger[0];
    const cont = [[]];

    for (let i = 0; i < recoger.length; i++) {
        const num = recoger[i];

        if( num - ref <= 1){
            cont[cont.length -1].push(num)
        }
        else{
            cont.push(new Array)

            cont[cont.length -1].push(recoger[i])
            ref = recoger[i-1];
            const posibles = cont[cont.length -2].filter(n => recoger[i] - n == 0 || recoger[i] - n == 1);

            if(posibles.length > 0){
                cont[cont.length -1].push(...posibles)
            }else{
                cont[cont.length -1].push(ref)
            }
        }
    }
    let res = [];
    cont.forEach(ar => res.push(ar.length));
    return Math.max(...res)

}


pickingNumbers([98,3,99,1,97,2])
