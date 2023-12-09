const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const PORT = 3333;
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'))
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, 'public')));

//Rotas
const productRouter = require("./routers/productRouter");

app.use("/product", productRouter);

app.listen(3333, () => {
  console.log("Servidor on 🚀");
});
