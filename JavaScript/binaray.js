// let btn = document.querySelector("button");
// let s, e, m, search, i, flag;

// function binaray() {

//     let a = [10, 20, 37, 48, 98];
//     s = 0;
//     e = a.length - 1;
//     flag = 0;
//     //search = parseInt(prompt("enter the number"));
//     while (s <= e) {
//         m = Math.floor((s + e) / 2);
//         if (search == a[m]) {
//             flag = 1;
//             break;
//         }
//         else if (search > a[m]) {
//             s = m + 1;
//         }
//         else {
//             s = m - 1;
//         }
//     }
//     if (flag == 1) {
//         return "number is find";
//     }
//     else {
//         return "number is not found";
//     }
// }
// btn.addEventListener("click", function () {
//     let input = document.querySelector("input").value;
//     search = parseInt(input);
//     let found = binaray();
//     let p = document.querySelector("p");
//     p.innerText = found;

// })
let btn = document.querySelector("button");
let s, e, m, search, i, flag;

function binaray() {
    let a = [10, 20, 37, 48, 98];
    s = 0;
    e = a.length - 1;
    flag = 0;

    while (s <= e) {
        m = Math.floor((s + e) / 2);
        if (search == a[m]) {
            flag = 1;
            break;
        }
        else if (search > a[m]) {
            s = m + 1;
        }
        else {
            e = m - 1;
        }
    }

    if (flag == 1) {
        return "Number is found";
    } else {
        return "Number is not found";
    }
}

btn.addEventListener("click", function () {
    let input = document.querySelector("input").value;
    search = parseInt(input);
    let found = binaray();
    let p = document.querySelector("p");
    p.innerText = found;
});
