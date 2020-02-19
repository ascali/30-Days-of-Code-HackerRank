/*Day 0 Hello world*/
#! https://www.hackerrank.com/challenges/30-hello-world/problem

#!js
function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    console.log(inputString);
    // Write the second line of output that prints the contents of 'inputString' here.
}

var str = 'Welcome to 30 Days of Code!';
processData(inputString);

#!python
# Read a full line of input from stdin and save it to our dynamically typed variable, input_string.
input_string = input()

# Print a string literal saying "Hello, World." to stdout.
print('Hello, World.')
print(input_string)

# TODO: Write a line of code here that prints the contents of input_string to stdout.



#!PHP
<?php
$_fp = fopen("php://stdin", "r");

$inputString = fgets($_fp); // get a line of input from stdin and save it to our variable

// Your first line of output goes here
print("Hello, World.\n");
print($inputString);
// Write the second line of output

fclose($_fp);
?>

