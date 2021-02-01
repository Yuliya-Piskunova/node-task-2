// содежимое index.js
const http = require("http");
const port = 4000;
const data = [
  {
    displayName: "Cyberpank 2077",
    price: "60$",
    rating: 2.7,
  },
  {
    displayName: "SpongeBob SquarePants: Battle for Bikini Bottom – Rehydrated",
    price: "40$",
    rating: 9.8,
  },
  {
    displayName: "God Of War",
    price: "50$",
    rating: 8.6,
  },
];

const requestHandler = (request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8;");
  if (request.method == "GET") {
    if (request.url === "" || request.url === "/") {
      response.write("<h2></h2>");
    } else if (request.url === "/products") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(data));
    } else {
      response.write("<h2></h2>");
    }
    response.end("");
  } else {
    // POST
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      data.push(JSON.parse(body));
      response.end(JSON.stringify(data));
    });
  }
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
