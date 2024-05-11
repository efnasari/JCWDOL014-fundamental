function getMessage(firstName) {
    function sayHello() {
        return "Hello " + firstName + "."
    }

    function welcomeMessage() {
        return "Welcome to Purwadhika" 

    }

    return sayHello() + " " + welcomeMessage()
}

const message = getMessage("David")
console.log(message)