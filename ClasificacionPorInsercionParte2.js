function insertionSort2(n, arr) {
    for (let i = 0; i < arr.length; i++) {
        let x = 0
        let el = arr[i];
        let elAde = arr[i+1];
        let elAnt = arr[i-1];
        if( el < elAde){
          console.log(arr.join(' '));
        }
        if(el > elAde){
            arr.splice(i,1,elAde)
            arr.splice(i+1,1,el )
            el = arr[i]
            elAnt = arr[i-1]
            while (el < elAnt) {

                i = i -1
                x ++
                arr.splice(i,1,el)
                arr.splice(i+1,1,elAnt)
                el = arr[i];
                elAnt = arr[i-1]
            }
            console.log(arr.join(' '));
            i = i + x
            x = 0
        }
    }
}
insertionSort2(6,[1, 4, 3, 5, 6, 2])