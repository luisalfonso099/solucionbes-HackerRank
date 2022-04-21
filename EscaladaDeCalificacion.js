
const escalaDeClasificacion = (ranked, player)=>{
  const ranking = [...new Set(ranked)].reverse();
  const posiciones = [];
  const max = ranked[0];
  const min = ranking[0];

  let long = ranking.length;
  
  let index = 0;
  player.forEach((el,i )=> {
      while ( posiciones.length < player.length){

          const pos = ranking[index];
          console.log(pos,el);

            if(el < min){
              posiciones.push(ranking.length +1)
              index ++
              break
            }
            if(el == pos){
              console.log('elemento igua',el);
              posiciones.push(long - index );
              index ++
             break;
           }
            if(el < pos){
              posiciones.push(long - index +1);
              index ++
              break;
            }
            if(el > max){
              posiciones.push(1)
             index ++
              break
            }
            console.log('bucle de' , pos, el);
            break

      }
  })
  console.log(ranking);
  console.log(player);
  console.log(posiciones);

  return posiciones

};

escalaDeClasificacion([100,100,50,40,40,20,10],[5,25,50,120]);



//,const escalaDeClasificacion = (ranked, player)=>{
//   const ranking = [...new Set(ranked)].reverse();
//     const posiciones = [];
//     let long = ranking.length;
//     const max = ranked[0];
//   player.forEach(el => {
    
//       for (let j = 0; j < long; j++) {
//         let pos = parseInt(ranking[j]);
//         console.log(pos);
        
//         if(el == pos){
//           posiciones.push(long - j);
//           break;
//         }
//         if(el > max){
//           posiciones.push(1);
//           break;
//         }
//         if(el < pos){
//           posiciones.push(long - j +1);
//           break;
//         }
//     }
//   })
//     console.log(ranking);
//     console.log(player);
//     console.log(posiciones);

//     return posiciones

// };

// escalaDeClasificacion([100,90,90,80,75,60],[50,65,77,90,102]);

