/* Day 1 Variable */

#! JS
var i = 4
var d = 4.0
var s = "HackerRank "
// Declare second integer, double, and String variables.
var i2;
var d2;
var s2;
// Read and save an integer, double, and String to your variables.
i2 = parseInt(readLine()); // readLine() is Reads complete line from STDIN
d2 = parseFloat(readLine());
s2 = readLine();
// Print the sum of both integer variables on a new line.
console.log(i + i2);
// Print the sum of the double variables on a new line.
console.log((d + d2).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + s2);


#! PYTHON
i = 4
d = 4.0
s = 'HackerRank '
# Declare second integer, double, and String variables.
i2 = input()
d2 = input()
s2 = input()
# Read and save an integer, double, and String to your variables.
i2 = int(i2)
d2 = float(d2)
s2 = s2
# Print the sum of both integer variables on a new line.
print(i + i2)
# Print the sum of the double variables on a new line.
print(round((d + d2), 1))
# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print(s + s2)


#! PHP
<?php
$handle = fopen ("php://stdin","r");
$i = 4;
$d = 4.0;
$s = "HackerRank ";
// # Declare second integer, double, and String variables.
$i2 = trim(fgets($handle));
$d2 = trim(fgets($handle));
$s2 = trim(fgets($handle));
// # Read and save an integer, double, and String to your variables.
$i2 = (int)$i2;
$d2 = (float)$d2;
$s2 = (string)$s2;
// # Print the sum of both integer variables on a new line.
echo ($i + $i2)."\n";
// # Print the sum of the double variables on a new line.
printf("%.1f \n",($d + $d2));
// # Concatenate and print the String variables on a new line
// # The 's' variable above should be printed first.
echo $s . $s2;

fclose($handle);
?>