// содежимое index.js
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

const express = require("express");
const server = express();

server.get(
  "/products",
  (request,
  response) => {
    try {
      response.send(JSON.stringify(data));
    } catch (err) {
      ("Something wrong");
    }
  });

server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
