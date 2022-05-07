function superReducedString(s) {
    // Write your code here
    let x = s.split('')
    let pos = 0

    for (let i = 0; i < s.length; i++) {
        if(x[i] == x[i+1] && x[i] !== undefined){
            console.log('entro',x[i],i);
            x.splice(i,2)
            i = i -2
        }
        if(x[i] == x[i-1]&& x[i] !== undefined){
            console.log('entrosss',x[i],i);
            x.splice(i-1,2)
        }
    } 

    if(x.length > 0){
        console.log(x.join(''));
        return x.join('')
    }else {
        console.log('Empty String');
        'Empty String'
    }

}

superReducedString('acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj')