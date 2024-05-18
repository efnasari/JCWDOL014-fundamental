var removeTrailingZeros = function(num) {
    //let strInp = num
    //let  searchZero = num.lastIndexOf('0')
    let resZero = ""
    let result = ""
    let flag = 0
  
    //console.log(num.charAt(searchZero))
    let i = num.length - 1
    while ( i >= 0) {
        if (num.charAt(i) == "0") {
            resZero = i
            console.log(resZero)
            flag = "0"
            i--
        } else {
            if (flag == "0") {
                //"ada 0 di belakang"
                resZero = i + 1
            } else {
                //"yang gak ada 0 di belakang"
                resZero = num.length
            }
            
            console.log(flag)
            break
        }

    }
  
    result = num.slice(0,resZero)
    return result
};

console.log (removeTrailingZeros("123"))