const rompiendoRecords = (scores)=> {
    let recordPositivo = 0;
    let recordNegativo = 0;
    let recordPositivoActual = scores[0];
    let recordNeativoActual = scores[0];

    scores.forEach(el => {

        if(el > recordPositivoActual){
            recordPositivo += 1
            recordPositivoActual = el;
        }
        if(el < recordNeativoActual){
            recordNegativo += 1
            recordNeativoActual = el
        }
    });

    return [recordPositivo, recordNegativo]

}

rompiendoRecords([3, 4, 21, 36, 10, 28 ,35, 5, 24, 2])