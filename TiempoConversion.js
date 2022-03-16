const hora = '12:15:45AM';

const tiempoConversion = (s)=>{
    
    let hr = ''
    const arrayHoraMilitar = [];
    const amPm = s.slice(s.length -2, s.length) 
    const horaNow = s.slice(0, 2)

    for (let i = 12; i <= 23; i++) {
        arrayHoraMilitar.push( i)
    }

    if(amPm === 'AM' && horaNow === '12'){
        let horaFacil = s.slice(0, s.length -2)
        let res = '00' + horaFacil.slice(2,  horaFacil.length)
        return res
    }

    if(amPm === 'AM' && horaNow != '12'){
        const horaFacil = s.slice(0, s.length -2) 
        return horaFacil
    }

    if(amPm === 'PM'){
        if(horaNow.startsWith('0')) hr = horaNow.slice(1,2)
       arrayHoraMilitar.push(12)
       hr = horaNow.slice(0,2)
       const horaMilitar = arrayHoraMilitar.filter((h, i) => i == hr )[0]
       const resultado = (horaMilitar + s.slice(2,s.length)).slice(0, 8)
       return resultado
    }
}

tiempoConversion(hora)