function receivesAFunction (callback) {
    callback()
    return "nice"
}

const returnsANamedFunction = () => {
    return receivesAFunction;
}

const returnsAnAnonymousFunction = () => {
    return () => console.log("Hello World")
}