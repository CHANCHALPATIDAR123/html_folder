// function multipleGreept(func, n) {
//     for (let i = 0; i <= n; i++) {
//         func();
//     }
// }
// let greet = function () {
//     console.log("hello");
// }
// multipleGreept(greet, 2);

function oddevenTest(req) {
    if (req == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (req == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    }
    else {
        console.log("something wrong");
    }
}
let req = "odd";

let a = 10;
let b = 20;
let temp;

temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);


let p = 5;
let q = 9;
if (p > 0) {
    console.log("number is positive");
}
else if (p < 0) {
    console.log("number is negative");
}
else {
    console.log("number is zero");
}

