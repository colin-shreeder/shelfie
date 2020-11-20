require ('dotenv').config();
const express = require("express");
const massive = require('massive');
const app = express();
const controller = require("./controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then( db => {
    app.set("db", db)
    console.log("Well, that's like... your opinion... man")
  })

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });

app.post('/api/inventory', controller.create);
app.get('/api/inventory', controller.getAll);
app.get('/api/inventory/:id', controller.getOne);
app.put('/api/inventory/:id', controller.update);
app.delete('/api/inventory/:id', controller.delete);