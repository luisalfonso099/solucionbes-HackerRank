function repeatedString(s, n) {
    // Write your code here

  let c  = 0,
      ca = 0,
      r  = n % s.length

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      c++

      if (i < r)
        ca++
    }
  }

  return ((n - r) / s.length * c) + ca
   
}
repeatedString("cfimaakj",10)
