/*Day 2: Operators*/
#!JS
// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    let tip = meal_cost*(tip_percent/100);
    let tax = meal_cost*(tax_percent/100);
    let totalCost = meal_cost + tip + tax;
    console.log(totalCost.toFixed(0));
}

#!PYTHON
#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(meal_cost, tip_percent, tax_percent):
    tip = meal_cost*(tip_percent/100);
    tax = meal_cost*(tax_percent/100);
    totalCost = meal_cost + tip + tax;
    print(round(totalCost))

if __name__ == '__main__':
    meal_cost = float(input())

    tip_percent = int(input())

    tax_percent = int(input())

    solve(meal_cost, tip_percent, tax_percent)


#!PHP
// Complete the solve function below.
function solve($meal_cost, $tip_percent, $tax_percent) {
    $tip = $meal_cost*($tip_percent/100);
    $tax = $meal_cost*($tax_percent/100);
    $totalCost = $meal_cost + $tip + $tax;
    echo round($totalCost);
}