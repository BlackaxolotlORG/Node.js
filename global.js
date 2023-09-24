//global object
console.log(global);

//runs the program once
global.setTimeout(() => {
    console.log("in the timeout")
}, 3000);

//runs the program every second
const int = setInterval(() => {
    console.log("in the interval")
}, 1000);