// const hello = "Hello World";
// console.log(hello);

//Blocking , synchronous
// const fs = require('fs');
// const textIn = fs.readFileSync('./txt/start.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about Node.Js : ${textIn}
// Created on ${Date.now()}
// `;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File written")

//  Non-blocking   , asynchronous


// const fs = require('fs');
// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{

//     if(err){
//         return console.log(`Error : ${err}`)
//     }

//     console.log(data1);
//     fs.readFile('./txt/output.txt','utf-8',(err,data2)=>{
//         console.log(data2);

//         fs.writeFile('./txt/final.txt','Test Final','utf-8',err=>{
//             console.log(`Ended`);
//         })
//     })
// });

// console.log('Already read');

//Simple Web Server

const http = require('http');
const url = require('url');
const fs = require('fs');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    // Overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(tempOverview);
    }
    // Product Page
    else if (pathName === '/product') {
        res.end('Hello from the Product');
    }
    // API
    else if (pathName === '/api') {
        fs.readFile(`${__dirname}/devdata/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            console.log(productData);
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);
        });
    }
    // Not found
    else {

        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello World'
        });

        res.end('<h1 style="color:red;"> Page Not Found </h1>');

    }
})

server.listen(27001, '127.0.0.1', () => {
    console.log('Listening to requests on port 27001');
})

