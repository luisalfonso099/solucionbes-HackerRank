// ¡Tu biblioteca local necesita tu ayuda! Dadas las fechas de devolución esperadas y reales de un libro de la biblioteca, 
//cree un programa que calcule la multa (si corresponde). La estructura de tarifas es la siguiente:

// Si el libro se devuelve en o antes de la fecha prevista de devolución, no se cobrará ninguna multa (es decir:.
// Si el libro se devuelve después del día de devolución previsto pero aún dentro del mismo mes y año calendario que la fecha de devolución prevista,.D * 15
// Si el libro se devuelve después del mes de devolución previsto pero aún dentro del mismo año calendario que la fecha de devolución prevista, el. 500 * meses
// Si el libro se devuelve después del año natural en que se esperaba, se aplica una multa fija de. 10 000
// Los cargos se basan únicamente en la medida de retraso menos precisa. Por ejemplo, si un libro vence el 1 de enero de 2017 o el 31 de diciembre de 2017,
// si se devuelve el 1 de enero de 2018, eso significa un año de retraso y la multa sería.




function libraryFine(d1, m1, y1, d2, m2, y2) {
    const fechaDevolucion = new Date([`${y1}-${m1}-${d1}`]).getTime();
    const fechaVencimiento = new Date([`${y2}-${m2}-${d2}`]).getTime();

    if(fechaDevolucion <= fechaVencimiento){
        console.log(0);
        return 0;
    }

    if(y1 <= y2 ){
        if(m1 > m2){
            console.log('mes',500 * (m1 - m2));
            return  500 * (m1 - m2) 
        }
        if(d1 > d2 ){
            console.log('dia ',d2,d1 ,15 * (d1 - d2));

            return 15 * (d1 - d2) 
        }

    }else {
        console.log(10000);
        return 10000
    }
}

libraryFine(9,6,2015,6,6,2015);