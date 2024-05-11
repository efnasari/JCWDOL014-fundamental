// closure function
function greeting(name){
    const defaultMessage = "Hello"

    return function() {
           return defaultMessage 
    }
}

const greetingDavid = greeting("David")
console.log(greetingDavid)
//console.log(greetingDavid)


// recursive
/*function countDown(fromNUmber){
    console.log(fromNUmber)

    let necxtNumber = fromNUmber -1 
    if (necxtNumber > 0){
        countDown(necxtNumber)
    }
}
countDown(3)*/
//------

// arrow function
//cons
