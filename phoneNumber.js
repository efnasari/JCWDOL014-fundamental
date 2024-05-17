// formating phonenumber
//     input = "1234567890"
//     output = "(123) 456-7890"

//     input = "4255551212"
//     output = "(425) 555-1212"


function formatPhoneNumber(input){
    let format = "(***) ***-****"

    for (let i = 0; i < input.length; i++) {
        format = format.replace("*", input.charAt(i))
    }

    return format
}

console.log(formatPhoneNumber("1234567890"))
