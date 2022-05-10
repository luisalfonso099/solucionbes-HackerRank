function chocolateFeast(n, c, m) {
    // Write your code here
    let dulces = Math.floor(n / c);

    let resto = 0

    let total = dulces;

    while (dulces >= m) {
        resto = dulces % m

        dulces = Math.floor( dulces / m ) + resto

        total += dulces - resto
        
    }
    console.log(total);

    return total

}

chocolateFeast(15,3,2)