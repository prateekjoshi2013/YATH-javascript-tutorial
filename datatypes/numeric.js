/**
 * We will focus only on primitive datatypes 
 * Number
 * Boolean 
 * String 
 * types
 * /
 
/**
 * Number Data Types
 * 
 * 1) number
 *  
 *      A numeric data type in the double-precision 64-bit floating-point format (IEEE 754). 
 *      Examples are -6, -2.4, 0, 0.1, 1, 3.14, 16.984025, 25, 976, 1024.0 and 500000.
 * 
 * 2) bigint 
 * 
 *      A numeric data type that can represent integers in the arbitrary precision format. 
 *      Examples are -12n, 0n, 4n, and 9007199254740991n.
 *      Always remember to use n after the umerical value to represent bigint
 */

const checkNumericTypes=()=>{
    console.log(
        //======WRITE YOUR CODE (PROMPT-1)======//
        
        9007199254740991n ,"is of type", "bigint"

        //======YOUR CODE ENDS (PROMPT-1)======//
        )
   
    console.log(
        //======WRITE YOUR CODE (PROMPT-2)======//
        
            6 ,"is of type", "?"
    
        //======YOUR CODE ENDS (PROMPT-2)======//
        )

    console.log(
        //======WRITE YOUR CODE (PROMPT-3)======//
        
            -2.4 ,"is of type", "?"
    
        //======YOUR CODE ENDS (PROMPT-3)======//
        )

    console.log(
        //======WRITE YOUR CODE (PROMPT-4)======//
        
            0n ,"is of type", "?"
    
        //======YOUR CODE ENDS (PROMPT-4)======//
        )

    console.log(
        //======WRITE YOUR CODE (PROMPT-5)======//
        
        16.984025 ,"is of type", "?"
    
        //======YOUR CODE ENDS (PROMPT-5)======//
        )
}

module.exports= { checkNumericTypes }