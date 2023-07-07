# AngelHack Dev Hangouts Session 1 - Introduction to Solidity

## Key Takeaways From Session 1

1. **pragma**: directive must be the first line of code in any Solidity file and specifies the Solidity version. This is important as different compiler versions yield different results when compiling code

2. **contract**: tells the compiler that you are declaring a smart contract. Can be thought of as classes in Object Oriented Programming that hold variables and functions

3. **constructor**: creates one instance of the SimpleStorage smart contract and expects a string value \_message parameter. When the smart contract is constructed, the \_message variable will be stored in the state variable message

4. **memory**: variables can only be declared within methods and are usually used in method parameters. It’s a short term variable that cannot be saved on the blockchain and holds the value only during the execution of a function and its value is destroyed after execution

5. **view**: means that the function can only “view” (read and not write) to the contract state. view is also often used in getter functions
