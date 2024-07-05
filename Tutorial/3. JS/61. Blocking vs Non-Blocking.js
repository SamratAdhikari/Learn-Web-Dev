const fs = require("fs");
// Synchronous or Blocking => line by line execution guaranteed(suru ma bhako suru ma execute huni ani last ma bhako last ma execute huni)
fs.readFileSync("text.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is synchronus")



// Asynchronus or Non-Blocking =>  line by line execution not guaranteed(call backs will fire)
// fs.readFile("text.txt", "utf-8", (err, data)=>{
//     console.log(data);
// });
// console.log("This is asynchronus")
