const rn_converter = require("../rn_converter.js")

test("is a valid roman numeral under 5 test #1", function (){
    const rn = "3"
    const result = rn_converter(rn)
    expect(result).toBe("III")
})

test("is a valid roman numeral under 5 test #2", function (){
    const rn = "0"
    const result = rn_converter(rn)
    expect(result).toBe("")
})

test("tests number 5", function (){
    const rn = "5"
    const result = rn_converter(rn)
    expect(result).toBe("V")
})