var reverseString = function(s) {
    let reverseWord = ""
    let strInp = s.join()
    let replaceStr = strInp.replaceAll(",","")

    //console.log(replaceStr)
    for (let i = replaceStr.length - 1; i >= 0; i--) {  
       reverseWord += replaceStr.charAt(i)
       if (i > 0) {
        reverseWord += ","
       }
    }
    return reverseWord.split(",")
};

console.log(reverseString(["h","e","l","l","o"]))