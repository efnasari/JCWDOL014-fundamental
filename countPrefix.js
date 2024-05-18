var prefixCount = function(words, pref) {
    let countPrefix = 0
    for (let i =0 ; i < words.length ; i++) {
        let lengPref = pref.length
        //console.log(words[i].slice(1,2))
        if (words[i].slice(0,lengPref) === pref) {
            countPrefix++
            //console.log(countPrefix)
        }
    }
    return countPrefix
};

console.log(prefixCount(["leetcode","win","loops","success"],"code")) // DONE