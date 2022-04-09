function pageCount(n, p) {
    let pages = [];
    const libro = [];
    for (let i = 0; i <= n; i++) {
        pages.push(i)
        if(pages.length == 2){
            libro.push({pages});
            pages = [];
         }
    }
    if(n % 2 == 0){
        libro.push({'pages':[n]})
    }

    let res1 = 0;
    libro.forEach((n,i )=> {
        if (n.pages.includes(p)){
            res1 = i
        }
    })
    let res2 = 0;
    libro.reverse().forEach((n,i )=> {
        if (n.pages.includes(p)){
            res2 = i
        }
    })

    if(res1 < res2){
        return res1
    }else{
        return res2
    }
}
pageCount(10,1);