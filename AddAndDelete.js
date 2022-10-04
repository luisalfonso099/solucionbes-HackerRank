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
        return 'Yes'
    }else {
        return 'No'
    }


}

let res = appendAndDelete( 'abcd' , 'abcdert' , 10 );

console.log(res);