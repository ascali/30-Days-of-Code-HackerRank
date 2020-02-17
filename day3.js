/* Day 3: Intro to Conditional Statements */

#! JS
function main() {
    const N = parseInt(readLine(), 10);
    if (N % 2 != 0 || N >= 6 && N <= 20){
        console.log('Weird');
    } else if (N >= 2 && N <= 5 || N % 2 == 0 && N >= 20) {
        console.log('Not Weird');
    }
}

#! PYTHON
#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    N = int(input())
    if (N % 2 != 0 or N >= 6 and N <= 20):
        print("Weird")
    elif (N >= 2 and N <= 5 or N % 2 == 0 and N >= 20):
        print("Not Weird")

#! PHP
<?php

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $N);
if ($N % 2 != 0 || $N >= 6 && $N <= 20){
    echo "Weird";
} else if ($N >= 2 && $N <= 5 || $N % 2 == 0 && $N >= 20) {
    echo "Not Weird";
}

fclose($stdin);
