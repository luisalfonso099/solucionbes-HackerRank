const grade = [73,67,34,33,44]

const calificandoEstudiantes = (grades)=>{
    const res   = grades.map(n => {
    const resto = (n % 5)


    if (resto === 3 && n >= 38) {
          return  n + resto -1
        }else if (resto === 4 && n >= 38){
            return n + 1
        }
        else {
            return n 
        }
      })
    return res
}

calificandoEstudiantes(grade)

