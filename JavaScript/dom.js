// Here are the JavaScript programs for each problem:

// 1. Swap Two Variables


function swapVariables() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let temp = a;
    a = b;
    b = temp;
    document.getElementById("result1").innerHTML = "a = " + a + ", b = " + b;
}


// 2. Check Even/Odd


function checkEvenOdd() {
    let num = parseInt(document.getElementById("num").value);
    if (num % 2 == 0) {
        document.getElementById("result2").innerHTML = num + " is even";
    } else {
        document.getElementById("result2").innerHTML = num + " is odd";
    }
}


// 3. Reverse String


function reverseString() {
    let str = document.getElementById("str").value;
    let reversed = str.split("").reverse().join("");
    document.getElementById("result3").innerHTML = reversed;
}


// 4. Factorial
function findFactorial() {
    let num = parseInt(document.getElementById("numFact").value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById("result4").innerHTML = "Factorial of " + num + " is " + factorial;
}


// 5. Leap Year


function checkLeapYear() {
    let year = parseInt(document.getElementById("year").value);
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        document.getElementById("result5").innerHTML = year + " is a leap year";
    } else {
        document.getElementById("result5").innerHTML = year + " is not a leap year";
    }
}


// 6. Fibonacci Sequence


function printFibonacci() {
    let n = parseInt(document.getElementById("n").value);
    let fib = [0, 1];
    while (fib.length < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    document.getElementById("result6").innerHTML = fib.join(", ");
}


// 7. Largest of Three


function findLargest() {
    let a = parseInt(document.getElementById("aLarge").value);
    let b = parseInt(document.getElementById("bLarge").value);
    let c = parseInt(document.getElementById("cLarge").value);
    let largest = Math.max(a, b, c);
    document.getElementById("result7").innerHTML = largest + " is the largest";
}


// 8. Count Vowels


function countVowels() {
    let str = document.getElementById("strVowels").value;
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            vowels++;
        }
    }
    document.getElementById("result8").innerHTML = "There are " + vowels + " vowels";
}


// 9. Check Prime


function checkPrime() {
    let num = parseInt(document.getElementById("numPrime").value);
    if (num > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            document.getElementById("result9").innerHTML = num + " is a prime number";
        } else {
            document.getElementById("result9").innerHTML = num + " is not a prime number";
        }
    } else {
        document.getElementById("result9").innerHTML = num + " is not a prime number";
    }
}


// 10. Sum of Array


function sumArray() {
    let arr = document.getElementById("arr").value.split(",");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    document.getElementById("result10").innerHTML = "Sum is " + sum;
}





