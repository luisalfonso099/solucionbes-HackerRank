const n = 20;

const escalera = (n)=>{
     let simbolo = ''
     let spaces = ''
     while (spaces.length < n) {
         spaces += ' '
     }
    for (let i = 0; i < n ; i++) {
        spaces = spaces.slice(1)
        console.log(`${spaces }${simbolo += '#'}`);
    }
}

escalera(n)