function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let c1 = 0
    let c2 = 0
    while (x1 < x2 && x1 <= 100000000 && x2 <= 100000000) {
        c1 = x1 += v1;
        c2 = x2 += v2;
    }

    
    if(x1 == x2){
        return "YES"
    }else {
        return "NO"
    }



}

console.log( kangaroo(0,2,5,3));



