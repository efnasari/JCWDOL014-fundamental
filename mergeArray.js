var mergeAlternately = function(word1, word2) {
    let mergeArr = []
    
        
        if (word1.length >= word2.length) {
            for (let i = 0 ; i < word1.length ; i++) {
                    mergeArr.push(word1[i],word2[i])               
                }
            
        } else {
            for (let i = 0 ; i <= word1.length ; i++) {     
                if (i < word1.length) {
                    mergeArr.push(word1[i],word2[i])
                } else {
                    for (let j = i ; j < word2.length ; j++) {
                        mergeArr.push(word2[j])
                    }
                }
            
                   
                }
        }
    console.log(mergeArr.join("-").replaceAll("-",""))
    return mergeArr.join("-").replaceAll("-","")
};

mergeAlternately("ab","pqrs")