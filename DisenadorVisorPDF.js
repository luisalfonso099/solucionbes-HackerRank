function designerPdfViewer(h, word) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arrPal = word.split('')
    let posiciones = [];
    const lugaresDeLetras = [];
    arrPal.forEach(l=> {
       alphabet.forEach((la,i) => {
            if(l == la){
                posiciones.push(i)
            }
        } )
    });
    

    posiciones.forEach(n=>{
        h.forEach((num,i)=> {
            if(n == i){
                lugaresDeLetras.push(num)
            }
        })
    })

    return (Math.max(...lugaresDeLetras) * word.length)

}

designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],'zaba')