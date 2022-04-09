function obtenerDineroGastado(keyboards, drives, b) {
    let posiblesCompras = [];
    const long = Math.max(keyboards.length,drives.length)
    for (let i = 0; i <= long; i++) {
        const tecl = keyboards[i];
        drives.forEach(usb => {
            if((tecl + usb) <= b){
                posiblesCompras.push(tecl + usb)
            }
        });
    }
     const res = Math.max(...posiblesCompras)
    

    if (posiblesCompras.length > 0) {

        return res
    }else{
        return -1
    }



}


obtenerDineroGastado([6,36,4,5],[60,55,1],70)
