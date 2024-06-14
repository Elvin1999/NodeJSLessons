// const EventEmitter=require("events");

// const myEmitter=new EventEmitter();

// myEmitter.on("newSale",()=>{
//     console.log("There was a sale!");
// })

// myEmitter.on("newSale",()=>{
//     console.log("Customer name : Murad");
// })

// myEmitter.on("newSale",(stock)=>{
//     console.log(`There are now ${stock} items left in stock`);
// })

// myEmitter.emit("newSale",9);

const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another received!");
});

server.on("close", () => {
  console.log("Server Closed");
});

server.listen(27001, "127.0.0.1", () => {
  console.log("Waiting for requests");
});
