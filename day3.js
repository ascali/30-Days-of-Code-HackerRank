/* Day 3: Intro to Conditional Statements */

function main() {
    const N = parseInt(readLine(), 10);
    if (N % 2 != 0 || N >= 6 && N <= 20){
        console.log('Weird');
    } else if (N >= 2 && N <= 5 || N % 2 == 0 && N >= 20) {
        console.log('Not Weird');
    }
}