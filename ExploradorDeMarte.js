function marsExploration(s) {
    // Write your code here
    let cantidadDeSos = s.length / 3;
    let mensajeCorrecto = [];

    for (let i = 0; i < cantidadDeSos; i++) {
       mensajeCorrecto.push('SOS')
    }

    let  mensajeCorrectoIndexado =  mensajeCorrecto.join('').split('');
    let indexarMensaje = s.split('');

    let cont  = 0

    for (let i = 0; i < s.length; i++) {
        const elIncorrecto = indexarMensaje[i];
        const elCorrecto = mensajeCorrectoIndexado[i];
        if(elCorrecto !== elIncorrecto) cont ++
    }
    console.log(cont);
    return cont

}

marsExploration('SOSSPSSQSSOR');