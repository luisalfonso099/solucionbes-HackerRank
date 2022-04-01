const casaInicio     = 4;
const casaFin        = 9;
const arbolManzanas  = 2;
const arbolNaranjas  = 10;
const manzanasCaidas = [ 1 , 4 , 3 , 5 ];
const naranjasCaidas = [ 10 , 7 , 6 ];



const contarManzanasyNaranjas = (s, t, a, b, apple, orange ) => {
        let loop    = m > n ? m : n
        let apples  = 0
        let oranges = 0
        
        for (let i = 0; i < loop; i++) {
          if (i < apple.length) {
            apples = (apple[i] + a) >= s && (apple[i] + a) <= t ? apples + 1 : apples 
          }
          
          if (i < orange.length) {
            oranges = (orange[i] + b) >= s && (orange[i] + b) <= t ? oranges + 1 : oranges 
          }
        }
    console.log(apples);
    console.log(oranges);
};

// function main(s, t, a, b, apple, orange) {
//     var s_temp = readLine().split(' ');
//     var s = parseInt(s_temp[0]);
//     var t = parseInt(s_temp[1]);
//     var a_temp = readLine().split(' ');
//     var a = parseInt(a_temp[0]);
//     var b = parseInt(a_temp[1]);
//     var m_temp = readLine().split(' ');
//     var m = parseInt(m_temp[0]);
//     var n = parseInt(m_temp[1]);
//     apple = readLine().split(' ');
//     apple = apple.map(Number);
//     orange = readLine().split(' ');
//     orange = orange.map(Number);
    
//     let loop = m > n ? m : n
//     let apples = 0
//     let oranges = 0
    
//     for (let i = 0; i < loop; i++) {
//       if (i < apple.length) {
//         apples = (apple[i] + a) >= s && (apple[i] + a) <= t ? apples + 1 : apples 
//       }
      
//       if (i < orange.length) {
//         oranges = (orange[i] + b) >= s && (orange[i] + b) <= t ? oranges + 1 : oranges 
//       }
//     }
    
//     console.log(apples)
//     console.log(oranges)
//   }


  contarManzanasyNaranjas(casaInicio, casaFin,arbolManzanas,arbolNaranjas,manzanasCaidas,naranjasCaidas);
