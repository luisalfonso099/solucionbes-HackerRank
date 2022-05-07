function camelcase(s) {
    // Write your code here
    let x = s.split('');
    let cont = 1;
    const abc = 'abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase().split('')

    x.forEach(letar => {
        if(abc.includes(letar)) cont ++
    });
   console.log(cont);
   return cont

}

camelcase('saveChangesInTheEditor')