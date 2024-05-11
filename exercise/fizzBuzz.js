

function fizzBuzz(n) {

        for (let i=1; i <=n ; i++) {
            let res= " "
            if (i % 3 == 0 && i % 5 == 0) {
             res += "FizzBuzz"
                
            } else if (i % 3 == 0) {
                res += "Fizz,"
                   
            } else if (i % 5 == 0) {
             res += "Buzz,"
            
            }  else {
             res += i + ","
            
            
            }
            console.log(res)
         }
         
       
}

fizzBuzz(15)

/*for (let i=0; i < 1; i++) {
    for (let j=0; j<=i; j++) {
        console.log(j + ",")
    }
    //console.log(i)
}*/