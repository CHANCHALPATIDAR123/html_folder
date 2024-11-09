// console.log("hello world");
// alert("something is wrong");
// let first = prompt("Enter your name:");
// console.log(first);
// let colors = ["red", "yellow", "blue", "orange", "pink"];

let todo = [];
let req;

while (req !== "quit") {
    req = prompt("Enter your choice (add, list, delete, or quit):");

    if (req === "quit") {
        console.log("quitting app");
    }
    else if (req === "list") {
        console.log("-------------------------");
        if (todo.length === 0) {
            console.log("No tasks available.");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i}: ${todo[i]}`);
            }
        }
    }
    else if (req === "add") {
        let ad = prompt("Please enter the task you want to add:");
        todo.push(ad);
        console.log("Task added:", ad);
    }
    else if (req === "delete") {
        let idx = parseInt(prompt("Enter the index of the task to delete:"));
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            let deleted = todo.splice(idx, 1);
            console.log("Deleted task:", deleted[0]);
        } else {
            console.log("Invalid index.");
        }
    }
    else {
        console.log("Invalid request.");
    }
}
