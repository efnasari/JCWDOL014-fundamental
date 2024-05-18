var firstPalindrome = function(words) {
    //let word = "madam" // 5 - 1
    let reverseWord = [] // kata yang dibalik
    console.log(reverseWord.length)
    //let strWord = words.join()

    //console.log(strWord) //m

    for (let i = 0 ; i < words.length ; i++) {
        for (let j = (words[i].length) - 1; j >= 0; j--) {
            // console.log(word.charAt(i))
            //console.log(j)
            let test = words[i].charAt(j)
           // console.log(`test =${test}`)
          // console.log(reverseWord[3])
        //    if (i = 0) {
        //     reverseWord[i] = ""
        //    }
        let coba = reverseWord.length
        //console.log(coba)
           //console.log(`reverse1 ${reverseWord[i].length}`)
           //if (reverseWord[])
            reverseWord[i] += words[i].charAt(j)
//console.log(`reverse2 ${reverseWord[i].length}`)
              // console.log(`length reverse ${reverseWord[i].length}`) 
            //for (let i = words[].length - 1; i >= 0; i--) {
                // console.log(word.charAt(i))
               // reverseWord += words.charAt(i)
            //}
        
            // if (word == reverseWord) {
            //     console.log(`${word} is palindrome`)
            // } else {
            //     console.log(`${word} is not palindrome`)
            // }
        }
        //console.log(words[i].length-1)
        //console.log(words[i])
        
    }

   //console.log(`length reverser ${reverseWord.length}`)
    return reverseWord[1]//.join(",")
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))