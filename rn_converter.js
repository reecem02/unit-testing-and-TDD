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

    if(input < 5 && input >= 0){
        return "I".repeat(input);
    }
}
//     const checks = {
//         noInvalid: _isonlydigits(input)
//     }

//     const pass = (
//         checks.noInvalid
//     )
// }

// function _isonlydigits(input) {
//     const regex = /[0-9]/
//     return regex.test(input)
// }