var truncateSentence = function(s, k) {
    let arrInp = s.split(" ")
    let result = "" 

    for (let i = arrInp.length ;i > k ; i--) {
        result = arrInp.pop()
    }
    //console.log(arrInp.pop())
    return arrInp.join(" ")
};

console.log(truncateSentence("Hello how are you Contestant",4))