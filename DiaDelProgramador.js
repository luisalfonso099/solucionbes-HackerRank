function dayOfProgrammer(year) {
    // Write your code here
    if(year === 1918){
        return '26.09.1918'
    }

    if(year <= 1917){
        if(year % 4 == 0){
            console.log( '12.09.'+ year)
            return '12.09.'+year
        }else{
            console.log( '13.09.'+ year)
            return '13.09.'+ year
        }
    }

    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        console.log('12.09.'+year);     
        return   '12.09.'+year
    }else{
        console.log('13.09.'+year);
        return   '13.09.'+year

    }

}

dayOfProgrammer(1700)
console.log(2024 % 4);