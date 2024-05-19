var discountPrices = function(sentence, discount) {
    let arrInp = sentence.split(" ")
    let arrOut = []
    let replaceStr = ""

    for (let i = 0 ; i < arrInp.length ; i++) {
        //console.log(`${i} ${arrOut[i]}`)
        if (arrInp[i].includes("$") > 0 ) {
            // jika ada $ di depan
            
           if (arrInp[i].lastIndexOf("$") > 0) {
            console.log("aaaa")
                arrOut.push(arrInp[i])
           }  else {
            
            let resNum = arrInp[i].substring(1,arrInp[i].length)
            // console.log(`resNum ${resNum}`)
            //console.log(resNum)
            if (resNum == "") {
                console.log("bbb")
                arrOut.push(arrInp[i])
            } else if (isNaN(resNum) == true) {
                console.log("cccc")
                arrOut.push(arrInp[i])
            } else {
                
                // console.log(Number.isInteger(resNum))
                
                if (Number.isInteger(resNum) === false) {
                    console.log("ddd")
                    console.log(resNum)
                   arrOut.push(arrInp[i])
                } else {
                    console.log("eee")
                    let resDisc = (resNum - (resNum * (discount/100))).toFixed(2) // menghitung diskon dengan 2 decimal
                   // console.log(resDisc)
                    arrOut.push(`$${resDisc}`)
               }
                
            }
            //console.log("-----")
            
           }
            
        } else {
            // jika tidak ada $ di depan
            console.log("fff")
            arrOut.push(arrInp[i])            
        }
    }
    let strOut = arrOut.join().replaceAll(","," ")
    return strOut
};

console.log(discountPrices("1 2 $3 4 $5 $6 7 8$ $9 $10$", discount = 100))

// console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", discount = 50))

//"$1e9"
//console.log(discountPrices("$1e9", discount = 50))