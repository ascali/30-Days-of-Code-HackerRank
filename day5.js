/* Day 5: Loops */
#! https://www.hackerrank.com/challenges/30-loops

#! JS
function main() {
    const n = parseInt(readLine(), 10);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${(n*i)}`);
    }
}

#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input())
    for i in range(1, 11):
        print(n,"x", i,"=", n*i)

#!PHP
<?php

	$stdin = fopen("php://stdin", "r");

	fscanf($stdin, "%d\n", $n);

	for($i = 1; $i <= 10; $i++){
	    echo "$n x $i = ".($n*$i)."\n";
	}

	fclose($stdin);
