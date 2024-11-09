
// btn.onclick = function () {
//     console.log("i am button");
//     alert("not submit");
// }
let btns = document.querySelectorAll('button');
for (let btn of btns) {
    // btn.onclick = sayHello;

    // btn.onmouseenter = function () {
    //     console.log("i am chanchal");
    // };

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}
function sayHello() {
    alert("not a safe");
}

function sayName() {
    alert("i am java developer");
}
