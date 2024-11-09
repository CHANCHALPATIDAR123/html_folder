// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let input = document.querySelector("input");
// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = input.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     input.value = " ";

//     delBtn.addEventListener("click", function () {
//         let item = this.parentElement;
//         item.remove();
//     });
// });


// let delBtns = document.querySelectorAll(".delete");
// delBtns.forEach(function (delBtn) {
//     delBtn.addEventListener("click", function () {
//         let item = this.parentElement;
//         item.remove();
//     });
// });



// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let input = document.querySelector("input");

// // Add event listener to dynamically created buttons
// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = input.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     input.value = ""; // Clear input properly

//     // Add event listener to the new delete button
//     delBtn.addEventListener("click", function () {
//         let item = this.parentElement;
//         item.remove();
//     });
// });

// // Add event listeners to existing delete buttons in the HTML
// let delBtns = document.querySelectorAll(".delete");
// delBtns.forEach(function (delBtn) {
//     delBtn.addEventListener("click", function () {
//         let item = this.parentElement;
//         item.remove();
//     });
// });

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);

    inp.value = " ";

    delBtn.addEventListener("click", function () {
        let item = this.parentElement;
        item.remove();
    });

});

// let delBtns = document.querySelectorAll(".delete");
// delBtns.forEach(function (delBtn) {
//     delBtn.addEventListener("click", function () {
//         let item = this.parentElement;
//         item.remove();
//     });
// });

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let item = event.target.parentElement;
        item.remove();
    }
})
