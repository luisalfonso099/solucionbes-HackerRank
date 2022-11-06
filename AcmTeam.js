function acmTeam(topic) {
  let equipos = {}
  let n = 1
  const arrays = topic.map((el) => el.split('').map((n) => Number(n)))
  for (let i = 0; i < arrays.length; i++) {
    let item = arrays[i]
    for (let j = 1; j < arrays.length; j++) {
      let item2 = arrays[j]
      item.forEach((l, v) => {
        if (item2[v] + l > 0) {
          equipos[`${i}y${j}`] = n++
        }
      })
      n = 1
    }
  }
  console.log(equipos)
}

const arr = ['10101', '11110', '00010']
acmTeam(arr)
