// Taum planea celebrar el cumpleaños de su amigo Diksha. Hay dos tipos de regalos que Diksha quiere de Taum: 
// uno es negro y el otro es blanco. Para hacerla feliz, Taum tiene que comprar b regalos negros y w regalos blancos.

// El costo de cada regalo negro es bc unidades.
// El costo de cada regalo blanco es wc unidades.
// El costo para convertir un regalo negro en un regalo blanco o viceversa es z unidades.

// Determine el costo mínimo de los obsequios de Diksha.

// Ejemplo
// b = 3
// w = 5
// bc = 3
// wc = 4
// z = 1


// Puede comprar un regalo negro para 3 y convertirlo en un regalo blanco para 1, haciendo que el coste total de cada regalo blanco 4. 
// Eso coincide con el costo de un regalo blanco, por lo que puede hacerlo o simplemente comprar regalos negros y regalos blancos. 
// De cualquier manera, el costo total es. 3 * 3 +5 *4 = 29

const taumBday = (b, w, bc, wc, z) => {

    // if(bc < wc){
    //     const dif2  = wc - bc;
    //     const result = b * bc;
    //     const res    = dif2 > z ?  (w * bc) + (w * z) : w * wc;
    //     console.log(result + res);
    //     return result + res
    // }else if(bc > wc) {
    //     const dif1  = bc - wc;
    //     const result = w * wc;
    //     const res    = dif1 > z ? (b * wc) + (b * z) : b * bc;
    //     console.log(result + res);
    //     return result + res
    // }
    // const result = w * wc;
    // const result2 = b * bc;
    // return result + result2;


    // Write your code here 
    let minWhite = Math.min(bc, (wc + z)); 
    let minBlack = Math.min(wc, (bc + z)); 
    let t = BigInt(b) * BigInt(minWhite) + BigInt(w) * BigInt (minBlack); 
    return t.toString();
}

taumBday(5,9,2,3,4);//37