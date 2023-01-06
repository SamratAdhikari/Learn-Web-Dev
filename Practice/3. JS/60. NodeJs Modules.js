const fs = require("fs");
let text = fs.readFileSync("text.txt", "utf-8");

// replace 
text = text.replace("World", "Nepal");

// write the data in file
fs.writeFileSync("new_text.txt", text);

// print the data from text.txt
console.log("The Content of the file is ");
console.log(text);

