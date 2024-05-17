var lengthOfLastWord = function(s) {
    let trimS = s.trim()
    let myArr = trimS.split(" ")
    let lastWord = myArr[myArr.length-1].length
    //let nWord = s.length
    //let a = s.charAt(2)
    //console.log(s)
    console.log(lastWord)


// myArr.forEach(isiarray => {
//     console.log(isiarray)
//    });

};

lengthOfLastWord("H   fly me   to   the moon  ")