const casaInicio = 4;
const casaFin = 9;
const arbolManzanas = 2;
const arbolNaranjas =  10;
const manzanasCaidas = [1,4,3,5];
const naranjasCaidas = [10,7,6];

const contarManzanasyNaranjas = (s, t, a, b, apples, oranges )=>{

    const casa = [];

    for (let i = parseInt(s); i <= parseInt(t); i++)casa.push(i)
    
    const ubicacionDeManz = apples.map(m => m + parseInt(a))
    const ubicacionDeNar  = oranges.map(n => n + parseInt(b))

    
    const totalManz = ubicacionDeManz.filter(m => casa.includes(m)).length;

    const totalNar  = ubicacionDeNar.filter(n => casa.includes(n)).length;

    console.log(totalManz);
    console.log(totalNar);

};


contarManzanasyNaranjas(casaInicio, casaFin,arbolManzanas,arbolNaranjas,manzanasCaidas,naranjasCaidas);



