var subtractProductAndSum = function(n) {
   
    let prod = 1
    let sum = 0
    let result
    
    for  (let i = 0 ; i < n.toString().length ; i++) {
        //console.log(n.toString().substr(i,1))
        prod = prod * n.toString().substr(i,1)
        sum = sum + Number(n.toString().substr(i,1))
        //console.log(sum)
    }
   
    return result = prod - sum
};

console.log(subtractProductAndSum(4421)) //DONE