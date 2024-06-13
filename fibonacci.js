// iterative approach
const fibs = num => {
    let first = 0
    let second = 1

    for (i = 2; i < num; i++) {
        let temp = first + second
        first = second
        second = temp
    }
    return first + second
}
console.log(fibs(16))

// recursive approach
const fibsRec = num => {
    if (num === 0) return 0

    if (num === 1) return 1

    else return fibsRec(num - 1) + fibsRec(num - 2)
}

console.log(fibsRec(16))