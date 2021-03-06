# Bracket test

#### Chris Coray

## Requirements to Run:

- NodeJS installed locally/globally &mdash; tested using 14.16.1</li>
- Included JS file

## Challenge:

This was a quick coding challenge presented by a potential employer:

Write a method that takes a string argument and returns whether or not characters in the string have matching brackets, meaning for every `{` there is a corresponding `}` bracket.

Return `true` if they do, return `false` if they do not.

## Instructions:

1. Checkout repository or download JS file separately.
2. Open Command Line prompt and navigate to where file is located.
3. Run script using `node bracket_test.js`.
4. The script will auto-execute and print test results to the terminal/console.

#### Expected Output:

For the following tests, we expect the accompanying result:

| Test       | Expected Result |
| ---------- | --------------- |
| {}         | True            |
| }{         | False           |
| {{}        | False           |
| ""         | True            |
| {"a": "1"  | False           |
| {"a": "1"} | True            |
| },{}       | False           |
| {},{}      | True            |

#### Screenshot of Results:

![Expected Output Screenshot](https://github.com/ChrisLCoray/coray-bracket-test/blob/main/expected-results.png)
