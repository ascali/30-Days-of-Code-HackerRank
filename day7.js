#! Day 7: Arrays
#! https://www.hackerrank.com/challenges/30-arrays/problem

#!js
#! const arr = [1,4,3,2];
const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
console.log( (arr.reverse()).join(' ') );


#!python
#!arr = list(1,2,3,4)
arr = list(map(int, input().rstrip().split()))
array = '';
for i in reversed(arr):
    array += str(i)+' '

print(array)

#!php
$arr = [1,4,3,2];
echo implode(" ", (array_reverse($arr)) ); 