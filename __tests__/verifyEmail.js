const verifyEmail = require("../verifyEmail")

//3 good tests

test("email with name and domain", function (){
    const email = "morgaree@oregonstate.edu"
    const result = verifyEmail(email)
    expect(result).toBe(true)
})

test("email has multiple . in the name and is valid", function (){
    const email = "morgan.reece.hi@gmail.com"
    const result = verifyEmail(email)
    expect(result).toBe(true)
})

test("email has numbers in it", function (){
    const email = "reece123@gmail.com"
    const result = verifyEmail(email)
    expect(result).toBe(true)
})

//5 bad tests

test("name is missing", function (){
    const email = "@gmail.com"
    const result = verifyEmail(email)
    expect(result).toBe(false)
})

test("no address", function (){
    const email = "reecemorgan"
    const result = verifyEmail(email)
    expect(result).toBe(false)
})

test("domain name end is missing", function (){
    const email = "morgaree@oregonstate"
    const result = verifyEmail(email)
    expect(result).toBe(false)
})

test("domain name front is missing", function (){
    const email = "morgaree@.com"
    const result = verifyEmail(email)
    expect(result).toBe(false)
})

test("domain name front is missing", function (){
    const email = "()@gmail.com"
    const result = verifyEmail(email)
    expect(result).toBe(false)
})