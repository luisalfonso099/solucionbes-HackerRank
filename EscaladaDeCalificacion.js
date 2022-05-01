
const escalaDeClasificacion = (ranked, player)=>{
  const ranking = [...new Set(ranked)].reverse();
    const posiciones = [];
    let long = ranking.length;
    const max = ranked[0];
    let x = 0;
  player.forEach(el => {
    
      for (let j = x; j < long; j++) {
        let pos = parseInt(ranking[j]);
        // console.log("elemento",el);

        // console.log("posicion",pos);

        if(el < pos){
          // console.log('elemento es menor', el,pos);
          posiciones.push(long - j +1);
          x = j
          break;
        }
        if(el == pos){
          // console.log('iguales', el,pos);
          posiciones.push(long - j);
          break;
        }
        if(el > max){
          // console.log('elemento es mayor al maximo', el,pos);
          posiciones.push(1);
          break;
        }
       
    }
  })
    // console.log(ranking);
    // console.log(player);
    // console.log(posiciones);

    return posiciones

};

escalaDeClasificacion([100,90,90,80,75,60],[50,65,77,90,102]);

