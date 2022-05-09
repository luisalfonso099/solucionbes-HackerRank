function jumpingOnClouds(c, k) {

    let energy = 100;
    let cloud = null;
    let posicion = 0;
    if(c[0] == 1){
        energy - 2
    }
    c[0] = "hola"
    do {
        if(posicion < c.length){
            cloud = c[posicion += k];
            energy += -1
        }else {
            posicion = posicion - c.length
            cloud = c[posicion];
        }
        if(cloud == 1){
            energy += -2
        }
    } while (cloud !== "hola");

    console.log(energy);
    return energy


}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)