const rn_converter = require("../rn_converter.js")

test("is a valid roman numeral", function (){
    const rn = "3"
    const result = rn_converter(rn)
    expect(result).toBe("III")
})