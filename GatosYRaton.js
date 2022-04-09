function catAndMouse(x, y, z) {

    const velGatoA = Math.abs(z - x);
    const velGatoB = Math.abs(z - y);

    if (velGatoA === velGatoB) {
        return 'Mouse C';
    }

    if(velGatoA > velGatoB){
        return 'Cat B';
    }else if(velGatoA < velGatoB){
        return 'Cat A';
    }

}

catAndMouse(1,3,2)
