/**
    JavaScript provides 6 different operators to perform basic arithmetic operations on numbers.

    +: The addition operator is used to find the sum of numbers.
    -: The subtraction operator is used to find the difference between two numbers
    *: The multiplication operator is used to find the product of two numbers.
    /: The division operator is used to divide two numbers.

    2 - 1.5; //=> 0.5
    19 / 2; //=> 9.5

    %: The remainder operator is used to find the remainder of a division performed.

    40 % 4; // => 0
    -11 % 4; // => -3
    
    **: The exponentiation operator is used to raise a number to a power.

    4 ** 3; // => 64
    4 ** 1 / 2; // => 2
 */

const checkNumericOperators = () => {
    console.log("difference between 5 and 2: ", 5 - 2)
    console.log("sum of 5 and 2: ", 5 + 2)
    console.log("product of 5 and 2: ", 5 * 2)
    console.log("division of 5 divided by  2: ", 5 / 2)
    console.log("division of 5 divided by  2: ", 5 / 0)
    console.log("remainder of 5 divided by 2: ", 5 % 2)
    console.log(" 5 squared is: ", 5 ** 2)
}

module.exports = checkNumericOperators