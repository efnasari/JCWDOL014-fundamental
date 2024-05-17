var arrayStringsAreEqual = function(word1, word2) {
   let strcek1 =JSON.stringify(word1)
    strcek2 =JSON.stringify(word2)

    let a = strcek1.replaceAll(',',' ')

   // checkEqual =  === JSON.stringify(word2)
    console.log(strcek1)
    console.log(a)
    //console.log(typeof word1)
    // console.log(typeof JSON.stringify(word1))
   // return checkEqual
};

arrayStringsAreEqual(["ab", "c"],["a", "bc"])