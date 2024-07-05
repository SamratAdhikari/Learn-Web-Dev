const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const index = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alignment</title>
    <style>
        *{
            box-sizing: border-box;
        }
        body{
            font-family: cursive;
        }
        .container{
            width: 900px;
            border: 5px solid purple;
            margin: auto;
        }
        .item{
            border: 3px solid green;
            padding: 12px 3px;
            margin: 12px 3px;
            background-color: rgb(248, 235, 235);
        }
        #fruits{
            float:left;
            width:48%;
        }
        #computers{
            float:left;
            padding: 1px 5px 0px 5px;
            width:48%;
        }
        #stationary{
            /* float:left; */
            clear: left;
            width:98%;
        }
        p, h3{
            text-align: right;
            text-align: left;
            text-align: center;
            text-align: justify;
        }
        h1{
            margin:auto;
            width: 395px;
        }

    </style>
</head>

<body>
    <div class="container">
        <h1>Welcome to my Store</h1>
        <div class="item" id="fruits">
            <h3>Fruits</h3>
            <p id="fruitsPara" class="Para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam perspiciatis fuga assumenda eius, dolor est. Quas ad, velit laudantium aut laborum placeat nobis? Accusantium natus expedita voluptatum aliquam atque consequatur sunt suscipit optio quae!
            </p>
        </div>

        <div class="item" id="computers">
            <h3>Computers</h3>
            <p id="computersPara" class="Para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quo. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda numquam quisquam doloribus ea natus nemo ad rem nostrum dolore. Sed, quidem nam. Corrupti, vero. Nemo tempore id perferendis voluptas hic debitis repudiandae fuga dolore.
            </p>
        </div>

        <div class="item" id="stationary">
            <h3>Stationary</h3>
            <p id="stationaryPara" class="Para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores non natus incidunt quia consectetur pariatur nisi nihil, distinctio obcaecati iure odit molestias ad modi impedit nostrum cumque saepe quasi ut ipsa corporis omnis. Impedit, facere?
            </p>
        </div>
    </div>

</body>

</html>`

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


