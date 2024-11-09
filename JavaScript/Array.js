// let arr = [4, 6, 7, 9, 3];
// function print(el) {
//     console.log(el);
// }
// arr.forEach(print);

// let arr1 = [22, 44, 5, 66, 77, 88];
// function element(p) {
//     console.log(p);
// }
// arr1.forEach(element);

// let arrow = (() => {
//     console.log("hello");
// }, 2000);

// const sum = (a, b) => {
//     console.log(a + b);
// };
// sum(5, 6);

// arr.forEach(function (e1) {
//     console.log(e1);
// })

// let num = [2, 4, 6, 8, 9];
// let double = num.map(function (cp) {
//     return cp * 2;
// })
// console.log(double);

// let num1 = [3, 5, 7, 2, 1, 4];

// let mul = num1.map(function (pc) {
//     return pc * 3;
// });
// console.log(mul);


// let num2 = [5, 7, 9, 4, 3];

// num2.forEach(function (pn) {
//     console.log(pn);
// });

// let num3 = [2, 4, 6, 8, 9];
// let div = num3.map(function (pp) {
//     return pp / 2;
// });
// console.log(div);
// let sum = function (a, b) {
//     console.log(a + b);
// }
// sum(10, 20);

// let sub = (a, b) => {
//     console.log(a - b);
// }
// sub(10, 5);



// let student = {
//     pg: function () {
//         setTimeout(() => {
//             console.log("hello");
//         }, 2000);
//     }
// };
// let student = {
//     pg: function () {
//         setTimeout(() => {
//             console.log("hello");
//         }, 2000);
//     }
// };

// let pc = [2, 5, 3, 7, 9, 1];

// let div1 = pc.map(function (e) {
//     return e * 2;
// });
// console.log(div1);

// let pc1 = [5, 6, 2, 4, 1];

// pc1.forEach(function (e) {
//     console.log(e);
// });

// let num4 = [2, 5, 3, 8, 9, 4];
// let even = num4.filter((el) => {
//     return el % 2 == 0;
// });
// console.log(even);
// let one = [2, 4, 3, 1];
// let rec = one.reduce((res, el) => (res + el));
// console.log(rec);

// let st = [101, "chanchal", 21, "patidar@123", 7865];
// for (let i = 0; i < st.length; i++) {
//     console.log(st[i]);
// }

// let a = [2, 3, 5, 8, 9];
// let sm = a[0];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < sm) {
//         sm = a[i];
//     }
// }
// console.log(sm);

// function rev() {
//     let arr, ar = [];
//     for (let i = 0; i < 4; i++) {
//         arr = prompt("enter the element:");
//         ar.push(arr);
//         // ar = arr.split(",");

//     }
//     for (let i = ar.length - 1; i >= 0; i--) {
//         console.log(ar[i]);
//     }
// }
// rev();


// function rev() {
//     let ar = [];
//     for (let i = 0; i < 4; i++) {
//         let arr = prompt("Enter element :");
//         ar.push(arr);
//     }
//     for (let i = ar.length - 1; i >= 0; i--) {
//         console.log(ar[i]);
//     }
// }
// rev();


// function emp(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }
// let employee = [1, "pooja", "CEO", 230000, 5];
// emp(employee);

// let m = [1, 2, 3];
// let n = [4, 5, 6];
// let p=[7,8,9];
// let c = [...m, ...n,...p];
// console.log(c);


let arr = [2, 4, 6, 7, 8, 4];
let sum1 = 0, sum2 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum1 += arr[i];
    }
    else {
        sum2 += arr[i];
    }
}
console.log(sum1);
console.log(sum2);

let a = [50, 40, 60, 20, 29];
let b = [25, 87, 56, 34, 90];
let c = [78, 56, 34, 78, 98];

let d = [...a, ...b, ...c];
for (let e of d) {
    console.log(e);
}

function multi(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0) {
            console.log(arr[i]);
        }
    }
}
let arr1 = [2, 5, 7, 9, 10, 15, 35, 23, 68, 45];
multi(arr1);


function emp(em) {
    let arr2 = [];
    for (let i = 0; i < em.length; i++) {
        let bon = em[i] * 0.1;
        arr2.push(em[i] + bon);
    }
    return arr2;
}
let arr3 = [5000, 20000, 10000, 15000];
let bonus = emp(arr3);
console.log(bonus);