var alternateDigitSum = function(n) {
    let strInput = n.toString()
    let result = 0
    for (let i = 0; i < strInput.length ; i++) {
        if (i == 0) {
            result += Number(strInput.substr(i,1))
            //console.log(`${i} ${result}`)
        } else if (i % 2 == 1) {
            //console.log(`ganjil ${i} ${result}`)
            result -= Number(strInput.substr(i,1))
        } else {
            //console.log(`genap ${i} ${result}`)
            result += Number(strInput.substr(i,1))
        }
    }
    return result
};

console.log(alternateDigitSum(886996)) //DONE

//num3 += Number(nums[i].toString().substr(j,1))