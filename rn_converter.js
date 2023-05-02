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
    
    //what is returned
    answer = ""
    //array holding roman numerals
    let rn = ['M', 'C', 'L', 'X', 'V', 'I']
    //corresponding array holding roman numeral values
    let num = [1000, 100, 50, 10, 5, 1]

    for(i = 0; i < rn.length; i++){
        while(input - num[i] >= 0){
            //adds corresponding rn to answer string
            answer = answer + rn[i];
            input = input - num[i]
        }
    }
    return answer
    // if(input < 5 && input >= 0){
    //     return "I".repeat(input);
    // }

    // if(input == 5){
    //     return "V"
    // }
    
    // if(input > 5 && input < 9){
    //     return "V" + "I".repeat(input - 5)
    // }
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