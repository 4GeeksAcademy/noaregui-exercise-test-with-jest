//Euro to...
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 156.05 yenes", function() {
    
    const { fromEuroToYen } = require('./app.js');

    const yen = fromEuroToYen(1);

    const expected = 1 * 156.5;

    expect(fromEuroToYen(1)).toBe(expected); 
})

test("One euro should be 0.87 pounds", function() {
    
    const { fromEuroToPound } = require('./app.js');

    const pound = fromEuroToPound(1);

    const expected = 1 * 0.87;

    expect(fromEuroToPound(1)).toBe(expected); 
})

//Dollar to...
test("One dollar should be 151.32 yens", function() {
    
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(1);

    const expected = 1 * 151.32;

    expect(fromDollarToYen(1)).toBe(expected); 
})
test("One dollar should be 0.92 euros", function() {
    
    const { fromDollarToEuro } = require('./app.js');

    const euro = fromDollarToEuro(1);

    const expected = 1 * 0.92;

    expect(fromDollarToEuro(1)).toBe(expected); 
})
test("One dollar should be 0.78 pounds", function() {
    
    const { fromDollarToPound } = require('./app.js');

    const euro = fromDollarToPound(1);

    const expected = 1 * 0.78;

    expect(fromDollarToPound(1)).toBe(expected); 
})

//Yen to...
test("One yen should be 0.0061 euros", function() {
    
    const { fromYenToEuro } = require('./app.js');

    const euro = fromYenToEuro(1);

    const expected = 1 * 0.0061;

    expect(fromYenToEuro(1)).toBe(expected); 
})
test("One yen should be 0.006 dollars", function() {
    
    const { fromYenToDollar } = require('./app.js');

    const dollar = fromYenToDollar(1);

    const expected = 1 * 0.006;

    expect(fromYenToDollar(1)).toBe(expected); 
})
test("One yen should be 0.0052 pounds", function() {
    
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(1);

    const expected = 1 * 0.0052;

    expect(fromYenToPound(1)).toBe(expected); 
})

//Pound to...
test("One pound should be 193.42 yens", function() {
    
    const { fromPoundToYen } = require('./app.js');

    const yen = fromPoundToYen(1);

    const expected = 1 * 193.42;

    expect(fromPoundToYen(1)).toBe(expected); 
})
test("One pound should be 1.28 dollars", function() {
    
    const { fromPoundToDollar } = require('./app.js');

    const dollar = fromPoundToDollar(1);

    const expected = 1 * 1.28;

    expect(fromPoundToDollar(1)).toBe(expected); 
})
test("One pound should be 1.17 euros", function() {
    
    const { fromPoundToEuro } = require('./app.js');

    const euro = fromPoundToEuro(1);

    const expected = 1 * 1.17;

    expect(fromPoundToEuro(1)).toBe(expected); 
})