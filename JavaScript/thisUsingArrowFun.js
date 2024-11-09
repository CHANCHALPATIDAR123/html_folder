const stu = {
    name: "chanchal",
    age: 23,
    contact: 857658, // Corrected typo 'contect'
    pop: this, // `this` will refer to the global object here
    getName: function () {
        console.log(this); // Logs the `stu` object
        return this.name;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); // `this` refers to the `stu` object
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); // `this` refers to the global object (or undefined in strict mode)
        }, 2000);
    },
    getInfo3: function () {
        setTimeout(() => {
            console.log("Takecare"); // Logs "Takecare" after 2 seconds
        }, 2000);
    }
};
