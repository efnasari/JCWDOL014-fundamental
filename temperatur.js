var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15
    let fahrenheit = celsius * 1.80 + 32.00
    var ans = [kelvin,fahrenheit]
    //console.log(kelvin)
    return ans
};

convertTemperature(36.50)
//console.log(arrRes[0])