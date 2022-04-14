const escalaDeClasificacion = (ranked, player)=>{
    const max = ranked[0];
    const ranking = [...new Set(ranked)].reverse();
    const min = ranking[0];
    const posiciones = [];
    let long = ranking.length;
    let index = 0;
    player.forEach(el => {

        while ( index < long){
            index++;
            const pos = ranking[index];
            if(el == pos){
                posiciones.push(long - index);
                index = 0;
                break;
              }
              if(el >= max){
                posiciones.push(1);
                index = 0;
                break;
              }
              if(el < min){
                posiciones.push(long - index +2);
                index = 0;
                break;
              }
              if(el < pos){
                posiciones.push(long - index +1);
                index = 0;
                break;
              }
        }
    })
    console.log(ranking);
    console.log(player);
    console.log(posiciones);

    return posiciones

};

escalaDeClasificacion([100,90,90,80,75,60],[50,65,77,90,102]);




//------------------------------Con for------------------------


// const max = ranked[0];
// const ranking = [...new Set(ranked)].reverse();

// const posiciones = [];
// let long = parseInt(ranking.length);

// player.forEach(el => {
//   for (let j = 0; j < long; j++) {
//       const pos = ranking[j];
//       if(el == pos){
//         posiciones.push(long - j);
//         break;
//       }
//       if(el >= max){
//         posiciones.push(1);
//         break;
//       }
//       if(el < pos){
//         posiciones.push(long - j +1);
//         break;
//       }
      
//   }
// })
// return posiciones