/*
    About Strings
    A string is the JavaScript data type to store text data.

    Creating a String
    You create a string by wrapping the text in single quotes or double quotes.

    'Hello, World!'
    "Hello, World!"
*/

const stringRepresentation=()=>{
    console.log(
        'Hello World' , 
        "is of type" , 
        typeof "Hello World"
    )

    console.log(
        'Hello World' , 
        "is of type" , 
        typeof "Hello World"
    )
}

/*

    Strings as Lists of Characters
    A string can be treated as a list of characters where the first character has index 0. You can access an individual character of the string using square brackets and the index of the letter you want to retrieve.

    'cat'[1];
    // => 'a'

    You can determine the number of characters in a string by accessing the length property.

    'cat'.length;
    // => 3


*/


const stringProperties=()=>{
    console.log(
        'first character of string Hello World: ',
        'Hello World'[0] 
    )

    console.log(
        'last character of string Hello World: ',
        'Hello World'[10] 
    )

    console.log(
        'length of string Hello World: ' , 
        'Hello World'.length 
    )
}

module.exports={ stringRepresentation, stringProperties }