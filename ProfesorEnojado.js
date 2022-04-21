function angryProfessor(k, a) {
    // Write your code here
    let asistentes = 0;

    a.forEach(es => {
        if(es <= 0){
            asistentes ++
        }
    });
    console.log(asistentes);
    if(asistentes >= k){
        console.log('NO');
        return 'NO'
    }else{
        console.log('YES');
        return 'YES'
    }
}
angryProfessor(7, [26,94,-95,34,67,-97,17,52,1,86])