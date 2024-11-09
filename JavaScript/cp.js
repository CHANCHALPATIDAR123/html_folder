// let smallImg = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImg.length; i++) {
//     console.dir(smallImg[i]); // Log each image element to the console
// }
// let links = document.querySelectorAll(".box a");
// // for (let i = 0; i < links.length; i++) {
// //     links[i].style.color = "red";
// // }

// for (link of links) {
//     link.style.color = "green";
// }




// let para = document.createElement("p");
// para.innerText = "I am para";
// document.querySelector('body').append(para);

let para = document.createElement("button");
para.innerText = "click here!";
document.querySelector('body').append(para);

const place = document.querySelector("input");
place.placeholder = "chanchal";

// const btn = document.querySelector("button");
// btn.id = pd;
// console.log(btn);

const btn = document.querySelector("button");
btn.id = "pd";  // Here, "pd" should be a string, so it needs quotes
console.log(btn);

btn.style.color = "red";

const h1 = document.createElement("h1");
h1.innerText = "hello i am good";
h1.style.textDecoration = "underline";
h1.style.color = "red";
document.body.append(h1);

const p = document.createElement('p');
p.innerHTML = `ApnaCollege <strong>Delta</strong> Practice`;  // Set the text with "Delta" bold
document.body.append(p);