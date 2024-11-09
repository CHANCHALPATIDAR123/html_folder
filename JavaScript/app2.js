// let Student = {
//     name: "chanchal",
//     age: 23,
//     marks: 95.0
// }

// const item = {
//     name: "pen",
//     qut: 8,
//     color: ["red", "pink"]
// }

const num = prompt("enter the range");
const random = Math.floor(Math.random() * num) + 1;

let guss = prompt("guss the number");
while (true) {
    if (guss == "quit") {
        console.log("your exit");
        break;
    }

    if (guss == random) {
        console.log("congratulation you are right", random);
        break;
    }
    else if (guss < random) {
        guss = prompt("guss number is too less.please try again");
    }
    else {
        guss = prompt("guss number is too big.plx try again");
    }
}