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


app.post('/api/addproduct', controller.create);
app.get('/api/getproducts', controller.getAll);
app.get('/api/getproduct/:id', controller.getOne);
app.put('/api/editproduct/:id', controller.update);
app.delete('/api/deleteproduct/:id', controller.delete);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});