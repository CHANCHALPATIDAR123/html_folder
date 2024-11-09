// // let add;
// // function sum(a, b) {
// //     add = a + b;
// // }
// // sum(4, 7);
// // console.log(add);
// // sum("hello", "world");
// // console.log(add);

// // var add = 0;
// // function sum(a, b) {
// //     add = a + b;
// // }
// // sum(4, 7);
// // console.log(add);

// // function print() {
// //     let sum = 0;
// //     for (let i = 1; i <= 10; i++) {
// //         sum += i;
// //     }
// //     return sum;
// // }
// // let add = print();
// // console.log(add);

// // function print(a, b) {
// //     let sum = 0;
// //     for (let i = a; i <= b; i++) {
// //         sum += i;
// //     }
// //     return sum;
// // }
// // let add = print(3, 5);
// // console.log(add);


// // function large() {
// //     let max = 0, a;
// //     for (let i = 1; i < 4; i++) {
// //         a = parseInt(prompt("enter the value:"));
// //         if (max < a) {
// //             max = a;
// //         }
// //     }
// //     console.log(max);
// // }
// // large();

// // function inter() {
// //     let p = 1200, r = 2, t = 3, inp;
// //     inp = (p * r * t) / 100;
// //     return inp;
// // }
// // let ins = inter();
// // console.log(ins);



// function area(l, w) {
//     let area = l * w;
//     return area;
// }
// let a = parseInt(prompt("enter value of l"));
// let b = parseInt(prompt("enter value of w"));
// let rec = area(a, b);
// document.write(rec);
function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    const name = "Alice";
    callback(name);  // Calling the callback function
}

processUserInput(greet);  // `greet` is passed as a callback

function higherOrder(fn) {  // `fn` is a function passed as an argument
    return function (x) {
        return fn(x) * 2;
    };
}

function addTen(num) {
    return num + 10;
}

const resultFunction = higherOrder(addTen); // Passing `addTen` as an argument
console.log(resultFunction(5)); // Outputs 30 (i.e., (5 + 10) * 2)
