let btn = document.querySelector("button");

let url2 = "https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#img");
    img.setAttribute("src", link);
    console.log(link);
});



// let url = "https://catfact.ninja/fact";
// fetch(url)  //retrun Promise
//     .then((res) => {
//         console.log(res);
//         res.json().then((data) => {
//             console.log(data);
//         })
//     })
//     .catch((err) => {
//         console.log("Error-", err);
//     });

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         return "no fact found";
//     }
// }

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        return "no img found";
    }
}