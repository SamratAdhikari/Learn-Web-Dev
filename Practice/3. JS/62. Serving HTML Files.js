const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 80;

const fileContent = fs.readFileSync("32.Box Shadow and Text Shadow.html");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(fileContent);

});


server.listen(port, hostname, ()=>{
    console.log(`Listening on Port ${port}`);
    console.log(`Server running at http://${hostname}:${port}/`);
})
