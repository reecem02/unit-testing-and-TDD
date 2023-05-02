const rn_converter = require("../rn_converter.js")

test("is a valid roman numeral", function (){
    const rn = "III"
    const result = verifyEmail(rn)
    expect(result).toBe(true)
})