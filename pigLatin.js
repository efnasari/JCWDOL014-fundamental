// pig latin
//     input = "Pig latin is cool"
//     output = "igPay atinlay siay oolcay"

function myFunc(input) {
    let res = []

    input.split(" ").forEach(item => {
        res.push(item.slice(1) + item.charAt(0) + "ay")
    })
    
    return res.join(" ")
}

console.log(myFunc("Pig latin is cool"))


console.log("abcd".replace("b", "d"))