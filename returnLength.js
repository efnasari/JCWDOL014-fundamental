var argumentsLength = function(...args) {
    args.forEach(isiArr => {
            console.log(isiArr)
           })

    console.log(args.length)
    //console.log(args[0])
};

argumentsLength(["5","8","12"])