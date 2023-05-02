//TDD
// ❌ Red – Start by writing a test that contains just enough code to test the behavior of the next feature you want to implement. 
// Since the feature isn’t implemented yet, this test will fail (giving you a red error message).
//
// ✅ Green – Next, write just enough code to make your test pass (giving you a green success message) without worrying too much about design or elegance.
//
// 🔄 Refactor – Once your test is passing, refactor your code to make sure it’s clean and well-written.
// Your test should continue to pass as you refactor, and if it fails, that’s a signal that your refactoring broke something.

// You *must* make a Git commit after each *phase* of the TDD cycle.

// | Arabic | Roman numeral |
// | ------ | ------------- |
// | 1      | I             |
// | 5      | V             |
// | 10     | X             |
// | 50     | L             |
// | 100    | C             |
// | 1000   | M             |

module.exports = function rn_converter(input) {
    /*
     * Short-circuit checks if input is not a string
     */
    if(!input || typeof input !== "string") {
        return { pass: false }
    }

    /*
     * Perform individual verification checks.
     */
    const checks = {
        length: _containsAtLeast8Chars(password),
        lowercase: _containsOneLowercase(password),
        uppercase: _containsOneUppercase(password),
        digit: _containsOneDigit(password),
        symbol: _containsOneSymbol(password),
        noInvalid: _containsNoInvalidChars(password)
    }

    /*
     * Determine overall verification result based on individual checks.
     */
    const pass = (
        checks.length &&
        checks.lowercase &&
        checks.uppercase &&
        checks.digit &&
        checks.symbol &&
        checks.noInvalid
    )

    return { ...checks, pass: pass }
}

function _containsAtLeast8Chars(password) {
    return password && password.length >= 8
}