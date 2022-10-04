function appendAndDelete(s, t, k) {
    for (let i = 0; i < k -1 ;i++){

        if(!t.includes(s)){
            s = s.slice(0, s.length-1);
        }
        if(t.includes(s)){
            s = s + t.slice(s.length, s.length +1);
        }

    }

    console.log(s);
    if(t === s){
        return 'otra cosa'
    }else {
        return 'No'
    }

    //Mi ultimo cambios par ahcer un merge 2

}

let res = appendAndDelete( 'abcd' , 'abcdert' , 10 );

console.log(res);