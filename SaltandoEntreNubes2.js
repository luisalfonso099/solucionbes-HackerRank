
function jumpingOnClouds(c) {
    // Write your code here

    let saltos = 0
    for (let i = 0; i < c.length; i++) {
        console.log("in", i);
       if(c[i+2] != 1){
           i++
       } if(c[i+2] == undefined){
        i++
       }
        saltos ++;
    };
    console.log("saltos", saltos);
    return saltos;
};
jumpingOnClouds([0,0,0,1,0,1,0]);