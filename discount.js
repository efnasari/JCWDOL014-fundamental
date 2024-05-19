var discountPrices = function(sentence, discount) {
    let arrInp = sentence.split(" ")
    let arrOut = []
    let replaceStr = ""

    for (let i = 0 ; i < arrInp.length ; i++) {
        //console.log(`${i} ${arrOut[i]}`)
        if (arrInp[i].includes("$") > 0 ) {
            // jika ada $ di depan
            //replaceStr = arrInp[i].replace("$",)
           if (arrInp[i].lastIndexOf("$") > 0) {
            arrOut.push(arrInp[i])
           } else {
            
            let resNum = arrInp[i].substring(1,arrInp[i].length)
            let resDisc = (resNum - (resNum * (discount/100))).toFixed(2) // menghitung diskon dengan 2 decimal
            //console.log(discount/100)
            // console.log(`resNum ${resNum}`)
            // console.log(`disc ${resDisc}`)
            // console.log("-----")
            arrOut.push(`$${resDisc}`)
           }
            
        } else {
            // jika tidak ada $ di depan
            arrOut.push(arrInp[i])            
        }
    }
    let strOut = arrOut.join().replaceAll(","," ")
    return strOut
};

console.log(discountPrices("1 2 $3 4 $5 $6 7 8$ $9 $10$", discount = 100))