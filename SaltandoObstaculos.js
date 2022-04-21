function hurdleRace(k, height) {
    // Write your code here
    const max = Math.max(...height)
    const res = max - k
    return  res
}

hurdleRace(4,[1,6,3,5,2])