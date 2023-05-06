/*
There are a few primary ways to assign values to names in JavaScript 
- using variables or constants. 

Convention:

    variables are always written in camelCase; 
    constants are written in SCREAMING_SNAKE_CASE. 

Variables in JavaScript can be defined using the const, let or var keyword.

A variable can reference different values over its lifetime when using let or var.

    For example, 
        myFirstVariable can be defined and redefined many times 
        using the assignment operator =

        let myFirstVariable = 1;
        myFirstVariable = 'Some string';
        myFirstVariable = new SomeComplexClass();

In contrast to let and var, variables that are defined with const 
can only be assigned once. This is used to define constants in JavaScript.

        const MY_FIRST_CONSTANT = 10;

        // Can not be re-assigned.
        
            MY_FIRST_CONSTANT = 20;

        // => TypeError: Assignment to constant variable.

The const keyword only makes the binding immutable, that is, you can only assign a value to a const variable once. In JavaScript, only primitive values are immutable. However, non-primitive values can still be mutated.

        const MY_MUTABLE_VALUE_CONSTANT = { food: 'apple' };

        // This is possible
        MY_MUTABLE_VALUE_CONSTANT.food = 'pear';

        MY_MUTABLE_VALUE_CONSTANT;
        // => { food: "pear" }
*/


const checkDeclareVariableWithLet = () => {
    let var1;
    var1 = 'first_value';
    console.log('first value assignment: ', var1);
    var1 = 'reassigned_value';
    console.log('reassigned value : ', var1);
}

const checkDeclareVariableWithVar = () => {
    var var1;
    var1 = 1;
    console.log('first value assignment: ', var1);
    var1 = 2;
    console.log('reassigned value : ', var1);
}


const checkDeclareConst = () => {
    const MY_CONST = 'CONSTANT_VALUE_1';
    console.log('first const value assignment: ', MY_CONST);
    MY_CONST = 'CONSTANT_VALUE_2';
}

module.exports = {
    checkDeclareVariableWithLet,
    checkDeclareVariableWithVar,
    checkDeclareConst
}