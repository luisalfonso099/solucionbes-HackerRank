function saveThePrisoner(priconeros, dulces, silla) {
    // Write your code here
    console.log((dulces-1 + silla)%priconeros || priconeros);



     return (dulces-1 + silla)%priconeros || priconeros;
}


saveThePrisoner(4,6,2)



// int n: the number of prisoners
// int m: the number of sweets
// int s: the chair number to begin passing out sweets from