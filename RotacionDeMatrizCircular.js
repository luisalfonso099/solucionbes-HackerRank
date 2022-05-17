function circularArrayRotation(a, k, queries) {
    // Write your code here
   for (let i = 0; i < k; i++) {
    let ultimo = a.pop();
    a.unshift(ultimo);
   }

   let res = [];
   for (let i = 0; i < queries.length; i++) {
        const q = queries[i]
        res.push(a[q])
   }
   console.log(res);
   return res

}

circularArrayRotation([3,4,5],2,[1,2]);