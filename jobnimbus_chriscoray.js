/**
 * JobNimbus Technical test
 * Chris Coray
 * 
 * Problem 1:
 * Write a method that takes a string argument and returns whether or not characters in the string have matching brackets.
 * Meaning for every { there is a corresponding } bracket. 
 * Return true if they do, return false if they do not. 
 * 
 * Please unit test with the following use cases (and any others you choose to ensure functionality):
 * 
 * Test string - Expected result:
 * 
 * {} - True
 * }{ - False (closed bracket can't proceed all open brackets.)
 * {{} - False (one bracket pair was not closed)
 * "" - True. (no brackets in the string will return True)
 * 
 **/

(function () {
    function testStringBrackets(testString) {
        var brokenBracket = 0;
        var openBracket = -1;

        for (var i = 0; i < testString.length; i += 1) {
            var thisChar = testString[i];
            if (thisChar === '{') {
                if (openBracket < 0) {
                    openBracket = i;
                } else {
                    // More than one open bracket found in a row, increment broken count
                    brokenBracket += 1;
                }
            } else if (thisChar === '}') {
                if (openBracket < 0) {
                    // oops! Closing bracket before open found, increment broken count
                    brokenBracket += 1;
                } else if (i > openBracket) {
                    // Bracket set found, reset openBracket position
                    openBracket = -1;
                }
            }
            if ((i + 1) === testString.length && openBracket > -1) {
                brokenBracket += 1;
            }
        }
        if (brokenBracket > 0) {
            return false;
        } else {
            return true;
        }
    }

    var testStrings = [
        '{}', // True
        '}{', // False
        '{{}', // False
        '""', // True
        '{"a": "1"', // False
        '{"a": "1"}', // True
        '},{}', // False - no matching open bracket
        '{},{}' // True - double matching brackets
    ];

    for (var i = 0; i < testStrings.length; i += 1) {
        var s = testStrings[i];
        console.log('String ' + s + ' test result = ' + testStringBrackets(s));
    }
}());
