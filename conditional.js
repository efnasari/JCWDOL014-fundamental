let age =16

if (age >= 17) {
    console.log("you create ID")
} else {
    console.log ("not enough to create ID")
}

let grade = "B"

if (grade === "A") {
    console.log ("Excellent")
} else if (grade === "B") {
    console.log("Great")
 } else if (grade === "C") {
    console.log ("Average")
 } else {
    console.log ("sdsadsadasd")
 }

 let now = new Date()
 let day = now.getDay()

 switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    default:
        console.log("Sabtu")
 }

let a = ""
if (a) {
    console.log(true)
} else {
    console.log(false)
}

let kata = "javascript"

console.log(kata === "javascript" ? "javascript" : "not javascript") // ternary operator, mempersingkat penulisan if else
console.log(grade == "A" ? "Excellent" : grade == "B" ? "Good" : invalid)

