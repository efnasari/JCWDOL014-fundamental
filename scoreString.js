var scoreOfString = function(s) {
    
    let res = 0
    for (let i = 0 ; i < s.length ; i++) {
        let kodeAscii = s.charCodeAt(i)
        console.log(kodeAscii)
        res = res + kodeAscii
    }
    
    return res
};

scoreOfString("hello")

// var string = "Some string";

// for (var i = 0; i < string.length; i++) {
//   console.log(string.charCodeAt(i));
// }