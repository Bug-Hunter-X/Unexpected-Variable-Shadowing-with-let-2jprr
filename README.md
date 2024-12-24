# Unexpected Variable Shadowing in JavaScript

This repository demonstrates a common error in JavaScript related to variable shadowing when using the `let` keyword.  The code in `bug.js` showcases how declaring a variable with `let` inside a block scope can create a new variable, shadowing any variable with the same name in a parent scope. This can lead to unexpected behavior if not handled carefully.

The `bugSolution.js` file offers a solution by carefully choosing variable names or using more structured code to prevent shadowing.  Always be mindful of variable scopes when using `let` and `const` to prevent this type of error.