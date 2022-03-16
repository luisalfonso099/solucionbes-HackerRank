const candles = [3,2,1,3];


const velasMasAltas = (candles)=>{
  const masAlta = Math.max(...candles);

  const cantidadDevelasAltas = candles.filter(v => v == masAlta).length;

  return cantidadDevelas
}

velasMasAltas(candles)