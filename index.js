// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const res = require("express/lib/response");

// Initialize express and define a port
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());

app.all("/", (request, response) => {

    if (request.method === "GET" && request.query.challenge) {
        console.log(`Received challenge code! - ${request.query.challenge}`);
        response.send(request.query.challenge);
        console.log(`Responding with challenge code! - ${request.query.challenge}`);
    }

    if (request.method === "POST") {
        console.log('==========BODY DELTAS START==========');
        console.log(request.body.deltas);
        console.log('==========BODY DELTAS START==========\n');
    }

    response.status(200).end() // Responding is important
  })


// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));