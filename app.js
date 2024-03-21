// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// One dollar is:
let oneDollarIs = {
    "JPY": 151.32, // japan yen
    "EUR": 0.92, // euro
    "GBP": 0.78, // british pound
}
// One yen is:
let oneYenIs = {
    "EUR": 0.0061, // euro
    "USD": 0.006, // us dollar
    "GBP": 0.0052, // british pound
}
// One pound is:
let onePoundIs = {
    "JPY": 193.42, // japan yen
    "USD": 1.28, // us dollar
    "EUR": 1.17, // euro
}
//Euro to...
const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a yenes
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    // Retornamos el valor en yenes
    return valueInYen;
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromEuroToPound = function (valueInEuro) {
    // Convertimos el valor en pounds
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    // Retornamos el valor en pounds
    return valueInPound;
}

//Dollar to...
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * oneDollarIs["JPY"];
    // Retornamos el valor en yenes
    return valueInYen;
}
const fromDollarToEuro = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInEuro = valueInDollar * oneDollarIs["EUR"];
    // Retornamos el valor en yenes
    return valueInEuro;
}
const fromDollarToPound = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInPound = valueInDollar * oneDollarIs["GBP"];
    // Retornamos el valor en yenes
    return valueInPound;
}

//Yen to...
const fromYenToEuro = function(valueInYen) {
    // Convertimos el valor a yenes
    let valueInEuro = valueInYen * oneYenIs["EUR"];
    // Retornamos el valor en yenes
    return valueInEuro;
}
const fromYenToDollar = function(valueInYen) {
    // Convertimos el valor a yenes
    let valueInDollar = valueInYen * oneYenIs["USD"];
    // Retornamos el valor en yenes
    return valueInDollar;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a yenes
    let valueInPound = valueInYen * oneYenIs["GBP"];
    // Retornamos el valor en yenes
    return valueInPound;
}

//Poun to...
const fromPoundToYen = function(valueInPound) {
    // Convertimos el valor a yenes
    let valueInYen = valueInPound * onePoundIs["JPY"];
    // Retornamos el valor en yenes
    return valueInYen;
}
const fromPoundToDollar = function(valueInPound) {
    // Convertimos el valor a yenes
    let valueInDollar = valueInPound * onePoundIs["USD"];
    // Retornamos el valor en yenes
    return valueInDollar;
}
const fromPoundToEuro = function(valueInPound) {
    // Convertimos el valor a yenes
    let valueInEuro = valueInPound * onePoundIs["EUR"];
    // Retornamos el valor en yenes
    return valueInEuro;
}

module.exports = { fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromDollarToEuro, fromDollarToPound, fromYenToEuro, fromYenToDollar, fromYenToPound, fromPoundToYen, fromPoundToDollar, fromPoundToEuro}