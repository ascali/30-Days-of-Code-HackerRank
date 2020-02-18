/* Day 6: Let's Review */

#!JS
var input = "2\nHacker\nRank";
var arrayInput = input.split("\n");

var n = parseInt(arrayInput[0]);

for (var x = 0; x < n; x++) {
  var message = arrayInput[x + 1];
  var array = message.split('');
  
  var resultA = "";
  var resultB = "";

  for (var y = 0; y < message.length; y++){
    if (y%2 == 0)
      resultA = resultA + array[y];
    else
      resultB = resultB + array[y];
  }
  console.log(resultA + " " + resultB);
}

#!Python
#! Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())
string1 = input()
string2 = input()

string = [n, string1, string2]
n = int(string[0])

for x in range(0, n):
    message = string[x + 1]
    array = message
    
    resultA = ""
    resultB = ""

    for y in range(0, len(message)):
        if (y%2==0):
            resultA = resultA + array[y]
        else:
            resultB = resultB + array[y]

    print(resultA + " " + resultB)



#! PHP
<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */

fscanf($_fp, "%d", $n); //number
fscanf($_fp, "%s", $string1); //string
fscanf($_fp, "%s", $string2); //string
// $n = 2;
// $string1 = "Hacker";
// $string2 = "Rank";

$string = array($string1,$string2);

for ($x = 0; $x < (int)$n; $x++) {
    $resultA = "";
    $resultB = "";

    for ($y = 0; $y < strlen($string[$x]); $y++){
        if ($y%2 == 0) {
          $resultA = $resultA . $string[$x][$y];
        } else {
          $resultB = $resultB . $string[$x][$y];
        }
    }
    echo $resultA . " " . $resultB . "\n";
}

?>


