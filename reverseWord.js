var reverseWords = function(s) {
    let reverseWord = ""
    for (let i = s.length - 1; i >= 0; i--) {
        // console.log(word.charAt(i))
        reverseWord += s.charAt(i)
        console.log(reverseWord)
    }

    let kataBalik = reverseWord.split(" ")
    let result = []
    let j = 0
    for (let i = kataBalik.length - 1 ; i >=0 ; i--){
           result[j] = kataBalik[i]  
           console.log(result[j])
           //console.log("kataBalik[i]")
           j++
    }
    console.log(result.join("-").replaceAll("-"," "))
 };

reverseWords ("vector<string> split (string s, char delimiter)")