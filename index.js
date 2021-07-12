function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction()  {
    return namedFunction
}

let returnsAnAnonymousFunction = (function () {
    return function(){}
})

function namedFunction () {
}

