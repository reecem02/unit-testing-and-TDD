const verifyPassword = require("../verifyPassword")

//good tests
test("Valid password with all minimum requirements", function (){
    const password = "ABCabc123!"
    const result = verifyPassword(password)
    expect(result.pass).toBe(true)
})

test("Valid password with valid symbols", function (){
    const password = "aA1!!!!!!@@@@@#####$$$%%%&&**"
    const result = verifyPassword(password)
    expect(result.pass).toBe(true)
})

test("Valid password at min length", function (){
    const password = "AbC1!l!@"
    const result = verifyPassword(password)
    expect(result.pass).toBe(true)
})

//bad tests

test("invalid length", function (){
    const password = "Ab1!"
    const result = verifyPassword(password)
    expect(result.pass).toBe(false)
})

test("invalid symbol", function (){
    const password = "Ab1!!!!!!--"
    const result = verifyPassword(password)
    expect(result.pass).toBe(false)
})

test("no upper cases used", function (){
    const password = "ab1!!!!!!!!"
    const result = verifyPassword(password)
    expect(result.pass).toBe(false)
})

test("no lower cases used", function (){
    const password = "AB1!!!!!!!!"
    const result = verifyPassword(password)
    expect(result.pass).toBe(false)
})

test("no symbols used", function (){
    const password = "Ab1111111111111111"
    const result = verifyPassword(password)
    expect(result.pass).toBe(false)
})

test("no digits used", function (){
    const password = "Ab!!!!!!!!!!!"
    const result = verifyPassword(password)
    expect(result.pass).toBe(false)
})