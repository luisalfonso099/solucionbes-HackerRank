const diagonales = (arr) => {
    let diagonalUno = 0;
    let diagonaldos = 0;
      for(let i = 0 ; i < arr.length ; i++){
      diagonalUno = diagonalUno += arr[i][i]
      diagonaldos = diagonaldos += arr[i][arr.length -1 -i]
    }
    if(diagonalUno > diagonaldos){
      return diagonalUno - diagonaldos
    }else {
      return diagonaldos - diagonalUno
    }
    
  }
  
  diagonales([[1 ,2 ,3,4],
              [4, 5 ,6,5],
              [4, 5 ,6,2],
              [9 ,8 ,9,6]])