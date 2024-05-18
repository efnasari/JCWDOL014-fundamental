var differenceOfSum = function(nums) {
    let elementSum = 0
    let digitSum = 0
    let num2 = 0
    let num3 = 0
    let result
    
    for  (let i = 0 ; i < nums.length ; i++) {
        //console.log(`nums ${i} ${nums[i]}`)
        elementSum = elementSum + Number(nums[i])
        
        if (nums[i].toString().length > 1) {
            num3 = 0
            for (let j = 0 ; j < nums[i].toString().length ; j++ ) {
                num3 += Number(nums[i].toString().substr(j,1))
            }
            digitSum = digitSum + num3
            
        } else {           
            num2 = Number(nums[i])
            digitSum = digitSum + num2
        }        
    }


    return result = elementSum - digitSum
};

console.log(differenceOfSum([1,2,3,4])) //DONE