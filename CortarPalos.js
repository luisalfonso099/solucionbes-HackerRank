
const cortarPalos = (arr)=>{

    let arrOrdenado = arr.sort((a,b)=> a-b)
    let res = []
    let listo = [arr.length]
    while (arrOrdenado.length !== 0) {
        let min = Math.min(...arrOrdenado);

        let ultimo = arrOrdenado.lastIndexOf(min)
        
        res = arrOrdenado.filter(el => {
            if (el !== min) {
                return el - min
            }
        })
        arrOrdenado.splice(0,ultimo +1);

        if(res.length !== 0){
            listo.push(res.length)
         }
    }
    
        console.log("listo : ", listo);
        return listo
}
cortarPalos([1,1,1,2,2,3,3])