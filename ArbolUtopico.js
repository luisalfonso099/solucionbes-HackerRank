function utopianTree(n) {
    // Write your code here
    let arbol = 1;

    for (let i = 0; i < n; i++) {

        if(i % 2 == 0){
            arbol = arbol + arbol
        }else{
            arbol ++
        }      
    }
    console.log(arbol );
    
}
utopianTree(5)