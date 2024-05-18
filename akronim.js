var isAcronym = function(words, s) {
    let countAkronim = 0
    let result
    if (words.length != s.length) {
        result = false
    } else {
        for (let i = 0 ; i < words.length ; i++) {
            //console.log(words[i].slice(0,1))
            
                if (words[i].slice(0,1) == s.substr(i,1)) {
                    countAkronim++
                }
        }
        if (countAkronim < words.length) {
            result = false
        } else {
            result = true
        }
    }
    return result
};

console.log(isAcronym(["a","b","c"],"abcd")) //DONE

