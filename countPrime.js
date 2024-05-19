var countPrimes = function(n) {
    
    
    let countPrime = 0


    for (j = 1 ; j <= n ; j++) {
        let pembagi = 0
        //j = 3
        for (let i = 1; i <= j; i++) { // 1, 2, 3, 4, 5, 6, 7
            //let pembagi = 0
            if (j % i === 0) {
                pembagi++
            }
        }
        
        if (pembagi == 2) {
            //console.log("prima")
            countPrime = countPrime + 1
            //console.log(countPrime)
            
        } else {
            //console.log("bukan prima")
            countPrime = countPrime + 0
            //console.log(countPrime)
            
        }
        
        //console.log(countPrime)
        //console.log("-----")
    }
        

    return countPrime

};

console.log(countPrimes(10))