let number = 8
let pembagi = 0

for (let i = 1; i <= number; i++) { // 1, 2, 3, 4, 5, 6, 7
    if (number % i === 0) {
        pembagi++
    }
}

console.log(pembagi == 2 ? "Prime number" : "Not Prime number")