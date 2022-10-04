function formingMagicSquare(s) {
    // flatten multi dimensional array into single array
    // flatten the array
    s = s.flat();
    // or use:
    // [].concat.apply([], s)
    // [].concat(...s)
    // s.reduce((acc, curr) => acc.concat(curr), [])

    // possible magic squares
    const squares = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];

    // loop the squares array
    return squares.reduce((cost, innerArr, i) => {
        let currCost = innerArr.reduce((currCost, value, j) => currCost += Math.abs(value - s[j]), 0);
            
        if (currCost < cost) cost = currCost;
        
        return cost;
    }, Infinity);
};