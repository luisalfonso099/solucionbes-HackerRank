const candles = [3,2,1,3];


const velasMasAltas = (candles)=>{
  const masAlta = Math.max(...candles);
  return candles.filter(v => v == masAlta).length;
}

velasMasAltas(candles)