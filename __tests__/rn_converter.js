const rn_converter = require("../rn_converter.js")

test("is a valid roman numeral under 5 test #1", function (){
    const rn = "3"
    const result = rn_converter(rn)
    expect(result).toBe("III")
})


test("tests number 5", function (){
    const rn = "5"
    const result = rn_converter(rn)
    expect(result).toBe("V")
})

test("tests numbers in between 5 and 9", function (){
    const rn = "6"
    const result = rn_converter(rn)
    expect(result).toBe("VI")
})

test("tests numbers in between 5 and 9 test 2", function (){
    const rn = "8"
    const result = rn_converter(rn)
    expect(result).toBe("VIII")
})

test("tests the bigger numbers to show rn 10 (X)", function (){
    const rn = "14"
    const result = rn_converter(rn)
    expect(result).toBe("XIIII")
})

test("tests stacking 10 and 50 together", function (){
    const rn = "66"
    const result = rn_converter(rn)
    expect(result).toBe("LXVI")
})