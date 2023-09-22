function appendAndDelete(s, t, k) {
    let s_copy = Array.from(s); 
    let counter = 0;
    for (let i =0 ; i< s.length; i++){
        if(s[i] !== t[i])
        {
            while(i< s.length )
            {
                s_copy.pop();
                counter++;
                i++;
            }
        }
    }
    if(s.length === t.length && counter === 0){
    
        return (k > 1 && k%2 == 0 )|| k >= t.length *2  ? 'Yes' : 'No';
    }
    if(s_copy.length === t.length){
        return k > counter ? 'Yes' : 'No';
    }
    if(t.length > s_copy.length)
    {
        let charRequired = t.length - s_copy.length;
        if(counter === 0){
           return k >=  2 + charRequired && k % charRequired ==0 ? 'Yes' : 'No';
        }
    
      return k >=  counter + charRequired ? 'Yes' : 'No';
    }
}

let res = appendAndDelete( 'hackerhappy' , 'hackerrank' , 8 );

console.log(res);