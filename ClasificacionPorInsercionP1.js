function insertionSort1(n, arr) {
    // Write your code here
    let el = arr[n-1]
    arr.reverse()

    for (let i = 0; i < arr.length; i++) {
        if(el > arr[i+1]){
            arr.splice(i,1,el)
            arr.reverse()
            console.log(arr.join(' '));
            return
        }
        if(i == arr.length -1){
            arr.splice(i,1,el)
            arr.reverse()
            console.log(arr.join(' '));

        }
        if(el < arr[i+1]){
            arr.splice(i,1,arr[i+1])
            arr.reverse()
            console.log(arr.join(' '));
        }
        
      
        arr.reverse()
         
    }

}

insertionSort1(10,[2,3,4,5,6,7,8,9,10,1])